/**
 * AfyaMind Backend Server
 * Express + Google Gemini API + Supabase
 *
 * Run: node server.js  OR  npm run dev (with nodemon)
 */

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const supabase = require("./supabase");

const app = express();
const PORT = process.env.PORT || 3001;

// ── Gemini client ────────────────────────────────────────────
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite" });

// ── Middleware ─────────────────────────────────────────────────
app.use(express.json({ limit: "10kb" }));
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL || "http://localhost:5500",
      "http://127.0.0.1:5500",
      "http://localhost:3000",
      "http://127.0.0.1:3000",
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ── JWT Middleware ────────────────────────────────────────────
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid or expired token" });
  }
};

// ── Optional-auth middleware ─────────────────────────────────
// Like verifyToken, but never blocks the request. If a valid token
// is present, req.user is set; otherwise req.user stays null.
// Used for community endpoints that behave differently for
// logged-in vs logged-out visitors (viewing groups/posts) without
// locking logged-out visitors out entirely.
const optionalAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    req.user = null;
    return next();
  }
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    req.user = null;
  }
  next();
};

// Rate limiting — protect the AI endpoint
const aiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 20,             // 20 requests per minute per IP
  message: { error: "Too many requests. Please wait a moment." },
});

// Auth limiter
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: "Too many auth attempts. Try again later." },
});

// ── AUTH ENDPOINTS ──────────────────────────────────────────────

app.post("/api/auth/signup", authLimiter, async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user exists
    const { data: existing } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();

    if (existing) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const { data: user, error } = await supabase
      .from("users")
      .insert({
        email,
        password_hash: hashedPassword,
        first_name: firstName,
        last_name: lastName,
      })
      .select()
      .single();

    if (error) throw error;

    // Create profile
    await supabase.from("user_profiles").insert({
      user_id: user.id,
      preferred_language: "en",
    });

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRY }
    );

    res.status(201).json({
      token,
      user: { id: user.id, email: user.email, firstName: user.first_name },
    });
  } catch (error) {
    console.error("Signup error:", error.message);
    res.status(500).json({ error: "Failed to create account" });
  }
});

app.post("/api/auth/login", authLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    // Find user
    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (error || !user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Verify password
    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRY }
    );

    res.json({
      token,
      user: { id: user.id, email: user.email, firstName: user.first_name },
    });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ error: "Login failed" });
  }
});

// ── AFYA SYSTEM PROMPT ────────────────────────────────────────
const AFYA_SYSTEM_PROMPT = `You are Afya, AfyaMind's compassionate AI wellness guide built for East Africa.

CORE IDENTITY:
- You speak warmly in Swahili OR English — always follow the user's language lead
- You are NOT a therapist or doctor. You listen, validate, and guide toward human support.
- You never diagnose, prescribe, or give clinical advice
- You are culturally aware of East African contexts (Kenya, Uganda, Tanzania, Ethiopia, Rwanda)
- Your name means "Health" in Swahili. You embody warmth, patience, and non-judgment.

CONVERSATION STYLE:
- Always validate feelings FIRST before any suggestions ("I hear you...", "That sounds really hard...")
- Use simple, warm language — avoid clinical or cold phrasing
- Keep responses concise (2-4 short paragraphs max)
- Use occasional emojis to feel warm but not excessive (💚 🌿 💙)
- Ask at most ONE follow-up question per message
- After 3-4 exchanges, gently guide toward professional support or app features

CRISIS DETECTION — CRITICAL:
If the user mentions ANY of: suicidal thoughts, self-harm, harming others, immediate danger, "I want to die", "I can't go on" — IMMEDIATELY:
1. Acknowledge with deep care
2. Provide crisis line: Befrienders Kenya: +254 722 178 177 or Kenya Red Cross: 1199
3. Encourage them to call RIGHT NOW
4. Do NOT continue normal conversation — focus entirely on safety

RECOMMENDATION GUIDANCE:
- Anxiety, stress, worry → Suggest breathing exercises, mood tracker, therapist
- Depression, sadness → Validate deeply, suggest community groups, therapist
- Addiction → Be extra non-judgmental, suggest addiction support module, specialist
- Grief → Hold space, suggest community, grief counsellors
- Relationship issues → Suggest couples counsellors, self-help content
- Just exploring → Welcome them, explain AfyaMind features gently

AVAILABLE APP FEATURES (mention these naturally):
- Talk to Afya AI (this chat)
- Find a Therapist (directory of 500+ verified providers in East Africa)
- Mood Tracker (daily check-ins, patterns)
- Community Groups (peer support, anonymous)
- Wellness Exercises (breathing, grounding, journaling)
- Addiction Support Module (sobriety tracker, urge journal)
- Safety Plan Builder
- Learn & Grow (articles, podcasts, courses in EN/SW)

LANGUAGE:
- If user writes in Swahili, respond entirely in Swahili
- If user writes in English, respond in English
- If mixed, follow their dominant language
- Common Swahili phrases: "Karibu" (welcome), "Pole sana" (so sorry), "Unajisikiaje?" (how are you feeling?)

Remember: You are a warm, culturally-grounded guide. You hold space. You do not fix.`;

