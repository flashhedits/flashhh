# 🎯 SPENDLY — PARALLEL EXECUTION PLAYBOOK
## For You (Project Manager) on the Zoom call

---

## 🧑‍🤝‍🧑 THE TEAM

| Role | Person | Domain |
|------|--------|--------|
| 🎨 **Frontend** | **Ali Rise** | UI, app screens, deployment to Netlify |
| 🤖 **AI & Integration** | **Salman** | Backend server, Claude API, WhatsApp |
| 🗄️ **Backend & Database** | **Talha Aesthetic** | Supabase, deployment infra, security |
| 👔 **Project Manager** | **You** | Coordinate, integrate, unblock |

---

## ⚡ THE BIG IDEA: TRUE PARALLEL EXECUTION

The trick is **none of the three need to wait for the others to start**. Here's why:

- Ali's frontend already works in demo mode — he doesn't need the backend to start improving UI
- Salman can build/test the backend with mock data — doesn't need real users
- Talha can set up Supabase + the deployment pipeline — independent of others' code

**Everyone starts at the same minute. They merge at integration checkpoints.**

---

## 📅 5-PHASE EXECUTION PLAN

### **PHASE 0 — Kick-off (15 min, everyone together on Zoom)**

**You (PM) lead this.** Share the screen, walk through:

1. Pull up the project zip — show the file structure
2. Show the 3 architecture sections — who owns what
3. Read the ROADMAP.md aloud (the team responsibilities part)
4. Each person opens their personal LLM (Claude / ChatGPT / Cursor)
5. Each person pastes **their kickoff prompt** (see `team-prompts/` folder)
6. Each person confirms: "I understand my role. Going."
7. **Set a hard checkpoint time:** "We meet back in 90 minutes for Phase 1 sync"

---

### **PHASE 1 — Independent Setup (90 min, parallel)**

Everyone works alone. The PM (you) is on standby for blockers.

| Time | Ali (Frontend) | Salman (AI/Backend) | Talha (Database/Deploy) |
|------|---------------|--------------------|--------------------------|
| 0–15 min | Set up GitHub repo, clone the project | Sign up Anthropic + add $5 credit | Sign up Supabase, create project |
| 15–30 min | Open `frontend/index.html` in browser, test it | Sign up Twilio, get Account SID + Auth Token | Run `database/schema.sql` in SQL Editor |
| 30–60 min | Familiarise with code, make a small visual change to confirm setup | Set up local Node.js, run `server.js` locally | Sign up Railway, sign up Netlify |
| 60–90 min | Test signup/login flow in demo mode | Test Claude API call with curl from terminal | Set up GitHub repo, push initial code |

**Checkpoint at 90 min:** Quick Zoom standup. Each person says: "I'm done with Phase 1" or "I'm blocked by X."

---

### **PHASE 2 — Core Build (2 hours, parallel)**

| Time | Ali | Salman | Talha |
|------|-----|--------|-------|
| 0–60 min | Polish onboarding, add profile edit screen | Improve bot prompt, test 20 expense cases | Deploy `server.js` to Railway with env vars |
| 60–120 min | Add settings screen, test all flows | Build `/api/link-whatsapp` route | Configure Twilio webhook to Railway URL |

**Checkpoint at 2 hours:** Sync. Talha shares the **Railway URL**. Salman confirms WhatsApp flows are working. Ali notes the URL down.

---

### **PHASE 3 — INTEGRATION (1 hour, all together on Zoom)**

This is the only phase where parallelism breaks down. **Everyone screen-shares one at a time.**

**Step 3.1 (15 min): Talha shares his screen**
- Shows Supabase URL + ANON key + SERVICE key
- Shares URLs in Zoom chat to Ali and Salman
- Ali updates `SUPABASE_URL` and `SUPABASE_ANON_KEY` in `index.html`
- Salman updates `.env` on Railway with `SUPABASE_SERVICE_KEY`

**Step 3.2 (15 min): Salman shares his screen**
- Shows Railway URL working (`/health` returns OK)
- Ali updates `BACKEND_URL` in `index.html` to Railway URL
- Tests: bot tab in Ali's local file → calls Railway → returns parsed expense ✓

**Step 3.3 (15 min): Ali shares his screen**
- Deploys `index.html` to Netlify (drag-drop)
- Gets the Netlify URL
- Shares URL in chat
- All 3 open it on their phones
- Each person signs up → bot test → expense logs

**Step 3.4 (15 min): WhatsApp end-to-end**
- Each person joins Twilio sandbox
- Each person links their phone in app settings
- Each person texts an expense → it appears in their account in real time

**Done. The app is live and working for 3 different users.**

---

### **PHASE 4 — Polish & Demo Prep (2 hours, parallel)**

