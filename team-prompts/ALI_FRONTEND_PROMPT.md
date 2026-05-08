# 🎨 ALI — FRONTEND ENGINEER

## 👋 PASTE THIS ENTIRE MESSAGE INTO YOUR AI (Claude/ChatGPT/Cursor)

---

I'm Ali. I'm the Frontend Engineer for our Final Year Project called **Spendly** — an AI-powered expense tracker with a WhatsApp bot.

I'm working in parallel with two teammates:
- **Salman** (AI/Backend Engineer) — building the Node.js server
- **Talha** (Database/Deployment Engineer) — handling Supabase + hosting

I own the **frontend/index.html** file. It's a single-file web app (HTML+CSS+JS) that uses Supabase for auth and calls our backend (which Salman is building).

**My job today:** Get the frontend polished, working, and deployed to Netlify.

I am a **complete beginner** at coding. Please:
1. Explain everything in plain English
2. Give me one step at a time
3. Tell me exactly what file to open, what line to change, what to type
4. After each step, give me a way to verify it worked
5. If I make a mistake, gently explain what went wrong
6. Use analogies a beginner can understand

---

## 📋 MY TASK LIST FOR TODAY

I need to help me complete these in order. Don't move to the next until the current one works:

### Phase 1 (90 min) — Setup
1. Help me set up GitHub Desktop (I've never used Git before)
2. Help me clone the project repo my PM will share
3. Open `frontend/index.html` in my browser to confirm it works
4. Walk me through the existing code structure so I understand it
5. Help me make ONE small visual change (like changing the app title color) to confirm I can edit successfully

### Phase 2 (2 hours) — Polish
6. Help me add a **profile edit screen** so users can update their name/budget after signup
7. Help me add a **logout confirmation dialog**
8. Help me add **loading skeletons** instead of just spinners
9. Help me add a **WhatsApp number linking screen** in settings
10. Test all flows: signup → onboarding → log expense → see chart

### Phase 3 (Integration — with team)
11. My teammate Talha will give me his **Supabase URL** and **anon key**
12. My teammate Salman will give me his **Railway backend URL**
13. Help me update these 3 lines at the top of the JavaScript section:
   ```javascript
   const BACKEND_URL = '...';
   const SUPABASE_URL = '...';
   const SUPABASE_ANON_KEY = '...';
   ```
14. Help me test that signup actually creates a user in our database

### Phase 4 — Deploy to Netlify
15. Help me sign up for Netlify (free)
16. Help me deploy via drag-and-drop
17. Help me set up a custom URL like `spendly-fyp.netlify.app`
18. Test the live URL on my phone

---

## 🛠️ TECH I'M USING

- HTML / CSS / JavaScript (vanilla, no framework)
- Supabase JS SDK (loaded via CDN)
- Web Speech API (for voice input)
- LocalStorage (for caching)

---

## ⚠️ IMPORTANT RULES

1. I should **never put API keys in the HTML directly except `SUPABASE_ANON_KEY`** (this one is safe by design)
2. I should **never call Anthropic API directly from frontend** — always go through Salman's backend
3. The HTML file should work on **mobile browsers** (most users will be on phones)
4. Everything must work **offline-first** — show cached data even if backend is down

---

## 🎯 SUCCESS CRITERIA

By end of day, I want:
- ✅ A live Netlify URL my supervisor can click
- ✅ Signup and login working
- ✅ Bot chat working (calls Salman's backend)
- ✅ Receipt scanner working
- ✅ My name in the GitHub commit history (proves I contributed)

---

## 🤝 HOW I'LL COORDINATE WITH THE TEAM

- **PM (project manager)** is on Zoom — can interrupt anytime
- **Sync points** every 90 min where we all check in
- **Slack/WhatsApp group chat** for quick questions
- If I'm blocked for >15 minutes I yell for help

---

## 🙏 REQUEST

Now please:
1. Confirm you understand my role
2. Ask me to confirm I have the project zip file ready
3. Then start me on **Step 1: GitHub Desktop setup**

Be encouraging. I'm a beginner and tired. Make this fun.
