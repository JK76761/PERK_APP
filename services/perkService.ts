import { perks as localPerks } from '@/data/perks';
import { hasSupabaseConfig, supabase } from '@/lib/supabase';
import { mapPerkRowToPerk, type PerkRow } from '@/services/perkMapper';
import type { Perk } from '@/types/perk';

export type PerkSource = 'supabase' | 'local';

export type FetchPerksResult = {
  perks: Perk[];
  source: PerkSource;
  error: Error | null;
};

function warnInDev(message: string, error?: unknown) {
  if (__DEV__) {
    console.warn(message, error);
  }
}

export async function fetchPerks(): Promise<FetchPerksResult> {
  if (!hasSupabaseConfig || !supabase) {
    return {
      perks: localPerks,
      source: 'local',
      error: null,
    };
  }

  try {
    const { data, error } = await supabase
      .from('perks')
      .select(
        'id, company, title, subtitle, category, badge_text, badge_tone, expiry_text, savings_value, logo_type, logo_key, description, how_to_claim, terms, external_url, source_url, verified_at, expires_at, is_verified, region, student_only, provider, is_featured, is_trending'
      )
      .eq('is_verified', true)
      .order('expires_at', { ascending: true, nullsFirst: false });

    if (error) {
      throw error;
    }

    return {
      perks: (data ?? []).map((row) => mapPerkRowToPerk(row as PerkRow)),
      source: 'supabase',
      error: null,
    };
  } catch (error) {
    warnInDev('Falling back to local perks because Supabase fetch failed.', error);

    return {
      perks: localPerks,
      source: 'local',
      error: error instanceof Error ? error : new Error('Failed to fetch perks from Supabase.'),
    };
  }
}
