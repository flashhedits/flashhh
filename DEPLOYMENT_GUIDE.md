# 🚀 SPENDLY — COMPLETE DEPLOYMENT GUIDE
### For complete beginners. Follow every step exactly.

---

## WHAT YOU'LL DEPLOY

| Part | What it is | Where | Cost |
|------|-----------|-------|------|
| Frontend (the app UI) | `frontend/index.html` | Netlify | FREE |
| Backend (WhatsApp + AI) | `backend/server.js` | Railway | FREE |
| Database | Supabase (Postgres) | Supabase | FREE |
| WhatsApp bot | Twilio sandbox | Twilio | FREE (testing) |
| AI brain | Claude API | Anthropic | ~$0.01/use |

**Total cost: ~FREE for demo/FYP purposes**

---

## PART 1 — SET UP YOUR DATABASE (Supabase)
*Takes 5 minutes*

### Step 1.1 — Create account
1. Go to **https://supabase.com**
2. Click **"Start your project"**
3. Sign up with GitHub (easiest)

### Step 1.2 — Create a project
1. Click **"New project"**
2. Name it: `spendly`
3. Set a database password (write it down, you won't need it often)
4. Choose region: **Southeast Asia (Singapore)** — closest to Pakistan
5. Click **"Create new project"** — wait ~2 minutes

### Step 1.3 — Create the expenses table
1. In your project, click **"SQL Editor"** (left sidebar)
2. Click **"New query"**
3. Paste this SQL and click **"Run"**:

```sql
CREATE TABLE expenses (
  id BIGSERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  category TEXT DEFAULT 'Food',
  amount INTEGER NOT NULL,
  date TEXT,
  source TEXT DEFAULT 'app',
  phone TEXT,
  raw_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Allow public read/write for demo (in production, add auth)
ALTER TABLE expenses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON expenses FOR ALL USING (true) WITH CHECK (true);
```

### Step 1.4 — Get your API keys
1. Click **"Settings"** (gear icon, left sidebar)
2. Click **"API"**
3. Copy and save:
   - **Project URL** → this is your `SUPABASE_URL`
   - **anon public** key → this is your `SUPABASE_ANON_KEY`

---

## PART 2 — GET YOUR API KEYS

### Step 2.1 — Anthropic (Claude AI)
1. Go to **https://console.anthropic.com**
2. Sign up / log in
3. Click **"API Keys"** → **"Create Key"**
4. Name it `spendly` → copy the key (starts with `sk-ant-`)
5. Add some credits: **$5 is enough for the entire FYP demo**
   (Settings → Billing → Add credits)

### Step 2.2 — Twilio (WhatsApp)
1. Go to **https://twilio.com** → sign up (free)
2. You'll land on the console dashboard
3. Copy and save:
   - **Account SID** (starts with `AC`)
   - **Auth Token** (click the eye icon to reveal)
4. Click **"Explore products"** → **"Messaging"** → **"Try it out"** → **"Send a WhatsApp message"**
5. You'll see the **WhatsApp Sandbox** number: `+1 415 523 8886`
6. Follow the instructions to join the sandbox:
   - Save `+1 415 523 8886` in your phone as "Spendly Test"
   - Send the join code (e.g. `join silver-moon`) to that number on WhatsApp

---

## PART 3 — DEPLOY THE BACKEND (Railway)
*Takes 10 minutes*

### Step 3.1 — Prepare your code
1. Create a new folder on your laptop called `spendly-backend`
2. Copy `backend/server.js` and `backend/package.json` into it
3. Create a file called `.env` (copy from `.env.example`) and fill in ALL your keys

### Step 3.2 — Create Railway account
1. Go to **https://railway.app**
2. Sign up with GitHub

### Step 3.3 — Deploy
**Option A — Drag and Drop (easier):**
1. ZIP your `spendly-backend` folder
2. On Railway, click **"New Project"** → **"Deploy from local"**
3. Drag your ZIP file

**Option B — Via GitHub (recommended):**
1. Go to **https://github.com** → create account if needed
2. Create a new repository called `spendly-backend`
3. Upload your `server.js` and `package.json` files (drag and drop on GitHub)
4. On Railway: **"New Project"** → **"Deploy from GitHub repo"** → select `spendly-backend`

### Step 3.4 — Add environment variables
1. In Railway, click on your project → **"Variables"** tab
2. Click **"Raw Editor"** and paste:

```
ANTHROPIC_API_KEY=sk-ant-your-real-key-here
TWILIO_ACCOUNT_SID=ACyour-real-sid-here
TWILIO_AUTH_TOKEN=your-real-token-here
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=eyJ...your-key...
PORT=3000
```

3. Click **"Update Variables"** — Railway will redeploy automatically

### Step 3.5 — Get your backend URL
1. Click **"Settings"** tab in your Railway project
2. Under **"Domains"**, click **"Generate Domain"**
3. Copy your URL — it looks like: `https://spendly-backend-production-xxxx.up.railway.app`
4. **Test it**: open `https://your-url.up.railway.app/health` in your browser
   - You should see: `{"status":"ok","service":"Spendly API"}`

---

## PART 4 — CONNECT WHATSAPP TO YOUR BACKEND

### Step 4.1 — Set webhook URL in Twilio
1. Go back to **Twilio Console** → **Messaging** → **Try it out** → **WhatsApp sandbox**
2. Under **"Sandbox settings"**, find:
   **"When a message comes in"** field
3. Paste your Railway URL + `/webhook`:
   ```
   https://spendly-backend-production-xxxx.up.railway.app/webhook
   ```
4. Method: **HTTP POST**
5. Click **"Save"**

### Step 4.2 — Test WhatsApp bot
1. Open WhatsApp on your phone
2. Send to the Twilio sandbox number: **"KFC 850"**
3. You should get back: *"KFC logged! 🍗 Rs 850 added."*
4. Check Supabase → Table Editor → expenses — you'll see the row!

---

## PART 5 — DEPLOY THE FRONTEND (Netlify)
*Takes 2 minutes*

### Step 5.1 — Update the backend URL in the HTML
1. Open `frontend/index.html` in any text editor (Notepad is fine)
2. Find this line near the top of the `<script>` section:
   ```javascript
   const BACKEND_URL = '';
   ```
3. Change it to your Railway URL:
   ```javascript
   const BACKEND_URL = 'https://spendly-backend-production-xxxx.up.railway.app';
   ```
4. Save the file

### Step 5.2 — Deploy to Netlify
1. Go to **https://netlify.com** → Sign up (free)
2. After signing up, go to **https://app.netlify.com**
3. You'll see a drop zone: **"Drag and drop your site's output folder here"**
4. Drag your `index.html` file directly into that box
5. Wait 10 seconds — Netlify gives you a URL like:
   `https://amazing-name-123456.netlify.app`

### Step 5.3 — Get a better URL name (optional but looks professional)
1. Click on your site in Netlify
2. **"Site configuration"** → **"Change site name"**
3. Type `spendly-fyp` → Save
4. Your URL is now: `https://spendly-fyp.netlify.app` ✨

---

## PART 6 — TEST EVERYTHING

### Full test checklist:
- [ ] Open `https://spendly-fyp.netlify.app` in browser
- [ ] Onboarding appears → complete setup → enter app
- [ ] Bot tab: type "KFC 850" → expense logged in app ✓
- [ ] Bot tab: type "petrol 3500" → category = Transport ✓
- [ ] Bot tab: type "makki oil 1500" → category = Shopping ✓
- [ ] Scan tab: click "Cafe" demo → data extracted ✓
- [ ] Add tab: type description → AI suggests category ✓
- [ ] WhatsApp: send "pizza 1200" to Twilio number → reply received ✓
- [ ] Supabase: check expenses table → WhatsApp entry visible ✓

---

## PART 7 — FOR YOUR FYP PRESENTATION

### Project Architecture Diagram
```
┌─────────────────────────────────────────────────────┐
│                   USER INTERFACES                    │
│                                                      │
│   📱 WhatsApp          🌐 Spendly Web App            │
│   (any phone)          (spendly-fyp.netlify.app)     │
└──────────┬──────────────────────┬───────────────────┘
           │                      │
           ▼                      ▼
┌──────────────────┐   ┌──────────────────────────────┐
│  TWILIO          │   │  RAILWAY BACKEND              │
│  WhatsApp API    │──▶│  Node.js + Express            │
│                  │   │  POST /webhook                │
└──────────────────┘   │  POST /api/bot                │
                       │  POST /api/classify           │
                       │  POST /api/scan               │
                       └──────────┬───────────────────┘
                                  │
                    ┌─────────────┴─────────────┐
                    ▼                           ▼
         ┌──────────────────┐       ┌──────────────────┐
         │   CLAUDE AI      │       │   SUPABASE DB    │
         │   (Anthropic)    │       │   (PostgreSQL)   │
         │                  │       │                  │
         │ • Parse expenses │       │ • Store expenses │
         │ • Categorise     │       │ • User data      │
         │ • Receipt scan   │       │ • History        │
         └──────────────────┘       └──────────────────┘
```

### Team responsibilities (3 people):

**Person 1 — Frontend (Ahmed)**
- index.html: all 5 screens + onboarding
- Responsive mobile-first design
- Voice input integration
- Local storage & state management

**Person 2 — AI & Integration (Name)**
- Claude API integration (bot, categoriser, vision)
- WhatsApp webhook logic (server.js)
- Prompt engineering for accuracy

**Person 3 — Backend & Database (Name)**
- Supabase schema design & setup
- Railway deployment & CI/CD
- API routes & error handling
- System testing & documentation

---

## TROUBLESHOOTING

### "WhatsApp bot not responding"
→ Check Railway logs (click your project → "Deployments" → "View logs")
→ Verify webhook URL in Twilio is exactly right (no trailing slash)
→ Make sure you joined the sandbox (sent the join code)

### "API not working"
→ Check `/health` route first: `https://your-url.railway.app/health`
→ Check all env variables are set in Railway (no extra spaces)
→ Check Anthropic account has credits

### "Netlify page not loading"
→ Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
→ Check browser console for errors (F12 → Console tab)

### "Category still wrong"
→ The bot uses Claude API — if BACKEND_URL is empty, it calls Claude directly
→ Make sure ANTHROPIC_API_KEY has credits loaded

---

## TEAM NOTES

- The WhatsApp sandbox only works for numbers that joined it (for demo/FYP this is fine)
- For a real production app: upgrade to Twilio paid ($15/month) for a real WhatsApp number
- Free tier limits: Railway = 500 hours/month, Supabase = 50,000 rows, Netlify = 100GB bandwidth
- All free tiers are MORE than enough for a FYP demo

---

*Built with Claude AI by Anthropic | Spendly FYP 2024–25*
