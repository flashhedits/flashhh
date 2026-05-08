# 🗺️ SPENDLY — TEAM ROADMAP
## Final Year Project · 3 Members · Complete Battle Plan

---

## 📋 PROJECT VISION (1-LINE PITCH)

> *"Spendly is a Pakistan-first AI expense tracker that lets students log spending through a WhatsApp bot, scan receipts with vision AI, and get personalised financial advice — without ever opening an app."*

---

## 👥 THE THREE ROLES

We're splitting Spendly into three vertical slices. Each member fully owns their layer end-to-end. This is how real engineering teams work — vertical ownership beats horizontal task-passing.

| Role | Member | Owns | Tech |
|------|--------|------|------|
| **🎨 Frontend Engineer** | Person A | The entire user interface & user experience | HTML / CSS / JavaScript / Web Speech API |
| **🤖 AI & Integration Engineer** | Person B | All AI logic & WhatsApp integration | Node.js / Express / Claude API / Twilio |
| **🗄️ Backend & Database Engineer** | Person C | Database, auth, deployment, infrastructure | Supabase / PostgreSQL / Railway / Netlify |

Pick which role suits each member based on:
- **Person A:** Strongest in design/UI/visual thinking
- **Person B:** Most comfortable with APIs, prompt engineering, integration
- **Person C:** Most comfortable with databases, security, DevOps

---

## 🎨 PERSON A — FRONTEND ENGINEER

### Owns
The entire `frontend/index.html` file. Everything the user sees and touches.

### Detailed Responsibilities

