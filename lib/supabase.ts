import { createClient, type SupabaseClient } from '@supabase/supabase-js';

import { env, hasEnvSupabaseConfig } from '@/lib/env';

export const hasSupabaseConfig = hasEnvSupabaseConfig;

export const supabase: SupabaseClient | null = hasSupabaseConfig
  ? createClient(env.supabaseUrl, env.supabasePublicKey)
  : null;
