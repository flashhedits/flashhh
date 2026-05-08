# 📢 PM TEMPLATES — COPY/PASTE ASSETS

---

## 1. ZOOM STANDUP SCRIPT (use at every checkpoint)

**You read aloud:**

> "OK team, quick standup — 2 minutes per person. Tell me:
> 1. What you finished since last sync
> 2. What you're doing next
> 3. Anything blocking you
>
> Ali, you go first."

**After all 3 speak, you say:**

> "Got it. Blockers I'll help with: [list].
> Next sync: [time]. Back to your AI prompts. GO."

---

## 2. LMS PROGRESS UPDATE TEMPLATE

Paste this in your LMS at the end of each work session:

```
═══════════════════════════════════════════════════
SPENDLY FYP — Progress Report
Date: [DD-MM-YYYY] | Session: [Morning/Afternoon/Evening]
Team: Ali (Frontend) | Salman (Backend) | Talha (Database)
PM: [Your Name]
═══════════════════════════════════════════════════

✅ COMPLETED THIS SESSION
─────────────────────────
Frontend (Ali):
- [✓] Set up GitHub Desktop
- [✓] Cloned project repo
- [✓] Polished signup screen with validation
- [✓] Added profile edit screen
- [✓] [...]

AI/Backend (Salman):
- [✓] Got Anthropic API key (added $5 credit)
- [✓] Got Twilio Account SID + Auth Token
- [✓] Backend running locally on port 3000
- [✓] Bot accuracy tested (12/15 cases passing = 80%)
- [✓] [...]

Database/Deploy (Talha):
- [✓] Supabase project created
- [✓] Schema deployed (profiles + expenses tables)
- [✓] RLS policies verified
- [✓] GitHub repo created
- [✓] [...]

🎯 LIVE SYSTEM STATUS
─────────────────────
Frontend URL: https://spendly-fyp.netlify.app  [✅ LIVE]
Backend URL:  https://spendly-api.up.railway.app  [✅ LIVE]
Database:     Supabase project [✅ ACTIVE]
WhatsApp:     Twilio sandbox [✅ ACTIVE]
Bot Accuracy: 92% on 25 test cases

🚧 IN PROGRESS
──────────────
- [Ali] Wiring Supabase auth into login flow
- [Salman] Improving bot prompt for Roman Urdu support
- [Talha] Drawing ER diagram in Excalidraw

🚨 BLOCKERS
───────────
- [None] / [Description]

📅 NEXT SESSION GOALS
─────────────────────
1. [Ali] Deploy v2 to Netlify
2. [Salman] Test WhatsApp end-to-end with all 3 phones
3. [Talha] Complete deployment runbook

📷 SCREENSHOTS / EVIDENCE
─────────────────────────
[Attach screenshot of working app]
[Attach screenshot of Supabase data]
[Attach screenshot of WhatsApp bot reply]

⏱️ TIME LOG
───────────
Total session hours: [X]
Hours per person:
- Ali: [X]
- Salman: [X]
- Talha: [X]

Submitted by: [Your Name] (PM)
═══════════════════════════════════════════════════
```

---

## 3. SUPERVISOR EMAIL TEMPLATE

Send this to your supervisor when you have something to demo:

```
Subject: Spendly FYP — Mid-progress demo ready for review

Dear [Supervisor],

Hope you're well. Our team has reached a major milestone on the Spendly project.

🌐 Live demo: https://spendly-fyp.netlify.app
🔐 Demo login: demo@spendly.app / demo123

Working features as of today:
✓ User authentication (signup/login)
✓ AI-powered expense bot (natural language)
✓ Receipt scanning (Claude vision API)
✓ Voice input
✓ WhatsApp integration (text "KFC 850" to +14155238886)
✓ AI financial advisor

Architecture:
- Frontend: Netlify (HTML/CSS/JavaScript)
- Backend: Railway (Node.js + Express)
- Database: Supabase (PostgreSQL)
- AI: Anthropic Claude API
- WhatsApp: Twilio

We'd love your feedback before our final submission.

Best regards,
[Your Name]
Project Manager — Spendly FYP
[Team: Ali Rise, Salman, Talha Aesthetic]
```

---

## 4. TEAM WHATSAPP CHAT MESSAGES

