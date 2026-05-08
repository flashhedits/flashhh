# 💰 SPENDLY — AI Expense Tracker
### Final Year Project · 2024-25

---

## 📂 PROJECT STRUCTURE

```
spendly-fyp/
├── README.md                ← You are here
├── ROADMAP.md               ← ⭐ DETAILED TEAM ROADMAP (read this first)
├── CHECKLIST.md             ← Everything you might miss
├── DEPLOYMENT_GUIDE.md      ← Step-by-step deploy instructions
│
├── frontend/
│   └── index.html           ← The full app (HTML+CSS+JS, single file)
│
├── backend/
│   ├── server.js            ← Node.js + Express server
│   ├── package.json         ← Dependencies
│   └── .env.example         ← Environment vars template
│
└── database/
    └── schema.sql           ← Supabase database setup
```

---

## 🚀 GET STARTED

### 1. Read the docs in this order:
1. `ROADMAP.md` — understand the project & team roles
2. `CHECKLIST.md` — what's needed end-to-end
3. `DEPLOYMENT_GUIDE.md` — step-by-step deployment

### 2. Three roles, three people:

| Person | Role | Owns |
|--------|------|------|
| **A** | Frontend Engineer | `frontend/index.html` |
| **B** | AI & Integration | `backend/server.js` |
| **C** | Backend & Database | `database/schema.sql` + deployment |

### 3. Quick deployment (1 hour with team):
1. **Person C:** Set up Supabase + run `database/schema.sql` (15 min)
2. **Person B:** Get API keys → deploy backend to Railway (20 min)
3. **Person A:** Update config in `index.html` → deploy to Netlify (10 min)
4. **Together:** Connect Twilio webhook → test from real phone (15 min)

---

## ✨ FEATURES

- 🔐 Email/password sign up & login (Supabase Auth)
- 🤖 AI chat bot that parses natural language ("KFC 850" → logs Rs 850 for Food)
- 📷 Receipt scanner using Claude vision AI
- 🎤 Voice input (Web Speech API)
- 📊 Live spending donut chart
- 💡 AI advisor with spending insights, saving tips, investment suggestions
- 📱 WhatsApp bot integration (text expenses to a number, they auto-log)
- 🌙 Dark mode design optimized for mobile
- 🔒 Row Level Security — each user's data fully isolated

---

## 🏗️ ARCHITECTURE

```
┌─────────────────────────────────────────────────┐
│  USER INTERFACES                                 │
│                                                  │
│   📱 WhatsApp        🌐 Web App (any device)     │
└──────┬───────────────────┬───────────────────────┘
       │                   │
       ▼                   ▼
┌──────────────┐   ┌────────────────────────────┐
│  Twilio      │   │  Backend (Railway)          │
│  WhatsApp    │──▶│  Node.js + Express          │
│  Sandbox     │   │  Auth + AI + WhatsApp       │
└──────────────┘   └──────┬─────────────────────┘
                          │
              ┌───────────┴───────────┐
              ▼                       ▼
    ┌──────────────────┐    ┌──────────────────┐
    │  Claude AI       │    │  Supabase        │
    │  (Anthropic)     │    │  (PostgreSQL)    │
    │                  │    │                  │
    │ • Bot parsing    │    │ • User accounts  │
    │ • Categorisation │    │ • Expenses       │
    │ • Receipt vision │    │ • Profiles       │
    └──────────────────┘    └──────────────────┘
```

---

## ⚠️ IMPORTANT NOTES

### Where each API key goes
- `ANTHROPIC_API_KEY` → Backend only (NEVER in frontend HTML)
- `TWILIO_AUTH_TOKEN` → Backend only
- `SUPABASE_SERVICE_KEY` → Backend only (powerful, keep secret)
- `SUPABASE_ANON_KEY` → Frontend (safe to expose, RLS protects data)

### Why frontend can't call Claude directly
Anthropic blocks browser-origin requests for security. The backend acts as a secure middleman that holds the API key. This is industry standard.

### Free tier limits (more than enough for FYP demo)
- Netlify: 100GB bandwidth/month
- Railway: $5/month free credits
- Supabase: 500MB database, 50k auth users
- Twilio: ~$15 trial credit, sandbox is free
- Anthropic: ~$5 covers entire demo

---

## 🎯 DEMO CREDENTIALS

For supervisor demo (works without signup):
- Email: `demo@spendly.app`
- Password: `demo123`

---

## 📞 TROUBLESHOOTING

See `CHECKLIST.md` → Section 11 (Emergency Contacts)

---

## 👥 TEAM

- **[Name 1]** — Frontend Engineer (Roll# xxx)
- **[Name 2]** — AI & Integration Engineer (Roll# xxx)
- **[Name 3]** — Backend & Database Engineer (Roll# xxx)
- **Supervisor:** [Name]
- **University:** [Your University]
- **Year:** 2024–25

---

*Built with Claude AI by Anthropic. Spendly © 2024.*
