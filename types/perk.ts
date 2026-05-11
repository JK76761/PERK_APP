import type { BrandLogoKey } from '@/constants/brandLogos';
import type { CategoryId } from '@/data/categories';

export type BadgeTone = 'green' | 'orange' | 'purple' | 'blue' | 'yellow' | 'red';
export type PerkCategory = CategoryId;
export type PerkLogoType =
  | 'bank'
  | 'banking'
  | 'code'
  | 'design'
  | 'github'
  | 'mobile'
  | 'shopping'
  | 'spotify'
  | 'student'
  | 'subscription'
  | 'tech'
  | 'travel';

export type Perk = {
  id: string;
  company: string;
  title: string;
  subtitle: string;
  category: PerkCategory;
  badgeText?: string;
  badgeTone?: BadgeTone;
  expiryText?: string;
  savingsValue?: string;
  logoType?: PerkLogoType;
  logoKey?: BrandLogoKey;
  description: string;
  howToClaim: string[];
  terms: string[];
  externalUrl: string;
  sourceUrl: string;
  verifiedAt: string;
  expiresAt?: string;
  isVerified: boolean;
  region: string;
  studentOnly: boolean;
  provider: string;
  isFeatured?: boolean;
  isTrending?: boolean;
};