// ── ROUTES ────────────────────────────────────────────────────

// Health check
app.get("/", (req, res) => {
  res.json({
    status: "AfyaMind API is running 🌿",
    version: "1.0.0",
    endpoints: {
      auth: {
        signup: "POST /api/auth/signup",
        login: "POST /api/auth/login",
      },
      chat: {
        triage: "POST /api/triage (requires auth)",
        triageAnon: "POST /api/triage-anon (anonymous, no persistence)",
        history: "GET /api/chat/history (requires auth)",
      },
      mood: {
        log: "POST /api/mood/log (requires auth)",
        logs: "GET /api/mood/logs (requires auth)",
        insights: "POST /api/mood/insights (requires auth)",
      },
      profile: {
        get: "GET /api/user/profile (requires auth)",
        update: "PUT /api/user/profile (requires auth)",
      },
      community: {
        listGroups: "GET /api/groups",
        myGroups: "GET /api/user/groups (requires auth)",
        createGroup: "POST /api/groups (requires auth)",
        joinGroup: "POST /api/groups/:id/join (requires auth)",
        viewGroup: "POST /api/groups/:id/view",
        listPosts: "GET /api/groups/:id/posts",
        createPost: "POST /api/groups/:id/posts (requires auth + membership)",
        listComments: "GET /api/posts/:id/comments",
        createComment: "POST /api/posts/:id/comments (requires auth)",
        toggleLike: "POST /api/posts/:id/like (requires auth)",
      },
    },
  });
});

/**
 * POST /api/triage
 * Main Afya AI chat endpoint (requires auth)
 *
 * Body: {
 *   messages: [{ role: "user"|"assistant", content: string }],
 *   language?: "en" | "sw"
 * }
 */
