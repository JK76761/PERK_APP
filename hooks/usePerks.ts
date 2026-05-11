import { useCallback, useEffect, useState } from 'react';

import { perks as localPerks } from '@/data/perks';
import { hasSupabaseConfig } from '@/lib/supabase';
import { fetchPerks, type PerkSource } from '@/services/perkService';
import type { Perk } from '@/types/perk';

export function usePerks() {
  const [perks, setPerks] = useState<Perk[]>(localPerks);
  const [loading, setLoading] = useState(hasSupabaseConfig);
  const [error, setError] = useState<Error | null>(null);
  const [source, setSource] = useState<PerkSource>('local');

  const refetch = useCallback(async () => {
    setLoading(true);

    const result = await fetchPerks();

    if (__DEV__) {
      console.log(`[usePerks] Loaded ${result.perks.length} perks from ${result.source}.`);
    }

    setPerks(result.perks);
    setSource(result.source);
    setError(result.error);
    setLoading(false);
  }, []);

  useEffect(() => {
    void refetch();
  }, [refetch]);

  return {
    perks,
    loading,
    error,
    source,
    refetch,
  };
}
