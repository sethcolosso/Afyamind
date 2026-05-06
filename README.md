# 🌿 AfyaMind — Local Development Setup

Mental wellness platform for East Africa. Built with HTML/CSS/JS frontend + Node.js/Express backend + Anthropic Claude AI.

---

## 📁 Project Structure

```
afyamind/
├── frontend/
│   └── index.html          ← The entire website (one file)
├── backend/
│   ├── server.js           ← Express API server
│   ├── package.json        ← Node dependencies
│   ├── .env.example        ← Environment variable template
│   └── .env                ← YOUR secrets (create this, never commit)
├── afyamind.code-workspace ← Open this in VS Code
├── package.json
└── README.md
```

---

## ⚡ Quick Start (5 minutes)

### Step 1 — Install VS Code Extensions

Open VS Code and install these two extensions:
- **Live Server** by Ritwick Dey → serves the frontend
- **ESLint** (optional but helpful)

Or install from terminal:
```bash
code --install-extension ritwickdey.LiveServer
```

---

### Step 2 — Get your Anthropic API Key

1. Go to **https://console.anthropic.com**
2. Sign up / log in
3. Click **"API Keys"** in the sidebar
4. Click **"Create Key"**
5. Copy the key (starts with `sk-ant-...`)
6. **Free tier gives you $5 credit** — enough for hundreds of test messages

---

### Step 3 — Set up the Backend

Open a terminal in VS Code (`Ctrl+`` ` or Terminal → New Terminal):

```bash
# Navigate to backend folder
cd backend

# Install dependencies (express, anthropic SDK, etc.)
npm install

# Create your .env file from the template
cp .env.example .env
```

Now open `backend/.env` in VS Code and add your key:

```env
ANTHROPIC_API_KEY=sk-ant-YOUR_ACTUAL_KEY_HERE
PORT=3001
FRONTEND_URL=http://localhost:5500
```

---

### Step 4 — Start the Backend Server

```bash
# From the backend/ folder:
npm run dev
```

You should see:
```
🌿 AfyaMind API running on http://localhost:3001
   Health check: http://localhost:3001/
   Triage endpoint: POST http://localhost:3001/api/triage
```

**Keep this terminal open** — the backend must stay running.

---

### Step 5 — Open the Frontend

1. In VS Code, open `frontend/index.html`
2. Right-click anywhere in the file
3. Select **"Open with Live Server"**
4. Your browser opens at `http://localhost:5500`

🎉 **AfyaMind is now running locally with real AI!**

---

## ✅ Testing the AI Works

1. Click **"Talk to Afya"** in the navbar (or "Get Help Now")
2. Type a message like: `I feel really anxious about work`
3. Afya should respond with a real, thoughtful AI reply
4. Try Swahili: `Sijisikii vizuri leo`

If you see a connection error, make sure the backend is running (`npm run dev` in the backend folder).

---

## 🔑 Does the AI Work? — Full Breakdown

| Feature | Works Locally? | Notes |
|---|---|---|
| Afya AI Chat | ✅ YES (real Claude) | Requires API key + backend running |
| Crisis detection | ✅ YES | Auto-opens crisis modal |
| Mood Tracker | ✅ YES | Demo data (no database needed) |
| Find Help page | ✅ YES | Demo providers shown |
| Community feed | ✅ YES | Demo posts |
| Exercises (Breathing) | ✅ YES | Works offline too |
| Safety Plan | ✅ YES | Saves to localStorage |
| Courses & Articles | ✅ YES | Demo content |
| EN/SW language toggle | ✅ YES | UI strings switch |
| Provider Registration | ✅ YES | Form UI (no backend submit yet) |
| Payments (M-Pesa) | ❌ Demo only | Needs Flutterwave SDK |
| Video sessions | ❌ Demo only | Needs Daily.co SDK |
| Real user accounts | ❌ Demo only | Needs Supabase |
| SMS OTP | ❌ Demo only | Needs Africa's Talking |
| Real provider map | ❌ Demo only | Needs Google Maps API key |

---

## 💰 API Cost Estimate

Claude Sonnet pricing (as of 2025):
- Input: $3 per million tokens
- Output: $15 per million tokens
- Average chat message: ~500-800 tokens total
- **Cost per message: ~$0.001 - $0.002 (less than 1 cent)**
- $5 free credit = **~2,500 - 5,000 test messages**

---

## 🔧 Troubleshooting

### "Cannot connect to server" in chat
→ Backend is not running. Open terminal, go to `backend/`, run `npm run dev`

### "API key invalid"
→ Check `backend/.env` — make sure `ANTHROPIC_API_KEY=sk-ant-...` is correct, no spaces, no quotes

### "CORS error" in browser console
→ Make sure `FRONTEND_URL=http://localhost:5500` in `.env` matches your Live Server port

### Live Server port is not 5500
→ In `backend/.env`, change `FRONTEND_URL` to match, e.g. `http://127.0.0.1:5500`

### npm install fails
→ Make sure Node.js is installed: `node --version` (need v18+)
→ Download from: https://nodejs.org

---

## 🚀 Next Steps to Make it Production-Ready

To turn this into a real full-stack app, you would add:

1. **Database** → [Supabase](https://supabase.com) (free tier, PostgreSQL + Auth)
2. **User accounts** → Supabase Auth (email + phone OTP)
3. **Payments** → [Flutterwave](https://flutterwave.com) (M-Pesa, Airtel, card)
4. **Maps** → [Google Maps JS API](https://developers.google.com/maps)
5. **Video sessions** → [Daily.co](https://daily.co) SDK
6. **SMS** → [Africa's Talking](https://africastalking.com) API
7. **Deploy backend** → Railway, Render, or Heroku (free tiers available)
8. **Deploy frontend** → Netlify or Vercel (free)

---

## 📞 Support

- Website: afyamind.com
- Email: contact@afyamind.com
- Crisis lines: Befrienders Kenya +254 722 178 177 | Kenya Red Cross 1199

**Afya ni nguvu. Health is strength.** 🌿
