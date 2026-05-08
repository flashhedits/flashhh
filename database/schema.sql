-- ════════════════════════════════════════════════════════════
--  SPENDLY DATABASE SCHEMA
--  Run this in Supabase SQL Editor (one query at a time)
-- ════════════════════════════════════════════════════════════

-- ─── 1. PROFILES TABLE ──────────────────────────────────────
-- Extends Supabase's built-in auth.users table with app data.
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT,
  avatar TEXT DEFAULT '😎',
  budget INTEGER DEFAULT 50000,
  income INTEGER DEFAULT 80000,
  whatsapp_number TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─── 2. EXPENSES TABLE ──────────────────────────────────────
CREATE TABLE IF NOT EXISTS expenses (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'Food',
  amount INTEGER NOT NULL CHECK (amount > 0),
  date DATE DEFAULT CURRENT_DATE,
  source TEXT DEFAULT 'app',           -- 'app' | 'whatsapp' | 'voice' | 'scan'
  emotion TEXT,                         -- 'Happy' | 'Stressed' etc.
  raw_message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_expenses_user_id ON expenses(user_id);
CREATE INDEX IF NOT EXISTS idx_expenses_date ON expenses(date DESC);

-- ─── 3. ROW LEVEL SECURITY ──────────────────────────────────
-- This is critical: each user can ONLY see/edit their own data.

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE expenses ENABLE ROW LEVEL SECURITY;

-- Profiles: users can only read/write their own row
DROP POLICY IF EXISTS "users read own profile" ON profiles;
CREATE POLICY "users read own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

DROP POLICY IF EXISTS "users insert own profile" ON profiles;
CREATE POLICY "users insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "users update own profile" ON profiles;
CREATE POLICY "users update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Expenses: users can only access their own expenses
DROP POLICY IF EXISTS "users read own expenses" ON expenses;
CREATE POLICY "users read own expenses" ON expenses
  FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "users insert own expenses" ON expenses;
CREATE POLICY "users insert own expenses" ON expenses
  FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "users delete own expenses" ON expenses;
CREATE POLICY "users delete own expenses" ON expenses
  FOR DELETE USING (auth.uid() = user_id);

-- ─── 4. AUTO-CREATE PROFILE ON SIGN-UP ──────────────────────
-- When a user signs up via Supabase Auth, automatically create their profile.
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ─── 5. DONE! Test with: ────────────────────────────────────
-- Sign up via the app → check profiles table → row should appear automatically.