Quick copy-paste replies for the team chat:

### When you need to gather everyone:
> 🔔 *Standup time* — drop into Zoom in 2 min. Update your status when you join.

### When announcing a checkpoint:
> ✅ *Phase [X] complete!* — Ali, Salman, Talha — all green.
> Next sync: [time]
> Anyone need help in the next [Y] minutes? Tag me.

### When someone is blocked:
> 🆘 *[Name] is blocked on [thing]*
> @[helper] can you jump in for 5 min?
> Everyone else: keep coding.

### Tracking velocity (end of session):
> 📊 *End-of-session vibe check*
> 1️⃣ Energy level (1-10)?
> 2️⃣ Confidence we'll ship by deadline?
> 3️⃣ One thing you need from the team tomorrow?

---

## 5. INTEGRATION DAY CHECKLIST

When everyone's individual work is done and you do the BIG MERGE:

### Step 1: Talha shares URLs
- [ ] Talha drops in Zoom chat:
  ```
  SUPABASE_URL = https://xxxxxxx.supabase.co
  SUPABASE_ANON_KEY = eyJ...
  SUPABASE_SERVICE_KEY = eyJ...  (FOR SALMAN ONLY)
  ```
- [ ] Ali copies URL + ANON key
- [ ] Salman copies URL + SERVICE key

### Step 2: Salman deploys backend
- [ ] Salman adds env vars in Railway
- [ ] Salman tests `/health` from his phone
- [ ] Salman drops in Zoom chat: `BACKEND_URL = https://xxx.up.railway.app`

### Step 3: Ali wires it all up
- [ ] Ali updates 3 constants in `index.html`:
  ```javascript
  const BACKEND_URL = '...';
  const SUPABASE_URL = '...';
  const SUPABASE_ANON_KEY = '...';
  ```
- [ ] Ali tests locally — signup creates a row in Supabase
- [ ] Ali tests bot tab — gets parsed expense back

### Step 4: Ali deploys to Netlify
- [ ] Drag-drop `index.html` onto netlify.com/drop
- [ ] Drops in Zoom chat: `LIVE URL: https://xxx.netlify.app`

### Step 5: Talha updates CORS
- [ ] Talha tells Salman the Netlify URL
- [ ] Salman updates CORS in `server.js` to allow only that origin
- [ ] Salman re-deploys (auto on git push)

### Step 6: All 3 test on real phones
- [ ] All sign up with real emails
- [ ] All log expenses via bot
- [ ] All link WhatsApp & test

🎉 *If all 6 steps work, you have a fully deployed FYP project!*

---

## 6. EMERGENCY ESCALATION SCRIPT

If something is critically broken 1 hour before submission:

> "OK team, this is critical-bug protocol.
> Stop everything else.
> Ali — keep your laptop on the broken thing.
> Salman + Talha + me — open Claude.ai and paste:
>
> 'I am part of a 3-person FYP team. Our app is broken with this error: [paste error].
> The setup is: [describe stack briefly].
> What we tried: [describe attempts].
> Time pressure: 1 hour to demo.
> Help me debug this in 10 minutes.'
>
> Each of us gets a different angle from the AI.
> We share findings every 5 min.
> If still broken in 30 min, we switch to backup video demo.
> Go."

---

## 7. PRESENTATION DAY MORNING CHECKLIST (PM)

- [ ] All 3 team members have laptops fully charged
- [ ] Phone hotspots tested (in case Wi-Fi dies)
- [ ] Backup video saved to: laptop + USB + Google Drive
- [ ] Demo accounts pre-loaded with sample data
- [ ] Twilio sandbox re-joined (it expires after 3 days inactivity!)
- [ ] Anthropic credit balance >$2
- [ ] Supabase database hasn't been deleted/paused
- [ ] Railway service is "active" (not slept)
- [ ] Slides on USB + Google Drive + email to self
- [ ] Test demo URL on supervisor's likely device
- [ ] Print 1 backup copy of slides
- [ ] All team members have proper attire
- [ ] Snacks/water at the table
- [ ] Phone on silent
- [ ] Deep breath. You've got this. 🚀

---

*PM, this is your PA-quality coordination. Trust the process. Stay calm.*
