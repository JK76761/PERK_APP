import { useEffect, useMemo, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import {
  brandLogos,
  type BrandLogoConfig,
  type BrandLogoKey,
} from '@/constants/brandLogos';
import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';
import { env } from '@/lib/env';

const variantSizes = {
  compact: 32,
  card: 48,
  detail: 72,
} as const;

type BrandLogoProps = {
  company: string;
  logoKey?: BrandLogoKey;
  logoDomain?: string;
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

function getBrandLogoConfig(logoKey?: BrandLogoKey) {
  if (!logoKey) {
    return undefined;
  }

  if (logoKey in brandLogos) {
    return brandLogos[logoKey as keyof typeof brandLogos];
  }

  return undefined;
}

function normalizeLogoDomain(logoDomain?: string) {
  if (!logoDomain) {
    return null;
  }

  const sanitized = logoDomain
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .split('/')[0];

  return sanitized && sanitized.includes('.') ? sanitized : null;
}

function getLogoDevUrl(logoDomain?: string) {
  const normalizedDomain = normalizeLogoDomain(logoDomain);
  const logoDevToken = env.logoDevToken;

  if (!normalizedDomain || !logoDevToken) {
    return null;
  }

  return `https://img.logo.dev/${normalizedDomain}?token=${encodeURIComponent(logoDevToken)}`;
}

// Render a remote Logo.dev image when a provider domain exists.
// If the image is missing, the token is absent, or loading fails,
// we fall back to the existing initials-based mark.
export function BrandLogo({
  company,
  logoKey,
  logoDomain,
  size,
  variant = 'card',
}: BrandLogoProps) {
  const resolvedSize = size ?? variantSizes[variant];
  const config = getBrandLogoConfig(logoKey) ?? getFallbackConfig(company);
  const logoUrl = useMemo(() => getLogoDevUrl(logoDomain), [logoDomain]);
  const [hasImageError, setHasImageError] = useState(false);
  const fontSize =
    variant === 'detail'
      ? resolvedSize * 0.3
      : variant === 'compact'
        ? resolvedSize * 0.31
        : resolvedSize * 0.28;
  const containerRadius = variant === 'detail' ? radius.lg : radius.md;
  const contentRadius = variant === 'detail' ? radius.md : radius.sm;
  const showRemoteLogo = Boolean(logoUrl) && !hasImageError;

  useEffect(() => {
    setHasImageError(false);
  }, [logoUrl]);

  return (
    <View
      style={[
        styles.logo,
        {
          width: resolvedSize,
          height: resolvedSize,
          borderRadius: containerRadius,
        },
      ]}>
      {showRemoteLogo ? (
        <Image
          source={{ uri: logoUrl ?? undefined }}
          resizeMode="contain"
          style={[styles.logoImage, { borderRadius: contentRadius }]}
          onError={() => setHasImageError(true)}
        />
      ) : (
        <View
          style={[
            styles.fallbackFill,
            {
              borderRadius: contentRadius,
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: 'rgba(17, 17, 17, 0.05)',
    overflow: 'hidden',
    ...shadows.subtle,
  },
  logoImage: {
    width: '74%',
    height: '74%',
  },
  fallbackFill: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    fontWeight: fontWeights.bold,
    letterSpacing: -0.4,
  },
});
