# AfyaMind Backend Setup Guide

## 🚀 Quick Setup

### Step 1: Create Supabase Tables
1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Click **New Query**
4. Copy and paste the entire contents of `supabase-setup.sql`
5. Click **Run**

### Step 2: Install Dependencies
```bash
cd backend
npm install
```

### Step 3: Configure Environment
Your `.env` file already has the required Supabase credentials. Verify it has:
```
GEMINI_API_KEY=your_key
SUPABASE_URL=your_url
SUPABASE_SERVICE_ROLE_KEY=your_key
PORT=3001
JWT_SECRET=your_secret
```

### Step 4: Start the Server
```bash
npm run dev
```

Server runs on `http://localhost:3001`

---

## 📚 API Endpoints

### Authentication

#### Signup
```
POST /api/auth/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123",
  "firstName": "John",
  "lastName": "Doe"
}

Response:
{
  "token": "eyJhbGc...",
  "user": { "id": "uuid", "email": "...", "firstName": "..." }
}
```

#### Login
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}

Response:
{
  "token": "eyJhbGc...",
  "user": { "id": "uuid", "email": "...", "firstName": "..." }
}
```

---

### Chat (Requires Authentication)
All endpoints below need: `Authorization: Bearer <token>`

#### Chat with Afya
```
POST /api/triage
Authorization: Bearer <token>
Content-Type: application/json

{
  "messages": [
    { "role": "user", "content": "I'm feeling stressed" },
    { "role": "assistant", "content": "I hear you, stress can be overwhelming..." }
  ],
  "language": "en"
}

Response:
{
  "reply": "Pole sana... here are some things...",
  "isCrisis": false,
  "usage": { "inputTokens": 250, "outputTokens": 100 }
}
```

#### Get Chat History
```
GET /api/chat/history
Authorization: Bearer <token>

Response:
[
  {
    "id": "uuid",
    "user_message": "I'm feeling stressed",
    "assistant_reply": "Pole sana...",
    "language": "en",
    "is_crisis": false,
    "created_at": "2026-05-20T10:30:00Z"
  }
]
```

---

### Mood Logs (Requires Authentication)

#### Log a Mood
```
POST /api/mood/log
Authorization: Bearer <token>
Content-Type: application/json

{
  "score": 3,
  "label": "anxious",
  "triggers": ["work stress", "lack of sleep"]
}

Response:
{
  "id": "uuid",
  "user_id": "uuid",
  "score": 3,
  "label": "anxious",
  "triggers": ["work stress", "lack of sleep"],
  "created_at": "2026-05-20T10:30:00Z"
}
```

#### Get All Mood Logs
```
GET /api/mood/logs
Authorization: Bearer <token>

Response:
[
  { "id": "uuid", "score": 3, "label": "anxious", ... },
  { "id": "uuid", "score": 4, "label": "calm", ... }
]
```

#### Get AI Insights (from mood logs)
```
POST /api/mood/insights
Authorization: Bearer <token>
Content-Type: application/json

{
  "moodLogs": [
    { "score": 3, "label": "anxious", "triggers": [...], "date": "2026-05-20" },
    { "score": 4, "label": "calm", "triggers": [...], "date": "2026-05-19" }
  ]
}

Response:
{
  "insights": [
    "You tend to feel more anxious on workdays",
    "Getting 8 hours of sleep correlates with better moods",
    "Social activities boost your wellbeing"
  ]
}
```

---

### User Profile (Requires Authentication)

#### Get Profile
```
GET /api/user/profile
Authorization: Bearer <token>

Response:
{
  "id": "uuid",
  "email": "user@example.com",
  "first_name": "John",
  "last_name": "Doe",
  "profile": {
    "id": "uuid",
    "preferred_language": "en",
    "phone": "+254712345678",
    "bio": "Mental health advocate"
  }
}
```

#### Update Profile
```
PUT /api/user/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "preferred_language": "sw",
  "phone": "+254712345678",
  "bio": "Mental health advocate"
}

Response: Updated profile object
```

---

## 🔒 Security Notes

- **JWT Tokens**: Valid for 1 hour (JWT_EXPIRY=1h)
- **Rate Limiting**: 
  - Auth endpoints: 5 requests per 15 minutes
  - AI endpoints: 20 requests per 1 minute
- **Password Hashing**: bcryptjs with 10 rounds
- **Row-Level Security**: Enabled (users can only access their own data)

---

## 📝 Testing with cURL

### Signup
```bash
curl -X POST http://localhost:3001/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@afyamind.com",
    "password": "Test123!",
    "firstName": "Test",
    "lastName": "User"
  }'
```

### Log a Mood (replace TOKEN)
```bash
curl -X POST http://localhost:3001/api/mood/log \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "score": 4,
    "label": "happy",
    "triggers": ["good sleep"]
  }'
```

### Chat (replace TOKEN)
```bash
curl -X POST http://localhost:3001/api/triage \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [{"role": "user", "content": "I am feeling happy today"}],
    "language": "en"
  }'
```

---

## 🐛 Troubleshooting

**"Missing Supabase configuration"**
- Check `.env` file has SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY

**"Table does not exist"**
- Run the SQL setup script in Supabase SQL Editor

**"Invalid or expired token"**
- Token may have expired (1 hour). Login again to get a new token

**"User already exists"**
- That email is already registered. Use a different email or login instead

---

## 🎯 Frontend Integration Tips

1. **Store JWT token** in localStorage after signup/login
2. **Include token** in all subsequent requests: `Authorization: Bearer <token>`
3. **Handle token expiry**: When you get 401, redirect to login
4. **Keep language preference** synced with user profile
5. **Show chat history** on load from `/api/chat/history`
6. **Display mood trends** using `/api/mood/logs` and `/api/mood/insights`

---

## 📞 Support

For issues with:
- **Supabase**: Check Supabase docs at supabase.com
- **Gemini API**: See Google Generative AI docs
- **Backend**: Check console logs for detailed error messages
