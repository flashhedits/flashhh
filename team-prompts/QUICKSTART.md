# ⚡ SPENDLY — ONE-PAGE QUICKSTART
## For your Zoom call with Ali, Salman & Talha — RIGHT NOW

---

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                   │
│   STEP 1 — DISTRIBUTE PROMPTS (5 minutes)                        │
│                                                                   │
│   You (PM) send each person their starter prompt:                 │
│                                                                   │
│   📂 team-prompts/                                                │
│   ├── PM_PLAYBOOK.md         ← You read this                      │
│   ├── PM_TEMPLATES.md        ← Copy/paste assets                  │
│   ├── ALI_FRONTEND_PROMPT.md ← Send to Ali                        │
│   ├── SALMAN_BACKEND_PROMPT.md ← Send to Salman                   │
│   └── TALHA_DATABASE_PROMPT.md ← Send to Talha                    │
│                                                                   │
│   Each person opens claude.ai (or ChatGPT) in a NEW chat,         │
│   pastes their entire prompt as the first message.                │
│   Their AI now becomes their personal pair-programmer.            │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

---

## 🎬 THE ZOOM CALL — START NOW

**You say (15 min kickoff):**

> "Team — we're shipping Spendly today. Here's how it works:
>
> Each of you will work with an AI in parallel.
> I just messaged you a starter prompt — copy it ALL, paste it into Claude.ai.
> Your AI is now your personal coach. It will guide you step-by-step.
>
> We sync every 90 minutes.
> If you're stuck for 15 min, yell in the chat.
> No silent struggling.
>
> Goal: live, working app by end of day.
>
> Ali — you build the frontend. UI, signup, login, polish.
> Salman — you build the AI brain. Claude API, WhatsApp bot.
> Talha — you build the foundation. Database, deployment, security.
>
> Go open your prompts now. I'll be here."

---

## 📊 TIMELINE AT A GLANCE

```
TIME    │ ALI                 │ SALMAN              │ TALHA
────────┼────────────────────┼────────────────────┼──────────────────
0:00    │ Start prompt       │ Start prompt       │ Start prompt
0:15    │ GitHub setup       │ Anthropic key      │ Supabase signup
0:45    │ Run app locally    │ Twilio setup       │ Run schema.sql
1:30    │ ━━ SYNC #1 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1:45    │ Polish UI          │ Test bot accuracy  │ Set up Railway
3:00    │ Add features       │ Deploy to Railway  │ Configure Netlify
3:30    │ ━━ SYNC #2 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3:30    │ ━━━━━━━ ALL TOGETHER: INTEGRATION (1 hour) ━━━━━━━━━━━━━━
4:30    │ Live URL deployed → All 3 test on phones
4:30    │ ━━ SYNC #3 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4:30    │ Final polish       │ Edge cases         │ Diagrams + docs
6:30    │ ━━ DEMO PREP ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7:00    │ Record backup video, polish slides, SUBMIT
```

---

## 🎯 YOUR (PM) JOB IN 7 RULES

1. **Don't code.** You're the conductor, not a musician.
2. **Watch the clock.** Call sync at exactly the right minute.
3. **Listen for "blocked".** Jump in immediately.
4. **Test as a user.** Be the QA every 30 min.
5. **Update the LMS.** Use the templates.
6. **Stay positive.** Vibes affect velocity.
7. **Ship something.** Done > perfect.

---

## 🚨 THE THREE INTEGRATION KEYS (CRITICAL)

When the time comes to merge everyone's work, these are the ONLY 3 things that need to flow:

```
TALHA produces ─────► SUPABASE_URL + ANON KEY ─────► ALI uses in HTML
                ─────► SUPABASE_URL + SERVICE KEY ─────► SALMAN uses in Railway

SALMAN produces ─────► RAILWAY URL ─────► ALI uses as BACKEND_URL

ALI produces ─────► NETLIFY URL ─────► SALMAN updates CORS to allow it
```

That's it. Three handoffs. One channel (Zoom chat). Done.

---

## 🆘 WHEN THINGS GO WRONG

**Ali's app shows white screen** → Check browser console (F12). Paste error in his Claude. Fix.

**Salman's API returns 500** → Check Railway logs. Likely env var missing.

**Talha's RLS rejects writes** → Check policies. User probably not authenticated.

**WhatsApp bot doesn't reply** → 1) Did Salman join the sandbox? 2) Did the user join sandbox? 3) Is webhook URL exactly correct?

**Frontend can't reach backend** → CORS issue. Salman adds Netlify URL to CORS list.

---

## ✅ BEFORE YOU END THE CALL TONIGHT

- [ ] Live URL exists and works on a phone
- [ ] At least 2 different team members can sign up & use it
- [ ] WhatsApp bot logs at least 1 expense end-to-end
- [ ] GitHub repo has commits from ALL 3 people (very important!)
- [ ] Backup demo video recorded
- [ ] Tomorrow's plan agreed

If 4 out of 6 are ✅, you're winning. Sleep well.

---

## 🎬 GO. NOW.

Send the prompts in WhatsApp/Slack:
1. "@Ali — open this and paste in claude.ai: [link to ALI_FRONTEND_PROMPT.md]"
2. "@Salman — open this and paste in claude.ai: [link to SALMAN_BACKEND_PROMPT.md]"
3. "@Talha — open this and paste in claude.ai: [link to TALHA_DATABASE_PROMPT.md]"

Then start your Zoom kickoff with the script above.

**Set a 90-minute timer. GO.** 🚀
