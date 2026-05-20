import type {
  AppPreferences,
  AudiencePreference,
  DiscoveryRegionPreference,
} from '@/state/AppPreferencesContext';
import type { Perk } from '@/types/perk';

export type ExploreSortKey = 'recommended' | 'newest' | 'ending-soon' | 'free-first';

export function isAustraliaFocused(perk: Perk) {
  const normalized = perk.region.toLowerCase();
  return normalized.includes('australia') || normalized.includes('queensland') || normalized.includes('victoria');
}

export function isFreePerk(perk: Perk) {
  return perk.savingsValue?.toLowerCase() === 'free';
}

export function isResearchRewardPerk(perk: Perk) {
  return perk.category === 'research-rewards';
}

function getAudienceScore(perk: Perk, audience: AudiencePreference) {
  if (audience === 'student') {
    return perk.studentOnly ? 3 : 1;
  }

  return perk.studentOnly ? 0 : 3;
}

function getRegionScore(perk: Perk, region: DiscoveryRegionPreference) {
  if (region === 'global') {
    return perk.region.toLowerCase() === 'global' ? 3 : 1;
  }

  return isAustraliaFocused(perk) ? 3 : perk.region.toLowerCase() === 'global' ? 1 : 0;
}

function getSavingsSignal(perk: Perk) {
  if (isResearchRewardPerk(perk)) {
    return 2;
  }

  if (isFreePerk(perk)) {
    return 3;
  }

  if (perk.savingsValue?.startsWith('$')) {
    return 2;
  }

  return 1;
}

export function getPreferenceScore(perk: Perk, preferences: AppPreferences) {
  const interestScore = preferences.interests.includes(perk.category) ? 5 : 0;
  const trendScore = perk.isTrending ? 3 : perk.isFeatured ? 2 : 0;

  return (
    interestScore +
    trendScore +
    getAudienceScore(perk, preferences.audience) +
    getRegionScore(perk, preferences.discoveryRegion) +
    getSavingsSignal(perk)
  );
}

function getExpiryTime(perk: Perk) {
  return perk.expiresAt ? new Date(perk.expiresAt).getTime() : Number.MAX_SAFE_INTEGER;
}

function getVerifiedTime(perk: Perk) {
  return new Date(perk.verifiedAt).getTime();
}

export function sortPerks(
  perks: Perk[],
  sortKey: ExploreSortKey,
  preferences: AppPreferences
) {
  const cloned = [...perks];

  return cloned.sort((left, right) => {
    if (sortKey === 'ending-soon') {
      return getExpiryTime(left) - getExpiryTime(right);
    }

    if (sortKey === 'newest') {
      return getVerifiedTime(right) - getVerifiedTime(left);
    }

    if (sortKey === 'free-first') {
      const freeDelta = Number(isFreePerk(right)) - Number(isFreePerk(left));
      if (freeDelta !== 0) {
        return freeDelta;
      }
    }

    const scoreDelta = getPreferenceScore(right, preferences) - getPreferenceScore(left, preferences);

    if (scoreDelta !== 0) {
      return scoreDelta;
    }

    return getVerifiedTime(right) - getVerifiedTime(left);
  });
}

export function getPerksForCategories(perks: Perk[], categories: Perk['category'][], limit = 3) {
  return perks.filter((perk) => categories.includes(perk.category)).slice(0, limit);
}

export function getFreeToolsPerks(perks: Perk[], limit = 3) {
  return perks
    .filter((perk) => (perk.category === 'tech' || perk.category === 'ai-tools') && isFreePerk(perk))
    .slice(0, limit);
}

export function getFoodSavingsPerks(perks: Perk[], limit = 3) {
  return perks.filter((perk) => perk.category === 'food').slice(0, limit);
}

export function getResearchPerks(perks: Perk[], limit = 3) {
  return perks.filter((perk) => perk.category === 'research-rewards').slice(0, limit);
}

export function getSimilarPerks(perks: Perk[], currentPerk: Perk, limit = 3) {
  const sameCategory = perks.filter(
    (perk) => perk.id !== currentPerk.id && perk.category === currentPerk.category
  );
  const sameAudience = perks.filter(
    (perk) =>
      perk.id !== currentPerk.id &&
      perk.category !== currentPerk.category &&
      perk.studentOnly === currentPerk.studentOnly
  );

  const ordered = [...sameCategory, ...sameAudience];
  const seenIds = new Set<string>();

  return ordered.filter((perk) => {
    if (seenIds.has(perk.id)) {
      return false;
    }

    seenIds.add(perk.id);
    return true;
  }).slice(0, limit);
}

export function getWhyUsefulLines(perk: Perk, audience: AudiencePreference) {
  const reasons = new Set<string>();

  if (perk.category === 'banking') {
    reasons.add('Useful when you are setting up everyday banking or reducing account friction.');
  }

  if (perk.category === 'food') {
    reasons.add('Helpful for repeat weekly savings, not just one-off promo code hunting.');
  }

  if (perk.category === 'research-rewards') {
    reasons.add('Good for earning extra cash online without making a purchase first.');
  }

  if (perk.category === 'tech' || perk.category === 'ai-tools') {
    reasons.add('Can reduce software spend while still giving you tools for study or early-career work.');
  }

  if (perk.studentOnly) {
    reasons.add('Worth checking while you still have student verification because eligibility can change after graduation.');
  } else if (audience === 'early-career') {
    reasons.add('Still relevant after graduation because it is not limited to student-only verification.');
  }

  if (isAustraliaFocused(perk)) {
    reasons.add('Especially practical if you are living in Australia and want locally usable savings.');
  }

  if (perk.savingsValue?.toLowerCase() === 'free') {
    reasons.add('Easy to try without locking yourself into extra monthly spend.');
  }

  return [...reasons].slice(0, 3);
}
