import type { BrandLogoKey } from '@/constants/brandLogos';
import type { CategoryId } from '@/data/categories';
import type { BadgeTone, Perk, PerkLogoType } from '@/types/perk';

export type PerkRow = {
  id: string;
  company: string;
  title: string;
  subtitle: string;
  category: string;
  badge_text: string | null;
  badge_tone: string | null;
  expiry_text: string | null;
  savings_value: string | null;
  logo_type: string | null;
  logo_key: string | null;
  description: string;
  how_to_claim: string[];
  terms: string[];
  external_url: string;
  source_url: string;
  verified_at: string;
  expires_at: string | null;
  is_verified: boolean;
  region: string;
  student_only: boolean;
  provider: string;
  is_featured: boolean;
  is_trending: boolean;
};

export function mapPerkRowToPerk(row: PerkRow): Perk {
  return {
    id: row.id,
    company: row.company,
    title: row.title,
    subtitle: row.subtitle,
    category: row.category as CategoryId,
    badgeText: row.badge_text ?? undefined,
    badgeTone: (row.badge_tone as BadgeTone | null) ?? undefined,
    expiryText: row.expiry_text ?? undefined,
    savingsValue: row.savings_value ?? undefined,
    logoType: (row.logo_type as PerkLogoType | null) ?? undefined,
    logoKey: (row.logo_key as BrandLogoKey | null) ?? undefined,
    description: row.description,
    howToClaim: row.how_to_claim,
    terms: row.terms,
    externalUrl: row.external_url,
    sourceUrl: row.source_url,
    verifiedAt: row.verified_at,
    expiresAt: row.expires_at ?? undefined,
    isVerified: row.is_verified,
    region: row.region,
    studentOnly: row.student_only,
    provider: row.provider,
    isFeatured: row.is_featured,
    isTrending: row.is_trending,
  };
}