| Time | Ali | Salman | Talha |
|------|-----|--------|-------|
| 0–60 min | Visual polish, animations, loading states | Test edge cases, improve bot accuracy | Architecture diagram, ER diagram |
| 60–120 min | Build "first-time user" walkthrough | Document API routes | Write deployment runbook |

---

### **PHASE 5 — Final Demo & Submission (1 hour)**

- 0–30 min: Full dry run with PM as fake supervisor
- 30–45 min: Record backup demo video (in case Wi-Fi fails)
- 45–60 min: Final submission — push to GitHub, Netlify URL, presentation

---

## ⏱️ TOTAL TIME: ~7 HOURS

This is doable in **one focused day** if you stay disciplined and use AI tools at every step.

---

## 🤖 AI TOOLS WE'RE USING (CRITICAL)

This is what makes 7 hours possible instead of 7 days:

| Tool | Used by | Purpose |
|------|---------|---------|
| **Claude.ai** | All 3 | Pair-programming, debugging, code review |
| **ChatGPT** | All 3 | Quick syntax help |
| **Cursor IDE** | Optional | AI-powered code editor (faster than VS Code) |
| **GitHub Copilot** | Optional | Inline code completion |
| **v0.dev** | Ali | If needs UI inspiration |
| **Supabase AI Assistant** | Talha | Built into Supabase, helps write SQL |
| **Railway Logs** | Salman | Live debugging |

---

## 📋 PM JOB DESCRIPTION (YOU)

While the team codes, your job is:

1. **Keep the Zoom open** — anyone can ask a quick question
2. **Track blockers** — if someone says "stuck on X", you help find help
3. **Watch the clock** — call out checkpoints precisely
4. **Coordinate the integration phase** — this is where most teams fail
5. **Test as you go** — be the user. Find bugs immediately.
6. **Manage the GitHub** — review pull requests, merge them
7. **Update the team's LMS** — paste progress updates
8. **Take screenshots** — for the final report

### Your daily message to LMS template:
```
Spendly FYP — Day [X] Update
✅ Completed today:
- [Ali] [done X]
- [Salman] [done X]
- [Talha] [done X]

🚧 Tomorrow:
- [Ali] [will do X]
- [Salman] [will do X]
- [Talha] [will do X]

🚨 Blockers: [None / list]
📍 Live URL: https://spendly-fyp.netlify.app
```

---

## 🆘 BLOCKER ESCALATION

If anyone is stuck for **more than 15 minutes**, they MUST:
1. Drop in the Zoom chat: "🚨 BLOCKED on [thing]"
2. Share screen
3. The other 2 + PM jump in to debug
4. AI tools (Claude/ChatGPT) consulted simultaneously

**Do NOT silently struggle alone. 15 minutes is the limit.**

---

## ✅ CHECKPOINT CHECKLIST (PM USES THIS)

### After Phase 1 (90 min mark):
- [ ] Ali: Frontend running locally, can sign up/login
- [ ] Salman: Can call Claude API from terminal, gets response
- [ ] Talha: Supabase project created, schema.sql ran, RLS enabled

### After Phase 2 (3.5 hours mark):
- [ ] Talha: Railway deployment shows `/health` OK at public URL
- [ ] Salman: Backend handles auth, parses expenses correctly
- [ ] Ali: All UI screens polished, ready to wire to backend

### After Phase 3 (4.5 hours mark):
- [ ] Live Netlify URL works on phone
- [ ] All 3 people sign up successfully
- [ ] Bot logs expenses correctly
- [ ] WhatsApp end-to-end works
- [ ] User A's data is invisible to User B (RLS proven)

### After Phase 4 (6.5 hours mark):
- [ ] Architecture diagram done
- [ ] ER diagram done
- [ ] All API routes documented
- [ ] No console errors anywhere

### After Phase 5 (7 hours mark):
- [ ] Demo video recorded
- [ ] Presentation slides done
- [ ] GitHub repo cleaned & public
- [ ] All team members have meaningful commits
- [ ] Submitted to LMS

---

## 🎯 THE ONE RULE

If at any moment in Phase 1, 2, or 4 a team member says:
> "I want to ask the others before doing X"

Tell them: **"Use AI first. Try for 10 minutes. THEN ask the team."**

This is how you keep parallel execution working. Otherwise everyone bottlenecks.

---

## 📂 NEXT: GIVE EACH PERSON THEIR PROMPT

Open the `team-prompts/` folder. There are 3 files:
- `ali-frontend-prompt.md` → paste this entire file into Ali's Claude
- `salman-backend-prompt.md` → paste into Salman's Claude
- `talha-database-prompt.md` → paste into Talha's Claude

These prompts are written so each person's AI knows their role, has the code context, and can guide them step by step without you having to explain anything.

---

*PM: You're not the bottleneck. You're the conductor. Stay calm. Trust the team. Trust the AI. Ship it.* 🚀