**1. UI/UX Design & Implementation**
- All 6 screens: Welcome → Sign Up → Login → Onboarding tour → Main app (Home/Add/Bot/Scan/Advisor/Transactions)
- Mobile-first responsive design (works on phone screens 360px–414px wide)
- Dark theme aesthetic with green accent (#00c896)
- Smooth animations & transitions
- Loading states, error states, empty states

**2. Client-Side Logic**
- LocalStorage management (caching user preferences, expenses)
- Client-side form validation (signup, login, expense entry)
- Donut chart rendering (custom SVG, no external library)
- Search & filter for transactions
- CSV export functionality

**3. Voice & Speech Integration**
- Web Speech API for voice input on bot screen
- Microphone permission handling
- Visual feedback (waveform animation while listening)

**4. API Integration (Frontend Side)**
- Supabase JS client for auth (signup, login, logout)
- Fetch calls to backend (`/api/bot`, `/api/classify`, `/api/scan`)
- JWT token storage & inclusion in protected requests
- Error handling for network failures

### Deliverables
- ✅ `frontend/index.html` (production-ready, deployed to Netlify)
- ✅ Responsive on mobile + desktop browsers
- ✅ All flows working: signup → onboarding → expense entry → analytics
- ✅ Documented code comments
- ✅ Browser console error-free

### Skills you'll learn
HTML5, modern CSS (flexbox, CSS variables, animations), vanilla JavaScript ES6+, async/await, Fetch API, Web Speech API, SVG, localStorage, JWT handling

### Time estimate: ~25 hours

---

## 🤖 PERSON B — AI & INTEGRATION ENGINEER

### Owns
The entire `backend/server.js` file + WhatsApp/Claude integration.

### Detailed Responsibilities

**1. Express API Routes**
- `POST /webhook` — Twilio WhatsApp inbound message handler
- `POST /api/bot` — Frontend chat bot relay
- `POST /api/classify` — Expense categorisation
- `POST /api/scan` — Receipt vision parsing
- `GET /api/expenses` — Auth-protected list
- `POST /api/expenses` — Auth-protected add
- `POST /api/link-whatsapp` — Link phone to user account
- `GET /health` — Service health monitoring

**2. Claude AI Integration**
- Prompt engineering for the Spendly Bot personality
- Description cleaning rules (e.g. "2000kfc" → "KFC")
- Category accuracy testing (Food vs Shopping for groceries)
- Vision API for receipt scanning
- Error handling & fallback regex parser
- Token usage optimisation

**3. WhatsApp Bot Integration (Twilio)**
- Twilio sandbox setup
- Webhook configuration
- TwiML response formatting
- Phone number → user account lookup
- Multi-user support
- Onboarding for unlinked numbers

**4. Auth Middleware**
- JWT verification using Supabase
- `requireAuth` middleware for protected routes
- 401 error handling

### Deliverables
- ✅ `backend/server.js` deployed to Railway
- ✅ All routes tested with Postman or curl
- ✅ WhatsApp bot working end-to-end
- ✅ Categorisation accuracy ≥90% on test cases
- ✅ Logs stored & accessible
- ✅ API documentation (which routes, what inputs, what outputs)

### Skills you'll learn
Node.js, Express, REST API design, async error handling, Twilio webhooks, Anthropic SDK, prompt engineering, JWT authentication, environment variables, Railway deployment

### Time estimate: ~25 hours

---

## 🗄️ PERSON C — BACKEND & DATABASE ENGINEER

### Owns
Database schema, Supabase setup, deployment pipelines, infrastructure.

### Detailed Responsibilities

**1. Supabase Setup**
- Create project & configure regions
- Run `database/schema.sql` to create tables
- Configure Row Level Security (RLS) policies
- Enable email/password authentication
- (Optional) Configure email templates for verification

**2. Schema Design & Maintenance**
- `profiles` table (extends auth.users)
- `expenses` table (per-user financial records)
- Indexes for performance
- Trigger for auto-creating profile on signup
- Data integrity constraints (CHECK amount > 0, etc.)

**3. Deployment Pipeline**
- Frontend → Netlify (drag-drop or GitHub auto-deploy)
- Backend → Railway (GitHub auto-deploy with environment variables)
- DNS / custom domain configuration (optional)
- Continuous deployment on git push

**4. Security & Data Hygiene**
- Environment variables management (never commit secrets)
- CORS policies
- Service role key vs anon key (which goes where)
- SQL injection prevention (Supabase handles this, but verify)
- Test that User A cannot see User B's data (RLS enforcement)

**5. Monitoring & Backups**
- Set up Supabase log monitoring
- Database backup verification (Supabase auto-backs-up daily on free tier)
- Railway crash recovery (auto-restart configured)

**6. Documentation**
- Architecture diagram
- Database ER diagram
- Deployment runbook (what to do if X breaks)

### Deliverables
- ✅ Supabase project configured & RLS tested
- ✅ Frontend live on Netlify
- ✅ Backend live on Railway
- ✅ Twilio webhook connected
- ✅ Database schema diagram
- ✅ Architecture diagram
- ✅ Deployment & troubleshooting documentation

### Skills you'll learn
PostgreSQL, SQL, Supabase, Row Level Security, JWT authentication concepts, Netlify, Railway, GitHub workflows, environment variable management, system architecture

### Time estimate: ~20 hours

---

## ⏱️ DAY-BY-DAY TIMELINE

### Phase 1: Setup Week (Days 1–3)

| Day | Person A | Person B | Person C |
|-----|----------|----------|----------|
| 1 | Read existing `index.html` end to end. Note questions. | Read `server.js`. Test it locally if possible. | Create Supabase project. Run `schema.sql`. |
| 2 | Set up local dev (just need a browser + text editor). Make a small visual change. | Sign up Anthropic, add $5 credit. Sign up Twilio, set up sandbox. | Create Railway account. Deploy backend stub & verify `/health` works. |
| 3 | Test the app locally end-to-end. Submit a "first PR" — fix a small UI thing. | Deploy `server.js` to Railway with env vars. Test webhook with curl. | Connect Twilio webhook to Railway URL. Test from your own phone. |

### Phase 2: Build Week (Days 4–10)

| Day | Person A | Person B | Person C |
|-----|----------|----------|----------|
| 4 | Polish Welcome/Signup/Login screens | Improve bot prompt accuracy | Verify RLS works (try to read another user's data) |
| 5 | Onboarding tour animations | Add /api/link-whatsapp route | Set up production env vars properly |
| 6 | Settings screen (logout, edit profile) | WhatsApp number linking flow tested | Database backup verification |
| 7 | Empty states + loading states | Receipt scanner accuracy testing | Architecture diagram |
| 8 | Voice input edge cases | Multi-user testing on WhatsApp | ER diagram of database |
| 9 | Final polish + cross-browser testing | Latency optimisation | Deployment runbook documentation |
| 10 | Demo prep | Demo prep | Demo prep |

### Phase 3: Demo Week (Days 11–14)

- Day 11: Full integration test (each person uses each other's components)
- Day 12: Edge case bug bash
- Day 13: Slides + script
- Day 14: Dry run + final submission

---

## 🔗 INTEGRATION PLAN — HOW THE THREE PIECES CONNECT

Here's the critical bit. Everyone's work has to plug together.

### Integration Point 1: Frontend ↔ Backend
**Who's involved:** Person A + Person B
**How:**
- Person A reads the API contract from Person B (which routes, what inputs/outputs)
- Person A sets `BACKEND_URL` constant at top of `index.html` to Person B's Railway URL
- Person A calls `fetch(BACKEND_URL + '/api/bot', ...)` for chat
- Person B ensures CORS allows Person A's Netlify domain

**Test:** Open the deployed Netlify app → bot tab → type "KFC 850" → expense logs ✓

### Integration Point 2: Backend ↔ Database
**Who's involved:** Person B + Person C
**How:**
- Person C provides Person B with `SUPABASE_URL` and `SUPABASE_SERVICE_KEY`
- Person B uses these in env vars on Railway
- Person B's code reads/writes via Supabase JS client
- Person C verifies RLS policies don't accidentally block legitimate writes

**Test:** Send WhatsApp message → Railway logs show success → row appears in Supabase expenses table ✓

### Integration Point 3: Frontend ↔ Database (Auth)
**Who's involved:** Person A + Person C
**How:**
- Person C provides Person A with `SUPABASE_URL` and `SUPABASE_ANON_KEY` (NOT service key)
- Person A uses Supabase JS client for signup/login (handled in browser)
- After login, Person A has a JWT token
- Person A includes this token in `Authorization: Bearer <token>` header on backend calls

**Test:** Sign up via app → row appears in `profiles` table → log out → log back in → name persists ✓

### Integration Point 4: WhatsApp ↔ User Account
**Who's involved:** All three
**How:**
1. Person A builds the "Link WhatsApp" UI in settings
2. Person B builds the `/api/link-whatsapp` route
3. Person C ensures the `whatsapp_number` field exists in `profiles` and is unique-indexed
4. User flow: app → Settings → Link WhatsApp → enters phone → Person A calls Person B's API → Person B writes to Person C's database
5. When WhatsApp message comes in: Person B's webhook looks up the phone in Person C's table → finds the user → logs the expense to that user's account

**Test:** Link your phone in app → text bot from same phone → expense appears in YOUR account, not someone else's ✓

---

## 🛠️ COMMUNICATION PROTOCOL

### Daily 10-min standup (do it on WhatsApp/Discord/in-person)
- What did you do yesterday?
- What will you do today?
- What's blocking you?

### When integrating:
- **Always test together** — one person screen-shares, the others watch and give input
- **Document the API contract first** — write down which routes accept/return what, agree, then build
- **Pair-debug** — if something breaks across two layers, get both owners on the same screen

### Tools we recommend:
- **Code:** GitHub (free) — single repo with `frontend/` and `backend/` folders
- **Communication:** WhatsApp group + Discord/Notion for longer notes
- **Tasks:** Trello or GitHub Projects (free)
- **Diagrams:** Excalidraw (free, browser-based)

---

## 📂 CODE OWNERSHIP MAP

```
spendly-fyp/
├── frontend/
│   └── index.html          ← Person A owns
├── backend/
│   ├── server.js           ← Person B owns
│   ├── package.json        ← Person B owns
│   └── .env.example        ← Person B + C own
├── database/
│   └── schema.sql          ← Person C owns
├── docs/
│   ├── ROADMAP.md          ← All 3
│   ├── DEPLOYMENT_GUIDE.md ← Person C primary
│   ├── CHECKLIST.md        ← All 3
│   └── ARCHITECTURE.md     ← Person C primary
└── README.md               ← All 3
```

---

## 🎯 DEFINITION OF DONE (ALL 3 MEMBERS)

The project is complete when ALL of these are true:

- [ ] User can sign up with email/password from the app
- [ ] User can log in and stay logged in (JWT persists across browser refreshes)
- [ ] User completes onboarding tour and reaches main app
- [ ] User can log expenses via Add screen → AI categorises correctly
- [ ] User can chat with bot → expenses parsed correctly with clean descriptions
- [ ] User can use voice input → speech transcribed → expense logged
- [ ] User can scan a real receipt → Claude extracts merchant/amount/category
- [ ] User can link WhatsApp number → text bot from phone → expense appears in app
- [ ] Two different users have completely separated data (RLS works)
- [ ] App is publicly accessible (Netlify URL works on any device)
- [ ] Backend is publicly accessible (Railway URL responds to /health)
- [ ] WhatsApp bot is publicly accessible (Twilio webhook fires)
- [ ] All API keys are stored in environment variables, never in source code
- [ ] Architecture diagram exists and is accurate
- [ ] Database ER diagram exists and is accurate
- [ ] README explains how to run/deploy from scratch

---

## 🏁 PRESENTATION DAY — WHO PRESENTS WHAT

**Slide 1–2 (intro): All three together** — problem statement, target user, market gap

**Slide 3–6 (UI demo): Person A**
- Live demo: signup → onboarding → log expense via bot → see chart
- Walk through design choices: dark theme, mobile-first, etc.

**Slide 7–10 (AI demo): Person B**
- Live demo: receipt scan, voice input, WhatsApp bot from real phone
- Show the bot prompt + explain prompt engineering decisions
- Show categorisation accuracy table (test cases)

**Slide 11–13 (Architecture & DevOps): Person C**
- Architecture diagram walkthrough
- Database ER diagram
- Show Supabase RLS policies in action (live attempt to access another user's data → fails)
- Show deployment pipeline

**Slide 14 (Future work): All three** — roadmap for V2 (multi-language, budgets per category, expense splitting with friends, bank integration)

**Q&A: Whichever person owns the area being asked about**

---

## 🚨 RISK MITIGATION

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| Anthropic API rate limit hit during demo | Low | Pre-load demo with cached responses, have backup video |
| Twilio sandbox sends fail | Medium | Test 1 hour before demo. Have backup screen recording |
| Internet down during demo | Low | Demo has local fallback mode (regex parser) |
| Person leaves project | Medium | Each person documents their layer thoroughly |
| Last-minute supervisor questions | High | Prepare FAQ doc with technical answers |

---

## 🌟 STRETCH GOALS (if you finish early)

These will impress the supervisor:
1. **Multi-language bot** — bot understands "Mein ne 500 ki chai pi" (Roman Urdu)
2. **Push notifications** — daily spending summary at 9pm
3. **Expense splitting** — "Split this with @sara" creates a shared expense
4. **OCR fallback** — if Claude vision fails, use Tesseract.js for basic OCR
5. **Recurring expenses** — auto-detect Netflix, gym, etc.
6. **Goal tracking** — "Save Rs 50,000 by July" with progress bar
7. **Dark/light mode toggle** — accessibility
8. **PDF report export** — monthly statement
9. **Geo-tagging** — automatically detect location of expense (mall, restaurant)

---

*This roadmap is your contract with each other. Pin it. Reference it weekly. Update it when reality changes.*

**Good luck, team. Build something you're proud of. 🚀**
