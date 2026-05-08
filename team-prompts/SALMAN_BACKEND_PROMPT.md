# 🤖 SALMAN — AI & INTEGRATION ENGINEER

## 👋 PASTE THIS ENTIRE MESSAGE INTO YOUR AI (Claude/ChatGPT/Cursor)

---

I'm Salman. I'm the **AI & Integration Engineer** for our Final Year Project called **Spendly** — an AI-powered expense tracker with a WhatsApp bot.

I'm working in parallel with two teammates:
- **Ali** (Frontend Engineer) — building the web app UI
- **Talha** (Database/Deployment Engineer) — handling Supabase + infra

I own the **backend/server.js** file. It's a Node.js + Express server that:
- Receives WhatsApp messages from Twilio webhook
- Calls Claude AI to parse natural language expenses
- Saves them to Supabase database
- Provides REST API to Ali's frontend

**My job today:** Build, test, and deploy the backend server.

I am a **complete beginner** at coding. Please:
1. Explain everything in plain English
2. Give me one step at a time
3. Tell me exactly what to install and what to type
4. After each step, give me a verification command
5. Use analogies a beginner can understand
6. If something errors out, walk me through reading the error message

---

## 📋 MY TASK LIST FOR TODAY

### Phase 1 (90 min) — Setup
1. Help me install Node.js on my laptop (I've never used it)
2. Help me sign up at **console.anthropic.com** and add $5 credit
3. Help me get an Anthropic API key
4. Help me sign up at **twilio.com** and find:
   - Account SID
   - Auth Token
   - Activate WhatsApp Sandbox
5. Help me sign up at **railway.app** (will use this to deploy later)

### Phase 2 (2 hours) — Build & Test Locally

6. Help me set up the local dev environment:
   ```bash
   cd backend
   npm install
   ```
7. Help me create a `.env` file with all my keys (using `.env.example` as template). My teammate Talha will give me the SUPABASE keys later.

8. Help me run the server locally:
   ```bash
   npm start
   ```
   Confirm I can hit `http://localhost:3000/health` in my browser.

9. Help me test Claude API integration with a curl command:
   ```bash
   curl -X POST http://localhost:3000/api/bot \
     -H "Content-Type: application/json" \
     -d '{"message":"KFC 850"}'
   ```
   Should return: `{"result":"{\"understood\":true,\"description\":\"KFC\"...}"}`

10. Help me improve the BOT_SYSTEM prompt for better accuracy. Test these cases:
    - "2000kfc" → should say description = "KFC", category = "Food"
    - "makki oil 2000" → should say category = "Shopping" (NOT Food!)
    - "1500careem" → should say description = "Careem Ride"
    - "petrol 3500" → should say category = "Transport"
    - "hello" → should say understood = false

11. Help me build a quick test script that runs all 10+ test cases and shows me the accuracy rate.

### Phase 3 — Deploy to Railway

12. Help me sign up for Railway with GitHub
13. Help me push my code to a GitHub repo
14. Help me deploy on Railway from the GitHub repo
15. Help me add ALL environment variables in Railway dashboard
16. Help me get a public URL (e.g. `https://spendly-api.up.railway.app`)
17. Help me test `/health` from this public URL

### Phase 4 — Connect WhatsApp

18. Help me set up the Twilio webhook URL pointing to my Railway URL + `/webhook`
19. Help me join the Twilio WhatsApp sandbox from my phone
20. Help me send "KFC 850" to the sandbox number — confirm I get a friendly bot reply

---

## 🛠️ TECH I'M USING

- Node.js + Express
- @anthropic-ai/sdk (Claude API)
- @supabase/supabase-js (database)
- twilio (WhatsApp)
- dotenv (environment variables)

---

## ⚠️ CRITICAL RULES

1. **NEVER commit `.env` to GitHub** — add it to `.gitignore`
2. **API keys go in Railway environment variables**, never in code
3. **Use the SUPABASE_SERVICE_KEY** (not the anon key) for backend
4. **CORS must allow Ali's Netlify domain** — I'll set this once Talha gives me the URL
5. **All my responses to Claude should request JSON-only output** — strip markdown backticks before parsing

---

## 🎯 SUCCESS CRITERIA

By end of day:
- ✅ Railway URL works publicly (test from phone hotspot)
- ✅ `/health` returns OK
- ✅ `/api/bot` parses any expense correctly
- ✅ WhatsApp bot replies in <3 seconds
- ✅ Categorisation accuracy ≥90% on test cases
- ✅ My commits visible in GitHub history

---

## 🤝 INTEGRATION POINTS

- **From Talha:** I need `SUPABASE_URL` and `SUPABASE_SERVICE_KEY` (for env vars)
- **To Ali:** I'll give him my Railway URL like `https://spendly-api.up.railway.app`
- **To Talha:** He needs to ensure the Supabase tables exist before my server can write to them

---

## 🙏 REQUEST

Now please:
1. Confirm you understand my role
2. Ask me to confirm I have the project zip ready
3. Then start me on **Step 1: Installing Node.js**
4. Walk me through it step-by-step

Be encouraging — I'm a beginner and we're racing against time. Help me move fast without breaking things.
