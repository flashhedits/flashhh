/**
 * SPENDLY BACKEND SERVER (with Auth)
 * ─────────────────────────────────────
 * Stack: Node.js + Express + Twilio + Claude API + Supabase Auth
 * Deploy to: Railway.app (free tier)
 *
 * Public Routes:
 *  POST /webhook              ← Twilio WhatsApp messages land here
 *  POST /api/classify         ← AI categorisation (no auth needed)
 *  POST /api/scan             ← Receipt scanner (no auth needed)
 *  POST /api/bot              ← Bot chat parser (no auth needed)
 *  GET  /health               ← Health check
 *
 * Protected Routes (require Bearer token from Supabase):
 *  GET  /api/expenses         ← Get current user's expenses
 *  POST /api/expenses         ← Add expense for current user
 *  POST /api/link-whatsapp    ← Link WhatsApp number to account
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const twilio = require('twilio');
const Anthropic = require('@anthropic-ai/sdk');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

// ─── CLIENTS ──────────────────────────────────────────────
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// ─── MIDDLEWARE ───────────────────────────────────────────
app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));

// Auth middleware — verifies Supabase JWT
async function requireAuth(req, res, next) {
  const auth = req.headers.authorization || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    const { data, error } = await supabase.auth.getUser(token);
    if (error || !data.user) throw new Error('Invalid token');
    req.user = data.user;
    next();
  } catch (e) {
    res.status(401).json({ error: 'Unauthorized' });
  }
}

// ─── BOT SYSTEM PROMPT ───────────────────────────────────
const BOT_SYSTEM = `You are Spendly, a smart expense tracking assistant for Pakistani users. Users type expenses casually in English or Roman Urdu. Extract expense details and return clean structured data.

CRITICAL RULES:
1. "description" must be a CLEAN human-readable merchant or item name. NEVER include numbers. Strip all digits. Capitalize properly.
2. "amount" is a plain PKR number only.
3. "category" rules:
   - Food: restaurants, cafes, KFC, pizza, biryani, chai, eating out
   - Transport: Careem, Uber, petrol, fuel, bus, metro
   - Shopping: clothes, mall, groceries, cooking oil, makki oil, ghee, atta
   - Utilities: electricity, gas, water, internet, PTCL
   - Health: pharmacy, doctor, medicine
   - Entertainment: Netflix, cinema
   - Education: university fee, school, books
   - Savings: saving, investment, deposit
   Household items (makki oil, ghee) = Shopping NOT Food.
4. "reply" warm 1-sentence WhatsApp-style with 1 emoji.
5. No amount or just greeting → understood: false.

Respond ONLY with valid JSON:
{"understood":true,"description":"Clean Name","amount":1234,"category":"Food","reply":"Friendly reply"}`;

// ─── HELPERS ─────────────────────────────────────────────
async function parseExpenseWithClaude(message) {
  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 200,
    system: BOT_SYSTEM,
    messages: [{ role: 'user', content: message }],
  });
  const raw = response.content[0].text.replace(/```json|```/g, '').trim();
  return JSON.parse(raw);
}

function todayDate() { return new Date().toISOString().split('T')[0]; }

async function findUserByPhone(phone) {
  const cleanPhone = phone.replace('whatsapp:', '');
  const { data } = await supabase
    .from('profiles')
    .select('id, name')
    .eq('whatsapp_number', cleanPhone)
    .single();
  return data;
}

// ─── PUBLIC ROUTES ───────────────────────────────────────

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'Spendly API', time: new Date().toISOString() });
});

app.post('/webhook', async (req, res) => {
  const twiml = new twilio.twiml.MessagingResponse();
  try {
    const incomingMsg = (req.body.Body || '').trim();
    const fromNumber = req.body.From || '';
    console.log(`📱 WhatsApp from ${fromNumber}: "${incomingMsg}"`);

    if (!incomingMsg) {
      twiml.message('Hey! 👋 Send an expense like "KFC 850" and I\'ll log it.');
      return res.type('text/xml').send(twiml.toString());
    }

    const user = await findUserByPhone(fromNumber);
    if (!user) {
      twiml.message(
        '👋 Welcome to Spendly! Your number isn\'t linked to an account yet.\n\n' +
        'Open the Spendly app → tap your avatar → Link WhatsApp, then enter ' +
        fromNumber.replace('whatsapp:', '') + ' to start logging expenses here.'
      );
      return res.type('text/xml').send(twiml.toString());
    }

    const parsed = await parseExpenseWithClaude(incomingMsg);

    if (parsed.understood && parsed.amount > 0) {
      const { error } = await supabase.from('expenses').insert({
        user_id: user.id,
        description: parsed.description,
        category: parsed.category,
        amount: parsed.amount,
        date: todayDate(),
        source: 'whatsapp',
        raw_message: incomingMsg,
      });
      if (error) throw error;
      twiml.message(parsed.reply);
      console.log(`✅ Saved for ${user.name}: ${parsed.description} Rs${parsed.amount}`);
    } else {
      twiml.message(parsed.reply || "Try: 'KFC 850' or 'petrol 3500' 🙏");
    }
  } catch (err) {
    console.error('Webhook error:', err);
    twiml.message('Sorry, something went wrong 😞 Try again.');
  }
  res.type('text/xml').send(twiml.toString());
});

app.post('/api/bot', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'message required' });
    const parsed = await parseExpenseWithClaude(message);
    res.json({ result: JSON.stringify(parsed) });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/classify', async (req, res) => {
  try {
    const { prompt } = req.body;
    const r = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514', max_tokens: 100,
      messages: [{ role: 'user', content: prompt }],
    });
    res.json({ result: r.content[0].text.replace(/```json|```/g, '').trim() });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/scan', async (req, res) => {
  try {
    const { base64, mediaType, prompt } = req.body;
    const r = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514', max_tokens: 400,
      messages: [{ role: 'user', content: [
        { type: 'image', source: { type: 'base64', media_type: mediaType, data: base64 } },
        { type: 'text', text: prompt }
      ]}],
    });
    res.json({ result: r.content[0].text.replace(/```json|```/g, '').trim() });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ─── PROTECTED ROUTES ────────────────────────────────────

app.get('/api/expenses', requireAuth, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('expenses').select('*')
      .eq('user_id', req.user.id)
      .order('created_at', { ascending: false });
    if (error) throw error;
    res.json({ expenses: data });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/expenses', requireAuth, async (req, res) => {
  try {
    const { description, category, amount, date, source } = req.body;
    if (!description || !amount) return res.status(400).json({ error: 'missing fields' });
    const { data, error } = await supabase.from('expenses').insert({
      user_id: req.user.id, description, category: category || 'Food',
      amount, date: date || todayDate(), source: source || 'app',
    }).select().single();
    if (error) throw error;
    res.json({ expense: data });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/link-whatsapp', requireAuth, async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) return res.status(400).json({ error: 'phone required' });
    const cleanPhone = phone.replace(/\s/g, '');
    const { error } = await supabase.from('profiles')
      .update({ whatsapp_number: cleanPhone })
      .eq('id', req.user.id);
    if (error) throw error;
    res.json({ success: true, phone: cleanPhone });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.listen(PORT, () => {
  console.log(`🚀 Spendly API running on port ${PORT}`);
});
