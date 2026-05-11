import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type SavedPerksContextValue = {
  savedPerkIds: string[];
  isSaved: (id: string) => boolean;
  toggleSaved: (id: string) => void;
};

const SavedPerksContext = createContext<SavedPerksContextValue | null>(null);
const SAVED_PERKS_STORAGE_KEY = 'perk_saved_ids';

function parseSavedPerkIds(value: string | null) {
  if (!value) {
    return [];
  }

  try {
    const parsedValue: unknown = JSON.parse(value);

    if (Array.isArray(parsedValue) && parsedValue.every((item) => typeof item === 'string')) {
      return parsedValue;
    }

    return [];
  } catch {
    return [];
  }
}

// Lightweight local saved state used across the app.
export function SavedPerksProvider({ children }: PropsWithChildren) {
  const [savedPerkIds, setSavedPerkIds] = useState<string[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    let active = true;

    // Load saved ids once when the provider mounts.
    async function loadSavedPerks() {
      const storedValue = await AsyncStorage.getItem(SAVED_PERKS_STORAGE_KEY);

      if (!active) {
        return;
      }

      setSavedPerkIds(parseSavedPerkIds(storedValue));
      setHasLoaded(true);
    }

    void loadSavedPerks();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!hasLoaded) {
      return;
    }

    // Persist changes only after the first load has finished.
    void AsyncStorage.setItem(SAVED_PERKS_STORAGE_KEY, JSON.stringify(savedPerkIds));
  }, [hasLoaded, savedPerkIds]);

  const value = useMemo<SavedPerksContextValue>(
    () => ({
      savedPerkIds,
      isSaved: (id: string) => savedPerkIds.includes(id),
      toggleSaved: (id: string) => {
        setSavedPerkIds((currentIds) =>
          currentIds.includes(id)
            ? currentIds.filter((currentId) => currentId !== id)
            : [...currentIds, id]
        );
      },
    }),
    [savedPerkIds]
  );

  if (!hasLoaded) {
    return null;
  }

  return <SavedPerksContext.Provider value={value}>{children}</SavedPerksContext.Provider>;
}

export function useSavedPerks() {
  const context = useContext(SavedPerksContext);

  if (!context) {
    throw new Error('useSavedPerks must be used inside SavedPerksProvider');
  }

  return context;
}
