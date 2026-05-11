import { StyleSheet, Text, View } from 'react-native';

import {
  brandLogos,
  type BrandLogoConfig,
  type BrandLogoKey,
} from '@/constants/brandLogos';
import { radius } from '@/constants/radius';
import { fontWeights } from '@/constants/typography';

const variantSizes = {
  compact: 32,
  card: 48,
  detail: 72,
} as const;

type BrandLogoProps = {
  company: string;
  logoKey?: BrandLogoKey;
  size?: number;
  variant?: 'card' | 'detail' | 'compact';
};

function toInitials(company: string) {
  const words = company
    .replace(/[^a-zA-Z0-9 ]/g, ' ')
    .split(' ')
    .filter(Boolean);

  if (words.length === 0) {
    return '?';
  }

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return `${words[0][0] ?? ''}${words[1][0] ?? ''}`.toUpperCase();
}

function getFallbackConfig(company: string): BrandLogoConfig {
  return {
    initials: toInitials(company),
    brandColor: '#111111',
    backgroundColor: '#F4F4F4',
  };
}

// Safe local brand mark using initials and brand colors instead of remote logos.
export function BrandLogo({
  company,
  logoKey,
  size,
  variant = 'card',
}: BrandLogoProps) {
  const resolvedSize = size ?? variantSizes[variant];
  const config = (logoKey ? brandLogos[logoKey] : undefined) ?? getFallbackConfig(company);
  const fontSize =
    variant === 'detail'
      ? resolvedSize * 0.3
      : variant === 'compact'
        ? resolvedSize * 0.31
        : resolvedSize * 0.28;

  return (
    <View
      style={[
        styles.logo,
        {
          width: resolvedSize,
          height: resolvedSize,
          borderRadius: variant === 'detail' ? radius.lg : radius.md,
          backgroundColor: config.backgroundColor,
        },
      ]}>
      <Text
        style={[
          styles.initials,
          {
            color: config.brandColor,
            fontSize,
            lineHeight: fontSize + 1,
          },
        ]}>
        {config.initials}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    fontWeight: fontWeights.bold,
    letterSpacing: -0.4,
  },
});