app.post("/api/triage", verifyToken, aiLimiter, async (req, res) => {
  try {
    const { messages, language = "en" } = req.body;
    const userId = req.user.id;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "messages array is required" });
    }

    // Validate message structure
    const validMessages = messages
      .filter(
        (m) =>
          m &&
          typeof m === "object" &&
          ["user", "assistant"].includes(m.role) &&
          typeof m.content === "string" &&
          m.content.trim().length > 0
      )
      .slice(-20);

    if (validMessages.length === 0) {
      return res.status(400).json({ error: "No valid messages provided" });
    }

    const userMessage = validMessages[validMessages.length - 1];

    // Add language hint to system prompt
    const systemPrompt =
      AFYA_SYSTEM_PROMPT +
      (language === "sw"
        ? "\n\nIMPORTANT: The user has selected Swahili. Please respond primarily in Swahili."
        : "");

    // Convert messages to Gemini format
    const contents = validMessages.map((m) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }],
    }));

    // Call Gemini API
    const response = await model.generateContent({
      contents,
      systemInstruction: systemPrompt,
      generationConfig: {
        maxOutputTokens: 600,
        temperature: 0.7,
      },
    });

    const replyText = response.response.text() || "";
    const isCrisis =
      /befrienders|crisis line|1199|\+254 722|call now|immediate danger|emergency/i.test(
        replyText
      );

    // Save chat history
    await supabase.from("chat_history").insert({
      user_id: userId,
      user_message: userMessage.content,
      assistant_reply: replyText,
      language,
      is_crisis: isCrisis,
    });

    res.json({
      reply: replyText,
      isCrisis,
      usage: {
        inputTokens: response.response.usageMetadata?.promptTokenCount || 0,
        outputTokens: response.response.usageMetadata?.candidatesTokenCount || 0,
      },
    });
  } catch (error) {
    console.error("Triage API error:", error.message);

    if (error.message?.includes("API key")) {
      return res
        .status(500)
        .json({ error: "API key invalid. Check your GEMINI_API_KEY in .env" });
    }
    if (error.message?.includes("429")) {
      return res
        .status(429)
        .json({ error: "API rate limit reached. Please wait a moment." });
    }

    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

/**
 * POST /api/triage-anon
 * Afya AI chat for anonymous users (no auth required, no persistence)
 *
 * Body: {
 *   messages: [{ role: "user"|"assistant", content: string }],
 *   language?: "en" | "sw"
 * }
 */
app.post("/api/triage-anon", aiLimiter, async (req, res) => {
  try {
    const { messages, language = "en" } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "messages array is required" });
    }

    // Validate message structure
    const validMessages = messages
      .filter(
        (m) =>
          m &&
          typeof m === "object" &&
          ["user", "assistant"].includes(m.role) &&
          typeof m.content === "string" &&
          m.content.trim().length > 0
      )
      .slice(-20);

    if (validMessages.length === 0) {
      return res.status(400).json({ error: "No valid messages provided" });
    }

    const userMessage = validMessages[validMessages.length - 1];

    // Add language hint to system prompt
    const systemPrompt =
      AFYA_SYSTEM_PROMPT +
      (language === "sw"
        ? "\n\nIMPORTANT: The user has selected Swahili. Please respond primarily in Swahili."
        : "");

    // Convert messages to Gemini format
    const contents = validMessages.map((m) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }],
    }));

    // Call Gemini API
    const response = await model.generateContent({
      contents,
      systemInstruction: systemPrompt,
      generationConfig: {
        maxOutputTokens: 600,
        temperature: 0.7,
      },
    });

    const replyText = response.response.text() || "";
    const isCrisis =
      /befrienders|crisis line|1199|\+254 722|call now|immediate danger|emergency/i.test(
        replyText
      );

    // NOTE: Anonymous messages are NOT saved to database
    // Only authenticated users' conversations are persisted

    res.json({
      reply: replyText,
      isCrisis,
      usage: {
        inputTokens: response.response.usageMetadata?.promptTokenCount || 0,
        outputTokens: response.response.usageMetadata?.candidatesTokenCount || 0,
      },
    });
  } catch (error) {
    console.error("Triage API error:", error.message);

    if (error.message?.includes("API key")) {
      return res
        .status(500)
        .json({ error: "API key invalid. Check your GEMINI_API_KEY in .env" });
    }
    if (error.message?.includes("429")) {
      return res
        .status(429)
        .json({ error: "API rate limit reached. Please wait a moment." });
    }

    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

/**
 * POST /api/mood/insights
 * Generate AI insights from mood log data (requires auth)
 *
 * Body: {
 *   moodLogs: [{ score: 1-5, label: string, triggers: string[], date: string }]
 * }
 */
app.post("/api/mood/insights", verifyToken, aiLimiter, async (req, res) => {
  try {
    const { moodLogs } = req.body;

    if (!moodLogs || !Array.isArray(moodLogs) || moodLogs.length < 3) {
      return res
        .status(400)
        .json({ error: "Need at least 3 mood logs to generate insights" });
    }

    const logsText = moodLogs
      .slice(-30)
      .map(
        (log) =>
          `Date: ${log.date}, Score: ${log.score}/5, Label: ${log.label || "none"}, Triggers: ${(log.triggers || []).join(", ") || "none"}`
      )
      .join("\n");

    const response = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `You are a wellness data analyst for AfyaMind. Analyze these mood logs and provide 2-3 short, warm, actionable insights. Be encouraging, not clinical. Keep each insight to 1-2 sentences. Focus on patterns, not judgments.

Mood logs:
${logsText}

Respond with exactly 3 insights as a JSON array:
{"insights": ["insight 1", "insight 2", "insight 3"]}`,
            },
          ],
        },
      ],
      generationConfig: {
        maxOutputTokens: 300,
        temperature: 0.7,
      },
    });

    const text = response.response.text() || "{}";
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const parsed = jsonMatch ? JSON.parse(jsonMatch[0]) : { insights: [] };

    res.json(parsed);
  } catch (error) {
    console.error("Mood insights error:", error.message);
    res.status(500).json({ error: "Could not generate insights." });
  }
});

// ── MOOD LOG ENDPOINTS ──────────────────────────────────────────

