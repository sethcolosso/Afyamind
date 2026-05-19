/**
 * AfyaMind Backend Server
 * Express + Google Gemini API
 *
 * Run: node server.js  OR  npm run dev (with nodemon)
 */

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = process.env.PORT || 3001;

// ── Gemini client ────────────────────────────────────────────
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

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
    allowedHeaders: ["Content-Type"],
  })
);

// Rate limiting — protect the AI endpoint
const aiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 20,             // 20 requests per minute per IP
  message: { error: "Too many requests. Please wait a moment." },
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
      triage: "POST /api/triage",
      moodInsights: "POST /api/mood/insights",
    },
  });
});

/**
 * POST /api/triage
 * Main Afya AI chat endpoint
 *
 * Body: {
 *   messages: [{ role: "user"|"assistant", content: string }],
 *   language?: "en" | "sw"
 * }
 */
app.post("/api/triage", aiLimiter, async (req, res) => {
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
      .slice(-20); // Keep last 20 messages for context window

    if (validMessages.length === 0) {
      return res.status(400).json({ error: "No valid messages provided" });
    }

    // Add language hint to system prompt
    const systemPrompt =
      AFYA_SYSTEM_PROMPT +
      (language === "sw"
        ? "\n\nIMPORTANT: The user has selected Swahili. Please respond primarily in Swahili."
        : "");

    // Convert messages to Gemini format (only user/assistant alternating content)
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

    // Detect crisis in the reply (Claude flagged it)
    const isCrisis =
      /befrienders|crisis line|1199|\+254 722|call now|immediate danger|emergency/i.test(
        replyText
      );

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
 * Generate AI insights from mood log data
 *
 * Body: {
 *   moodLogs: [{ score: 1-5, label: string, triggers: string[], date: string }]
 * }
 */
app.post("/api/mood/insights", aiLimiter, async (req, res) => {
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

// ── START ─────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🌿 AfyaMind API running on http://localhost:${PORT}`);
  console.log(`   Health check: http://localhost:${PORT}/`);
  console.log(`   Triage endpoint: POST http://localhost:${PORT}/api/triage`);
  console.log(
    `\n   Make sure GEMINI_API_KEY is set in backend/.env\n`
  );
});
