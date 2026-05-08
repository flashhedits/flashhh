# ✅ SPENDLY — COMPLETE CHECKLIST
## Everything you might miss. Tick as you go.

This is a paranoid checklist. Some items are essential, some are nice-to-haves, some are FYP-specific (presentation prep). Scan it all, decide what to skip.

---

## 🔧 1. CODE & FUNCTIONALITY

### Authentication
- [x] Sign up screen (email + password + name)
- [x] Login screen
- [x] Demo credentials shortcut for grading (`demo@spendly.app` / `demo123`)
- [x] Logout (tap home avatar)
- [x] Session persistence (stay logged in across refreshes)
- [ ] **MISSING: Forgot password flow** — Supabase has built-in, just add UI
- [ ] **MISSING: Email verification** — Supabase sends emails automatically, just turn on in Supabase Auth settings
- [ ] **MISSING: Profile edit screen** — currently set once during onboarding, can't change later
- [ ] **MISSING: Account deletion** — required for some app stores; nice for privacy

### Core Features (already built)
- [x] Add expense form with AI categorisation
- [x] Bot chat screen with natural language parsing
- [x] Voice input via Web Speech API
- [x] Receipt scanner with Claude vision
- [x] Donut chart on home screen
- [x] AI advisor with spending/saving/investing tabs
- [x] Search & filter transactions
- [x] CSV export
- [x] Empty states
- [x] LocalStorage persistence

### Missing Features (consider adding)
- [ ] **Edit/delete individual expense** — long-press or swipe to edit
- [ ] **Recurring expenses** — Netflix, gym, etc.
- [ ] **Multiple currencies** — for users abroad
- [ ] **Budget per category** — currently just one total budget
- [ ] **Spending trends over time** — line chart of daily spend
- [ ] **Expense reminders** — "You haven't logged anything today"
- [ ] **Weekly/monthly summaries** — email digest

---

## 🔐 2. SECURITY

- [x] API keys stored in environment variables (not in source code)
- [x] Supabase Row Level Security policies enforced
- [x] JWT verification on protected routes
- [x] HTTPS everywhere (Netlify + Railway both default to HTTPS)
- [ ] **CHECK: CORS restricted to your domain in production** — currently `origin: '*'`, change to your Netlify URL
- [ ] **CHECK: Service role key never exposed to frontend** — only `anon` key goes to browser
- [ ] **CHECK: Rate limiting on backend** — add `express-rate-limit` to prevent API abuse
- [ ] **CHECK: Input sanitisation** — Supabase parameterises queries, but verify no SQL injection
- [ ] **CHECK: Password strength requirements** — currently min 6 chars, consider min 8 + complexity

### Privacy
- [ ] **MISSING: Privacy policy page** — required for app store / FYP rubric
- [ ] **MISSING: Terms of service** — same
- [ ] **MISSING: Data export** — let users download all their data (GDPR-style)

---

## 🚀 3. DEPLOYMENT INFRASTRUCTURE

### Frontend (Netlify)
- [ ] Custom domain configured (optional but professional)
- [ ] Netlify branch previews enabled
- [ ] HTTPS forced (default on)
- [ ] Custom 404 page
- [ ] Deploy notifications (Slack/email) configured