app.post("/api/mood/log", verifyToken, async (req, res) => {
  try {
    const { score, label, triggers, note } = req.body;
    const userId = req.user.id;

    if (!score || score < 1 || score > 5) {
      return res.status(400).json({ error: "Score must be between 1-5" });
    }

    const { data, error } = await supabase
      .from("mood_logs")
      .insert({
        user_id: userId,
        score,
        label: label || null,
        triggers: triggers || [],
        note: note || null,
      })
      .select()
      .single();

    if (error) throw error;

    res.status(201).json(data);
  } catch (error) {
    console.error("Mood log error:", error.message);
    res.status(500).json({ error: "Failed to save mood log" });
  }
});

/**
 * GET /api/mood/streak
 * Consecutive-day mood-logging streak. Missing exactly one day is
 * tolerated (grace day); missing two or more days in a row resets
 * the streak to 0.
 */
app.get("/api/mood/streak", verifyToken, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("mood_logs")
      .select("created_at")
      .eq("user_id", req.user.id)
      .order("created_at", { ascending: false });
    if (error) throw error;

    res.json({ streak: computeMoodStreak(data.map((r) => r.created_at)) });
  } catch (error) {
    console.error("Mood streak error:", error.message);
    res.status(500).json({ error: "Failed to compute streak" });
  }
});

function dateKey(d) {
  return new Date(d).toISOString().slice(0, 10);
}
function diffDays(fromKey, toKey) {
  const a = new Date(fromKey + "T00:00:00Z");
  const b = new Date(toKey + "T00:00:00Z");
  return Math.round((b - a) / 86400000);
}
function computeMoodStreak(timestamps) {
  const uniqueDaysDesc = [...new Set(timestamps.map(dateKey))].sort().reverse();
  if (!uniqueDaysDesc.length) return 0;

  const todayKey = dateKey(new Date());
  if (diffDays(uniqueDaysDesc[0], todayKey) >= 3) return 0; // 2+ full days missed since last log

  let streak = 1;
  for (let i = 0; i < uniqueDaysDesc.length - 1; i++) {
    const gap = diffDays(uniqueDaysDesc[i + 1], uniqueDaysDesc[i]);
    if (gap <= 2) streak++; // same day or one day skipped — still counts
    else break; // 2+ days skipped — streak ends here
  }
  return streak;
}

app.get("/api/mood/logs", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const { data, error } = await supabase
      .from("mood_logs")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) throw error;

    res.json(data);
  } catch (error) {
    console.error("Get mood logs error:", error.message);
    res.status(500).json({ error: "Failed to fetch mood logs" });
  }
});

// ── CHAT HISTORY ENDPOINTS ──────────────────────────────────────

app.get("/api/chat/history", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const { data, error } = await supabase
      .from("chat_history")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) throw error;

    res.json(data);
  } catch (error) {
    console.error("Get chat history error:", error.message);
    res.status(500).json({ error: "Failed to fetch chat history" });
  }
});

// ── USER PROFILE ENDPOINTS ──────────────────────────────────────

app.get("/api/user/profile", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;

    const { data: profile, error } = await supabase
      .from("user_profiles")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (error) throw error;

    const { data: user } = await supabase
      .from("users")
      .select("id, email, first_name, last_name")
      .eq("id", userId)
      .single();

    res.json({ ...user, profile });
  } catch (error) {
    console.error("Get profile error:", error.message);
    res.status(500).json({ error: "Failed to fetch profile" });
  }
});

app.put("/api/user/profile", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const { preferred_language, phone, bio } = req.body;

    const { data, error } = await supabase
      .from("user_profiles")
      .update({ preferred_language, phone, bio })
      .eq("user_id", userId)
      .select()
      .single();

    if (error) throw error;

    res.json(data);
  } catch (error) {
    console.error("Update profile error:", error.message);
    res.status(500).json({ error: "Failed to update profile" });
  }
});

// ═══════════════════════════════════════════════════════════════
// COMMUNITY ROUTES — groups, membership, posts, comments, likes
// ═══════════════════════════════════════════════════════════════

// ── GROUPS ────────────────────────────────────────────────────

/**
 * GET /api/groups
 * List all groups with member/post counts, view counts, and
 * (if logged in) whether the current user has joined each one.
 * Works for both logged-in and anonymous visitors.
 */
