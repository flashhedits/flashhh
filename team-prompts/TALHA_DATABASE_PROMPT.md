# 🗄️ TALHA — BACKEND & DATABASE ENGINEER

## 👋 PASTE THIS ENTIRE MESSAGE INTO YOUR AI (Claude/ChatGPT/Cursor)

---

I'm Talha. I'm the **Backend & Database Engineer** for our Final Year Project called **Spendly** — an AI-powered expense tracker with a WhatsApp bot.

I'm working in parallel with two teammates:
- **Ali** (Frontend Engineer) — building the web app UI
- **Salman** (AI/Integration Engineer) — building the Node.js server

I own the **database/schema.sql** file + all infrastructure:
- Supabase database setup (Postgres + Auth)
- Row Level Security policies (so users can't see each other's data)
- Deployment pipeline (Railway for backend, Netlify for frontend)
- Environment variable management
- Architecture documentation

**My job today:** Set up the database, deploy the infrastructure, and document everything.

I am a **complete beginner** at databases and deployment. Please:
1. Explain everything in plain English
2. Give me one step at a time with screenshots-equivalent descriptions
3. Tell me exactly which button to click on each platform
4. After each step, give me a way to verify it worked
5. Use analogies (like "Supabase is like a digital filing cabinet")
6. Patience is key — I'm new to databases

---

## 📋 MY TASK LIST FOR TODAY

### Phase 1 (90 min) — Database Setup

1. Help me sign up at **supabase.com** with GitHub
2. Help me create a new project called `spendly-fyp`
   - Region: Southeast Asia (Singapore) — closest to Pakistan
   - Note: Supabase asks for a database password — I should write it down
3. Walk me through the Supabase dashboard tour
4. Help me run the schema.sql file:
   - Open SQL Editor (left sidebar)
   - Paste the entire `database/schema.sql` content
   - Click Run
   - Verify both `profiles` and `expenses` tables exist
5. Help me explain Row Level Security (RLS) in simple terms — I need to understand this for the report
6. Help me find my Supabase API keys:
   - Settings → API → Project URL
   - Settings → API → anon public key (this is for Ali)
   - Settings → API → service_role secret key (this is for Salman)
7. Help me make a Google Doc / shared note with these 3 keys + the project password

### Phase 2 (2 hours) — Deployment Pipeline

8. Help me sign up for **railway.app** with GitHub
9. Help me sign up for **netlify.com** with GitHub
10. Help me create a GitHub repository called `spendly-fyp`
11. Help me push the entire project (frontend, backend, database, docs) to it
12. Help me set up `.gitignore` properly so we never commit:
    - `node_modules/`
    - `.env`
    - any `.DS_Store` Mac files

13. Help me set up branch protection so nobody force-pushes to main

### Phase 3 — Documentation

14. Help me draw an **architecture diagram** using Excalidraw (excalidraw.com — free):
    - User → WhatsApp → Twilio → Railway → Claude → Supabase
    - User → Netlify (browser app) → Railway → Supabase
15. Help me draw an **ER diagram** of the database:
    - `auth.users` table (Supabase built-in)
    - `profiles` table (extends users)
    - `expenses` table (linked to user_id)
16. Help me write a **deployment runbook** answering:
    - How do you deploy a frontend update?
    - How do you deploy a backend update?
    - How do you roll back if something breaks?
    - How do you check Supabase logs?
    - What if Railway crashes?

### Phase 4 — Security Audit

17. Help me verify Row Level Security works:
    - Sign up as User A in the app, add expenses
    - Sign up as User B in the app
    - Confirm User B cannot see User A's expenses
    - This is a critical FYP demo point
18. Help me check `.env` is NOT in our GitHub
19. Help me check CORS settings on backend
20. Help me document our security choices for the FYP report

---

## 🛠️ TECH I'M USING

- **Supabase** — Postgres database + Auth + RLS
- **Railway** — backend hosting
- **Netlify** — frontend hosting
- **GitHub** — version control + repo
- **Excalidraw** — diagrams (no install, browser-based)

---

## ⚠️ CRITICAL RULES

1. **The service_role key is SECRET** — only Salman uses it on his backend, never in frontend
2. **The anon key is SAFE** — Ali uses it in the browser
3. **Never disable RLS** — if I do, anyone can read/write any table
4. **Never commit `.env`** — keys go directly into Railway dashboard, not in code
5. **Always use HTTPS URLs** — Railway and Netlify give these by default

---

## 🎯 SUCCESS CRITERIA

By end of day:
- ✅ Supabase project set up with schema deployed
- ✅ RLS verified working (User A can't see User B's data)
- ✅ Backend deployed to Railway with all env vars
- ✅ Frontend deployed to Netlify
- ✅ GitHub repo set up with proper `.gitignore`
- ✅ Architecture diagram complete
- ✅ ER diagram complete
- ✅ Deployment runbook complete
- ✅ My commits visible in GitHub history

---

## 🤝 INTEGRATION POINTS

- **To Ali:** I give him `SUPABASE_URL` + `SUPABASE_ANON_KEY` (he puts in `index.html`)
- **To Salman:** I give him `SUPABASE_URL` + `SUPABASE_SERVICE_KEY` (he puts in Railway env vars)
- **From Salman:** Once he deploys, I get his Railway URL to share with Ali
- **From Ali:** Once he deploys to Netlify, I update CORS on backend

---

## 🙏 REQUEST

Now please:
1. Confirm you understand my role
2. Ask me to confirm I have the project zip ready
3. Then start me on **Step 1: Signing up for Supabase**
4. Walk me through it click-by-click

Be patient — I'm a beginner and this is my first time touching a real database. We're under time pressure but I need to do this RIGHT, not fast.
