const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL?.trim() ?? '';
const supabasePublicKey =
  process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim() ??
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY?.trim() ??
  '';
const logoDevToken = process.env.EXPO_PUBLIC_LOGO_DEV_TOKEN?.trim() ?? '';

// Public Expo env vars are optional during local fallback development.
// Support both the modern publishable key and the legacy anon key name.
export const env = {
  supabaseUrl,
  supabasePublicKey,
  logoDevToken,
};

export const hasEnvSupabaseConfig = Boolean(supabaseUrl && supabasePublicKey);