app.get("/api/groups", optionalAuth, async (req, res) => {
  try {
    const { data: groups, error } = await supabase
      .from("groups")
      .select("*")
      .order("created_at", { ascending: true });
    if (error) throw error;

    const { data: memberRows } = await supabase
      .from("group_members")
      .select("group_id, user_id");
    const { data: postRows } = await supabase
      .from("group_posts")
      .select("group_id");

    const myJoinedIds = new Set(
      (memberRows || [])
        .filter((m) => req.user && m.user_id === req.user.id)
        .map((m) => m.group_id)
    );

    const result = groups.map((g) => ({
      ...g,
      member_count: (memberRows || []).filter((m) => m.group_id === g.id).length,
      post_count: (postRows || []).filter((p) => p.group_id === g.id).length,
      joined: myJoinedIds.has(g.id),
    }));

    res.json(result);
  } catch (error) {
    console.error("List groups error:", error.message);
    res.status(500).json({ error: "Failed to fetch groups" });
  }
});

/**
 * GET /api/user/groups
 * Groups the CURRENT logged-in user has joined. Used by the
 * dashboard's "My Groups" widget.
 */
app.get("/api/user/groups", verifyToken, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("group_members")
      .select("joined_at, groups (id, title, icon, description, moderated, views_count)")
      .eq("user_id", req.user.id)
      .order("joined_at", { ascending: false });
    if (error) throw error;

    res.json(data.map((row) => ({ ...row.groups, joined_at: row.joined_at })));
  } catch (error) {
    console.error("Get user groups error:", error.message);
    res.status(500).json({ error: "Failed to fetch your groups" });
  }
});

/**
 * POST /api/groups
 * Create a new group/forum. Requires login. Creator auto-joins.
 * Body: { title, icon?, description? }
 */
app.post("/api/groups", verifyToken, async (req, res) => {
  try {
    const { title, icon, description } = req.body;
    if (!title || !title.trim()) {
      return res.status(400).json({ error: "Group title is required" });
    }

    const { data: group, error } = await supabase
      .from("groups")
      .insert({
        title: title.trim(),
        icon: icon || "💬",
        description: description || null,
        moderated: true,
        created_by: req.user.id,
      })
      .select()
      .single();
    if (error) throw error;

    await supabase
      .from("group_members")
      .insert({ group_id: group.id, user_id: req.user.id });

    res.status(201).json(group);
  } catch (error) {
    console.error("Create group error:", error.message);
    if (error.code === "23505") {
      return res.status(400).json({ error: "A group with that name already exists" });
    }
    res.status(500).json({ error: "Failed to create group" });
  }
});

/**
 * POST /api/groups/:id/join
 * Join a group. Requires login. Safe to call twice (no-op if
 * already a member).
 */
app.post("/api/groups/:id/join", verifyToken, async (req, res) => {
  try {
    const { error } = await supabase
      .from("group_members")
      .insert({ group_id: req.params.id, user_id: req.user.id });
    // Ignore "already a member" unique-violation errors
    if (error && error.code !== "23505") throw error;

    res.json({ joined: true });
  } catch (error) {
    console.error("Join group error:", error.message);
    res.status(500).json({ error: "Failed to join group" });
  }
});

/**
 * POST /api/groups/:id/view
 * Increments the group's view counter. No auth required — this
 * counts visits from anyone, logged in or not.
 */
app.post("/api/groups/:id/view", async (req, res) => {
  try {
    const { error } = await supabase.rpc("increment_group_views", {
      gid: req.params.id,
    });
    if (error) throw error;
    res.json({ ok: true });
  } catch (error) {
    console.error("View increment error:", error.message);
    res.status(500).json({ error: "Failed to record view" });
  }
});

// ── POSTS ─────────────────────────────────────────────────────

/**
 * GET /api/groups/:id/posts
 * List posts in a group, each with like count and (if logged in)
 * whether the current user has liked it, plus comment count.
 * Viewable by anyone, logged in or not.
 */