### Backend (Railway)
- [ ] All env vars added in Railway dashboard
- [ ] Auto-deploy on git push to main branch
- [ ] Crash auto-restart enabled (default)
- [ ] Logs being saved
- [ ] Free tier credit monitoring (don't run out mid-demo)

### Database (Supabase)
- [ ] Schema deployed (`schema.sql` ran successfully)
- [ ] RLS policies tested with two user accounts
- [ ] Daily backups verified (auto on free tier)
- [ ] Database password documented in team's password manager

### WhatsApp (Twilio)
- [ ] Sandbox joined by all team members
- [ ] Webhook URL set correctly (no trailing slash)
- [ ] Tested from at least 2 different phones
- [ ] **NOTE:** Sandbox expires after 3 days of inactivity — re-join before demo

### API Keys
- [ ] Anthropic API has credit (~$5 covers full demo)
- [ ] Twilio account has trial credit
- [ ] All keys backed up in 1Password / Bitwarden / shared note

---

## 🧪 4. TESTING

### Manual Test Cases (run before submission)

**Authentication:**
- [ ] Sign up with valid details → reach onboarding
- [ ] Sign up with invalid email → see error
- [ ] Sign up with short password → see error
- [ ] Login with correct credentials → reach app
- [ ] Login with wrong password → see error
- [ ] Logout → return to welcome screen
- [ ] Refresh page while logged in → stay logged in

**Bot Chat:**
- [ ] "KFC 850" → logs as KFC, Food, Rs 850 ✓
- [ ] "petrol 3500" → logs as Petrol, Transport ✓
- [ ] "makki oil 2000" → logs as Makki Oil, **Shopping** (not Food!)
- [ ] "2000kfc" → cleans to "KFC" not "2000kfc" ✓
- [ ] "hello" → responds without logging ✓
- [ ] Voice input "I spent 500 on lunch" → logs ✓
- [ ] Quick chip taps work ✓

**Receipt Scanner:**
- [ ] Demo cafe button works
- [ ] Demo petrol button works  
- [ ] Real photo upload works (test with actual receipt photo)
- [ ] Add to expenses works

**Add Expense Form:**
- [ ] Auto-categorise after typing 4+ chars
- [ ] Manual category override works
- [ ] Date picker defaults to today
- [ ] Validation prevents empty submissions

**Multi-User:**
- [ ] User A logs expenses → User B logs in → User B doesn't see User A's data
- [ ] WhatsApp message from User A's phone → only logs to User A's account

**Edge Cases:**
- [ ] Slow internet → loading spinners appear
- [ ] No internet → graceful error message
- [ ] Empty transactions list → empty state shown
- [ ] 100+ transactions → app stays performant

### Browser Compatibility
- [ ] Chrome (Android) ✓
- [ ] Safari (iPhone) — voice input may need different handling
- [ ] Chrome (desktop) ✓
- [ ] Firefox — Web Speech API not supported, gracefully degrade

---

## 📝 5. DOCUMENTATION (for FYP submission)

### In your project repo
- [x] `README.md` — project overview
- [x] `DEPLOYMENT_GUIDE.md` — how to deploy from scratch
- [x] `ROADMAP.md` — team breakdown (this is for you, may not submit)
- [x] `CHECKLIST.md` — this file
- [ ] **MISSING: ARCHITECTURE.md** — system design with diagrams (ASCII or image)
- [ ] **MISSING: API.md** — API endpoints documentation
- [ ] **MISSING: SECURITY.md** — threat model, security decisions

### For Supervisor / FYP Committee
- [ ] **Project proposal document** (you probably submitted this earlier)
- [ ] **Software Requirements Specification (SRS)** — formal requirements doc
- [ ] **System Design Document** — architecture, ER diagram, sequence diagrams
- [ ] **User Manual** — screenshots + how to use each feature
- [ ] **Test Report** — manual + automated test results
- [ ] **Project Report / Thesis** — the big document, usually 50–100 pages
  - Abstract
  - Introduction & motivation
  - Literature review (existing solutions: Mint, YNAB, Walnut, Money Lover)
  - Methodology (Agile, Scrum, etc.)
  - Tools & technologies justification
  - System design
  - Implementation
  - Testing
  - Results & evaluation
  - Conclusion & future work
  - References (IEEE format usually)

---

## 🎤 6. PRESENTATION PREP

### Slide deck (Google Slides / PPT)
- [ ] Title slide (project name, team, supervisor, date)
- [ ] Problem statement (1 slide)
- [ ] Target audience (Pakistani youth, students, young professionals)
- [ ] Existing solutions & gap analysis (Mint, Walnut, etc.)
- [ ] Proposed solution overview
- [ ] Key innovations (WhatsApp bot, voice, AI categorisation)
- [ ] Architecture diagram
- [ ] Tech stack
- [ ] Live demo (5–7 min)
- [ ] Code walkthrough (2–3 min)
- [ ] Testing & accuracy results
- [ ] Challenges faced & solutions
- [ ] Future work / roadmap
- [ ] Q&A

### Live demo prep
- [ ] **Backup video recording** in case Wi-Fi/internet fails on demo day
- [ ] **Pre-load test data** so screens aren't empty
- [ ] **Test on the projector/screen size** beforehand
- [ ] **Print backup printouts** of key screens
- [ ] **Charge all devices** to 100%
- [ ] **Have a phone hotspot** as Wi-Fi backup

### Practice
- [ ] At least 3 dry runs in front of each other
- [ ] Time it (most FYPs allow 15-20 min)
- [ ] Anticipate supervisor questions:
  - "Why Claude AI specifically?"
  - "What's your accuracy rate?"
  - "How do you handle privacy?"
  - "How will you make money from this?"
  - "What if Anthropic raises prices?"
  - "What about offline mode?"
  - "How does this scale to 1 million users?"
  - "Why not use Firebase instead of Supabase?"

---

## 🎨 7. POLISH (the "FYP wow factor")

These small things massively impact perception:

- [ ] **App icon / favicon** — make a custom one (currently 💰 emoji)
- [ ] **Loading screen / splash** — first 1 second when app opens
- [ ] **Logo design** — proper SVG logo for the project
- [ ] **Brand colors documented** — hex codes used consistently
- [ ] **Marketing landing page** — separate `landing.html` showcasing the app
- [ ] **Pitch video** (1-2 min) — for portfolio / supervisor
- [ ] **Screenshots gallery** — for documentation
- [ ] **Demo accounts pre-populated** — supervisor can immediately try without signup

---

## 💼 8. FYP-SPECIFIC ITEMS (often forgotten)

- [ ] **Plagiarism check** on all written work (Turnitin)
- [ ] **Citations** for any code/idea you adapted
- [ ] **License file** in repo (MIT or Apache 2.0)
- [ ] **`.gitignore`** properly excludes `node_modules/`, `.env`, etc.
- [ ] **Commit history** is clean (squash messy commits if needed)
- [ ] **Each team member has commits** — supervisors check this!
- [ ] **GitHub repo is public OR shared with supervisor**
- [ ] **README has all team member names + roll numbers**
- [ ] **Acknowledgements** section — supervisor, family, etc.
- [ ] **Print bound copy** of thesis if required by your university
- [ ] **CD/USB submission** if required
- [ ] **Submission deadline confirmed** — date AND time AND format

---

## 🐛 9. KNOWN LIMITATIONS (be honest in your report)

Address these proactively in the "Limitations" section of your thesis:

- Twilio WhatsApp sandbox requires opt-in (not real WhatsApp Business API)
- Web Speech API only works on Chrome/Edge browsers
- Receipt OCR accuracy depends on photo quality
- AI categorisation occasionally wrong on novel merchant names
- No native iOS/Android apps yet (web-based)
- Limited to PKR currency
- No multi-language support yet (English only)
- No bank account integration (manual entry only)

Showing self-awareness here gets you marks — pretending it's perfect loses them.

---

## 🎯 10. MINIMUM VIABLE DEMO (if you only have 1 day left)

Cut everything else. Make sure these 5 things work flawlessly:

1. **Sign up + login** working end-to-end
2. **Bot chat** parses and categorises correctly
3. **Receipt scanner** works on a real photo
4. **WhatsApp bot** logs from real phone to real account
5. **Multi-user separation** — User A and User B see different data

If those 5 work live in front of your supervisor, you'll pass. Everything else is icing.

---

## 🆘 11. EMERGENCY CONTACTS

In case something breaks the night before submission:

- **Supabase status:** https://status.supabase.com
- **Railway status:** https://status.railway.app
- **Twilio status:** https://status.twilio.com
- **Anthropic status:** https://status.anthropic.com
- **Stack Overflow** for code errors (search exact error message)
- **Supabase Discord** — community responds within hours
- **Railway Discord** — same

---

## ✨ FINAL TIPS

1. **Submit early** — never push code minutes before deadline
2. **Test on supervisor's likely device** — if they use iPhone, test on Safari
3. **Have a backup of EVERYTHING** — code, slides, video, environment vars, on USB
4. **Don't add features the night before** — only fix bugs
5. **Sleep before the presentation** — fatigue kills more demos than bugs
6. **Be honest about limitations** — supervisors respect self-awareness
7. **The roadmap document IS proof of teamwork** — show it as part of your methodology section

---

*Print this. Highlight every item you've done in green. Highlight what's left in yellow. Cross off what you decided to skip in red. This is your project status at a glance.*

**Good luck. You've got this. 💪**
