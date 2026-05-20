import { StyleSheet, Text, View } from 'react-native';

import { AnimatedScalePressable } from '@/components/AnimatedScalePressable';
import { BrandLogo } from '@/components/BrandLogo';
import { badgeToneColors, colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';
import type { BadgeTone, Perk } from '@/types/perk';

type ExploreFeatureCardProps = {
  perk: Perk;
  onPress?: () => void;
};

function getFeatureBadge(perk: Perk): { label: string; tone: BadgeTone } | null {
  if (perk.badgeText) {
    return { label: perk.badgeText, tone: perk.badgeTone ?? 'green' };
  }

  if (perk.savingsValue) {
    return { label: perk.savingsValue, tone: perk.badgeTone ?? 'green' };
  }

  return null;
}

export function ExploreFeatureCard({ perk, onPress }: ExploreFeatureCardProps) {
  const badge = getFeatureBadge(perk);

  return (
    <AnimatedScalePressable onPress={onPress} contentStyle={styles.card} scaleTo={0.985}>
      <View style={styles.topGlow} />
      <View style={styles.headerRow}>
        <BrandLogo
          company={perk.company}
          logoKey={perk.logoKey}
          logoDomain={perk.logoDomain}
          size={44}
          variant="card"
        />
        {badge ? (
          <View
            style={[
              styles.badge,
              { backgroundColor: badgeToneColors[badge.tone].background },
            ]}>
            <Text style={[styles.badgeText, { color: badgeToneColors[badge.tone].text }]}>
              {badge.label}
            </Text>
          </View>
        ) : null}
      </View>

      <Text style={styles.company}>{perk.company}</Text>
      <Text style={styles.title} numberOfLines={2}>
        {perk.title}
      </Text>
      <Text style={styles.subtitle} numberOfLines={2}>
        {perk.subtitle}
      </Text>

      <View style={styles.footerRow}>
        <View style={styles.metaPill}>
          <Text style={styles.meta} numberOfLines={1}>
            {perk.studentOnly ? 'Student offer' : 'Verified utility'}
          </Text>
        </View>
        <Text style={styles.meta} numberOfLines={1}>
          Official source
        </Text>
      </View>
    </AnimatedScalePressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 244,
    minHeight: 176,
    borderRadius: radius.xl,
    backgroundColor: colors.card,
    padding: spacing.lg,
    overflow: 'hidden',
    ...shadows.card,
  },
  topGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 5,
    backgroundColor: colors.lime,
    opacity: 0.68,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  badge: {
    minHeight: 24,
    maxWidth: 116,
    borderRadius: radius.full,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: fontWeights.semibold,
    letterSpacing: -0.2,
  },
  company: {
    color: colors.textSoft,
    fontSize: 12,
    fontWeight: fontWeights.medium,
    letterSpacing: -0.2,
    marginBottom: 3,
  },
  title: {
    color: colors.text,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: fontWeights.bold,
    letterSpacing: -0.5,
  },
  subtitle: {
    color: colors.textSoft,
    fontSize: 13,
    lineHeight: 18,
    marginTop: spacing.sm,
  },
  footerRow: {
    marginTop: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing.sm,
    minWidth: 0,
  },
  metaPill: {
    minHeight: 24,
    maxWidth: '60%',
    borderRadius: radius.full,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F9FC',
    borderWidth: 1,
    borderColor: colors.border,
  },
  meta: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: fontWeights.medium,
    letterSpacing: -0.15,
    flexShrink: 1,
  },
});