app.get("/api/groups/:id/posts", optionalAuth, async (req, res) => {
  try {
    const { data: posts, error } = await supabase
      .from("group_posts")
      .select("*, users:user_id (first_name, last_name)")
      .eq("group_id", req.params.id)
      .order("created_at", { ascending: true });
    if (error) throw error;

    const postIds = posts.map((p) => p.id);
    const { data: likeRows } = postIds.length
      ? await supabase.from("post_likes").select("post_id, user_id").in("post_id", postIds)
      : { data: [] };
    const { data: commentRows } = postIds.length
      ? await supabase.from("post_comments").select("post_id").in("post_id", postIds)
      : { data: [] };

    const result = posts.map((p) => ({
      ...p,
      author_name: p.users ? `${p.users.first_name} ${p.users.last_name || ""}`.trim() : "Member",
      like_count: (likeRows || []).filter((l) => l.post_id === p.id).length,
      liked_by_me: !!(req.user && (likeRows || []).some((l) => l.post_id === p.id && l.user_id === req.user.id)),
      comment_count: (commentRows || []).filter((c) => c.post_id === p.id).length,
    }));

    res.json(result);
  } catch (error) {
    console.error("List posts error:", error.message);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

/**
 * POST /api/groups/:id/posts
 * Create a post in a group. Requires login AND group membership
 * (join the group first).
 * Body: { text }
 */
app.post("/api/groups/:id/posts", verifyToken, async (req, res) => {
  try {
    const { text } = req.body;
    if (!text || !text.trim()) {
      return res.status(400).json({ error: "Post text is required" });
    }

    const { data: membership } = await supabase
      .from("group_members")
      .select("id")
      .eq("group_id", req.params.id)
      .eq("user_id", req.user.id)
      .single();
    if (!membership) {
      return res.status(403).json({ error: "Join the group before posting" });
    }

    const { data: post, error } = await supabase
      .from("group_posts")
      .insert({ group_id: req.params.id, user_id: req.user.id, text: text.trim() })
      .select()
      .single();
    if (error) throw error;

    res.status(201).json(post);
  } catch (error) {
    console.error("Create post error:", error.message);
    res.status(500).json({ error: "Failed to create post" });
  }
});

// ── COMMENTS ──────────────────────────────────────────────────

/**
 * GET /api/posts/:id/comments
 * Viewable by anyone, logged in or not.
 */
app.get("/api/posts/:id/comments", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("post_comments")
      .select("*, users:user_id (first_name, last_name)")
      .eq("post_id", req.params.id)
      .order("created_at", { ascending: true });
    if (error) throw error;

    res.json(
      data.map((c) => ({
        ...c,
        author_name: c.users ? `${c.users.first_name} ${c.users.last_name || ""}`.trim() : "Member",
      }))
    );
  } catch (error) {
    console.error("List comments error:", error.message);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

/**
 * POST /api/posts/:id/comments
 * Requires login.
 * Body: { text }
 */
app.post("/api/posts/:id/comments", verifyToken, async (req, res) => {
  try {
    const { text } = req.body;
    if (!text || !text.trim()) {
      return res.status(400).json({ error: "Comment text is required" });
    }

    const { data: comment, error } = await supabase
      .from("post_comments")
      .insert({ post_id: req.params.id, user_id: req.user.id, text: text.trim() })
      .select()
      .single();
    if (error) throw error;

    res.status(201).json(comment);
  } catch (error) {
    console.error("Create comment error:", error.message);
    res.status(500).json({ error: "Failed to add comment" });
  }
});

// ── LIKES ─────────────────────────────────────────────────────

/**
 * POST /api/posts/:id/like
 * Toggles a like on/off for the current user. Requires login.
 * Returns the new state: { liked: true|false, like_count }
 */
app.post("/api/posts/:id/like", verifyToken, async (req, res) => {
  try {
    const { data: existing } = await supabase
      .from("post_likes")
      .select("id")
      .eq("post_id", req.params.id)
      .eq("user_id", req.user.id)
      .single();

    if (existing) {
      await supabase.from("post_likes").delete().eq("id", existing.id);
    } else {
      await supabase
        .from("post_likes")
        .insert({ post_id: req.params.id, user_id: req.user.id });
    }

    const { count } = await supabase
      .from("post_likes")
      .select("id", { count: "exact", head: true })
      .eq("post_id", req.params.id);

    res.json({ liked: !existing, like_count: count || 0 });
  } catch (error) {
    console.error("Like toggle error:", error.message);
    res.status(500).json({ error: "Failed to update like" });
  }
});

// ═══════════════════════════════════════════════════════════════
// COURSE ENROLLMENT & PROGRESS
// ═══════════════════════════════════════════════════════════════

/**
 * POST /api/courses/:courseId/enroll
 * Enrolls the current user in a course. Safe to call twice (no-op
 * if already enrolled). Body: { title }
 */
app.post("/api/courses/:courseId/enroll", verifyToken, async (req, res) => {
  try {
    const { title } = req.body;
    const { data: existing } = await supabase
      .from("course_enrollments")
      .select("*")
      .eq("user_id", req.user.id)
      .eq("course_id", req.params.courseId)
      .single();

    if (existing) return res.json(existing);

    const { data, error } = await supabase
      .from("course_enrollments")
      .insert({
        user_id: req.user.id,
        course_id: req.params.courseId,
        course_title: title || req.params.courseId,
      })
      .select()
      .single();
    if (error) throw error;

    res.status(201).json(data);
  } catch (error) {
    console.error("Enroll error:", error.message);
    res.status(500).json({ error: "Failed to enroll in course" });
  }
});

/**
 * PUT /api/courses/:courseId/progress
 * Updates progress for an existing enrollment.
 * Body: { progress_percent, last_lesson_id }
 */
app.put("/api/courses/:courseId/progress", verifyToken, async (req, res) => {
  try {
    const { progress_percent, last_lesson_id } = req.body;
    const update = {
      progress_percent,
      last_lesson_id,
      ...(progress_percent >= 100 ? { completed_at: new Date().toISOString() } : {}),
    };

    const { data, error } = await supabase
      .from("course_enrollments")
      .update(update)
      .eq("user_id", req.user.id)
      .eq("course_id", req.params.courseId)
      .select()
      .single();
    if (error) throw error;
    if (!data) return res.status(404).json({ error: "Not enrolled in this course yet" });

    res.json(data);
  } catch (error) {
    console.error("Update progress error:", error.message);
    res.status(500).json({ error: "Failed to update progress" });
  }
});

/**
 * GET /api/user/courses
 * All courses the current user is enrolled in, most recent first.
 * Used by the dashboard's "Course Progress" card and "My Courses" tab.
 */
app.get("/api/user/courses", verifyToken, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("course_enrollments")
      .select("*")
      .eq("user_id", req.user.id)
      .order("enrolled_at", { ascending: false });
    if (error) throw error;

    res.json(data);
  } catch (error) {
    console.error("Get user courses error:", error.message);
    res.status(500).json({ error: "Failed to fetch your courses" });
  }
});

// ═══════════════════════════════════════════════════════════════
// THERAPY SESSIONS
// ═══════════════════════════════════════════════════════════════

/**
 * POST /api/sessions/book
 * Books a session with a provider. Requires login.
 * Body: { providerId, providerName, scheduledAt (ISO string), mode, priceKes }
 */
app.post("/api/sessions/book", verifyToken, async (req, res) => {
  try {
    const { providerId, providerName, scheduledAt, mode, priceKes } = req.body;

    if (!providerName || !scheduledAt) {
      return res.status(400).json({ error: "providerName and scheduledAt are required" });
    }

    const { data, error } = await supabase
      .from("therapy_sessions")
      .insert({
        user_id: req.user.id,
        provider_id: providerId || null,
        provider_name: providerName,
        mode: mode === "in-person" ? "in-person" : "video",
        price_kes: priceKes || null,
        scheduled_at: scheduledAt,
        status: "upcoming",
      })
      .select()
      .single();
    if (error) throw error;

    res.status(201).json(data);
  } catch (error) {
    console.error("Book session error:", error.message);
    res.status(500).json({ error: "Failed to book session" });
  }
});

/**
 * GET /api/sessions/next
 * The user's nearest upcoming session, or null if they have none.
 */
app.get("/api/sessions/next", verifyToken, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("therapy_sessions")
      .select("*")
      .eq("user_id", req.user.id)
      .eq("status", "upcoming")
      .gte("scheduled_at", new Date().toISOString())
      .order("scheduled_at", { ascending: true })
      .limit(1);
    if (error) throw error;

    res.json(data[0] || null);
  } catch (error) {
    console.error("Get next session error:", error.message);
    res.status(500).json({ error: "Failed to fetch next session" });
  }
});

/**
 * GET /api/sessions
 * All of the user's sessions (for a future "My Sessions" tab).
 */
app.get("/api/sessions", verifyToken, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("therapy_sessions")
      .select("*")
      .eq("user_id", req.user.id)
      .order("scheduled_at", { ascending: false });
    if (error) throw error;

    res.json(data);
  } catch (error) {
    console.error("Get sessions error:", error.message);
    res.status(500).json({ error: "Failed to fetch sessions" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🌿 AfyaMind API running on port ${PORT}`);
});