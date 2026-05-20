import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import type { CategoryId } from '@/data/categories';

export type AudiencePreference = 'student' | 'early-career';
export type DiscoveryRegionPreference = 'australia' | 'global';

export type AppPreferences = {
  hasCompletedOnboarding: boolean;
  audience: AudiencePreference;
  discoveryRegion: DiscoveryRegionPreference;
  interests: CategoryId[];
  notificationsEnabled: boolean;
  notificationCategories: CategoryId[];
};

type AppPreferencesContextValue = {
  preferences: AppPreferences;
  hasHydrated: boolean;
  setAudience: (audience: AudiencePreference) => void;
  setDiscoveryRegion: (region: DiscoveryRegionPreference) => void;
  toggleInterest: (interest: CategoryId) => void;
  setNotificationsEnabled: (enabled: boolean) => void;
  toggleNotificationCategory: (category: CategoryId) => void;
  completeOnboarding: () => void;
  resetPreferences: () => void;
};

const APP_PREFERENCES_STORAGE_KEY = 'perk_app_preferences';
const DEFAULT_INTERESTS: CategoryId[] = ['banking', 'food', 'tech'];

const defaultPreferences: AppPreferences = {
  hasCompletedOnboarding: false,
  audience: 'student',
  discoveryRegion: 'australia',
  interests: DEFAULT_INTERESTS,
  notificationsEnabled: true,
  notificationCategories: ['banking', 'food', 'research-rewards'],
};

const AppPreferencesContext = createContext<AppPreferencesContextValue | null>(null);

function isCategoryId(value: string): value is CategoryId {
  return [
    'banking',
    'food',
    'student-deals',
    'tech',
    'ai-tools',
    'research-rewards',
    'shopping',
    'travel',
    'subscriptions',
  ].includes(value);
}

function parseStoredPreferences(value: string | null): AppPreferences {
  if (!value) {
    return defaultPreferences;
  }

  try {
    const parsed: unknown = JSON.parse(value);

    if (!parsed || typeof parsed !== 'object') {
      return defaultPreferences;
    }

    const candidate = parsed as Partial<AppPreferences>;
    const interests = Array.isArray(candidate.interests)
      ? candidate.interests.filter(
          (interest): interest is CategoryId =>
            typeof interest === 'string' && isCategoryId(interest)
        )
      : DEFAULT_INTERESTS;
    const notificationCategories = Array.isArray(candidate.notificationCategories)
      ? candidate.notificationCategories.filter(
          (category): category is CategoryId =>
            typeof category === 'string' && isCategoryId(category)
        )
      : defaultPreferences.notificationCategories;

    return {
      hasCompletedOnboarding: candidate.hasCompletedOnboarding === true,
      audience: candidate.audience === 'early-career' ? 'early-career' : 'student',
      discoveryRegion: candidate.discoveryRegion === 'global' ? 'global' : 'australia',
      interests: interests.length > 0 ? interests : DEFAULT_INTERESTS,
      notificationsEnabled:
        candidate.notificationsEnabled === false
          ? false
          : notificationCategories.length > 0,
      notificationCategories:
        notificationCategories.length > 0
          ? notificationCategories
          : defaultPreferences.notificationCategories,
    };
  } catch {
    return defaultPreferences;
  }
}

export function AppPreferencesProvider({ children }: PropsWithChildren) {
  const [preferences, setPreferences] = useState<AppPreferences>(defaultPreferences);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    let active = true;

    async function hydratePreferences() {
      const storedValue = await AsyncStorage.getItem(APP_PREFERENCES_STORAGE_KEY);

      if (!active) {
        return;
      }

      setPreferences(parseStoredPreferences(storedValue));
      setHasHydrated(true);
    }

    void hydratePreferences();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    void AsyncStorage.setItem(APP_PREFERENCES_STORAGE_KEY, JSON.stringify(preferences));
  }, [hasHydrated, preferences]);

  const value = useMemo<AppPreferencesContextValue>(
    () => ({
      preferences,
      hasHydrated,
      setAudience: (audience) => {
        setPreferences((current) => ({ ...current, audience }));
      },
      setDiscoveryRegion: (discoveryRegion) => {
        setPreferences((current) => ({ ...current, discoveryRegion }));
      },
      toggleInterest: (interest) => {
        setPreferences((current) => {
          const hasInterest = current.interests.includes(interest);
          const nextInterests = hasInterest
            ? current.interests.filter((item) => item !== interest)
            : [...current.interests, interest];

          return {
            ...current,
            interests: nextInterests.length > 0 ? nextInterests : [interest],
          };
        });
      },
      setNotificationsEnabled: (notificationsEnabled) => {
        setPreferences((current) => ({
          ...current,
          notificationsEnabled,
          notificationCategories:
            notificationsEnabled && current.notificationCategories.length === 0
              ? defaultPreferences.notificationCategories
              : current.notificationCategories,
        }));
      },
      toggleNotificationCategory: (category) => {
        setPreferences((current) => {
          const hasCategory = current.notificationCategories.includes(category);
          const nextCategories = hasCategory
            ? current.notificationCategories.filter((item) => item !== category)
            : [...current.notificationCategories, category];

          return {
            ...current,
            notificationsEnabled: nextCategories.length > 0,
            notificationCategories: nextCategories,
          };
        });
      },
      completeOnboarding: () => {
        setPreferences((current) => ({ ...current, hasCompletedOnboarding: true }));
      },
      resetPreferences: () => {
        setPreferences(defaultPreferences);
      },
    }),
    [hasHydrated, preferences]
  );

  return (
    <AppPreferencesContext.Provider value={value}>{children}</AppPreferencesContext.Provider>
  );
}

export function useAppPreferences() {
  const context = useContext(AppPreferencesContext);

  if (!context) {
    throw new Error('useAppPreferences must be used inside AppPreferencesProvider');
  }

  return context;
}
