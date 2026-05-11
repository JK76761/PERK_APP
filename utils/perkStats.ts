import type { CategoryId } from '@/data/categories';
import type { Perk } from '@/types/perk';

function startOfDay(date: Date) {
  const normalized = new Date(date);
  normalized.setHours(0, 0, 0, 0);
  return normalized;
}

function parseCashSavings(value?: string) {
  if (!value) {
    return null;
  }

  const trimmed = value.trim();

  // Only sum exact cash amounts like "$50" or "$1,250".
  // Vague values such as "Free", "Varies", "$2,000+ value", or monthly pricing are excluded.
  if (!/^\$\d{1,3}(?:,\d{3})*(?:\.\d{1,2})?$/.test(trimmed)) {
    return null;
  }

  return Number(trimmed.replaceAll(/[,$]/g, ''));
}

function isPerkActive(perk: Perk, referenceDate: Date) {
  if (!perk.isVerified) {
    return false;
  }

  if (!perk.expiresAt) {
    return true;
  }

  return startOfDay(new Date(perk.expiresAt)) >= startOfDay(referenceDate);
}

export function getVerifiedPerks(perks: Perk[]) {
  return perks.filter((perk) => perk.isVerified);
}

export function getActivePerks(perks: Perk[], referenceDate = new Date()) {
  return getVerifiedPerks(perks).filter((perk) => isPerkActive(perk, referenceDate));
}

export function getActivePerksCount(perks: Perk[], referenceDate = new Date()) {
  return getActivePerks(perks, referenceDate).length;
}

export function getVerifiedPerksCount(perks: Perk[]) {
  return getVerifiedPerks(perks).length;
}

export function getPerksByCategory(perks: Perk[], categoryId: CategoryId) {
  return getVerifiedPerks(perks).filter((perk) => perk.category === categoryId);
}

export function getExpiringSoonPerks(perks: Perk[], referenceDate = new Date()) {
  const today = startOfDay(referenceDate);
  const cutoff = new Date(today);
  cutoff.setDate(cutoff.getDate() + 14);

  return getActivePerks(perks, referenceDate)
    .filter((perk) => {
      if (!perk.expiresAt) {
        return false;
      }

      const expiryDate = startOfDay(new Date(perk.expiresAt));
      return expiryDate >= today && expiryDate <= cutoff;
    })
    .sort((left, right) => {
      const leftTime = new Date(left.expiresAt ?? '').getTime();
      const rightTime = new Date(right.expiresAt ?? '').getTime();
      return leftTime - rightTime;
    });
}

export function getCashValueTotal(perks: Perk[], referenceDate = new Date()) {
  return getActivePerks(perks, referenceDate).reduce((total, perk) => {
    const cashValue = parseCashSavings(perk.savingsValue);
    return cashValue === null ? total : total + cashValue;
  }, 0);
}

export function getPotentialSavingsLabel(perks: Perk[], referenceDate = new Date()) {
  const cashTotal = getCashValueTotal(perks, referenceDate);

  if (cashTotal <= 0) {
    return null;
  }

  return `$${cashTotal.toLocaleString()}`;
}

export function getHomeFeaturedPerks(perks: Perk[], referenceDate = new Date(), limit = 4) {
  const expiringSoon = getExpiringSoonPerks(perks, referenceDate);
  const activePerks = getActivePerks(perks, referenceDate);
  const featured = activePerks.filter((perk) => perk.isFeatured || perk.isTrending);
  const ordered = [...expiringSoon, ...featured, ...activePerks];
  const seenIds = new Set<string>();

  return ordered.filter((perk) => {
    if (seenIds.has(perk.id)) {
      return false;
    }

    seenIds.add(perk.id);
    return true;
  }).slice(0, limit);
}
