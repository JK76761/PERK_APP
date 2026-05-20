import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { BrandLogo } from '@/components/BrandLogo';
import { categoryToneColors, colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';
import type { CategoryTone } from '@/data/categories';
import type { Perk } from '@/types/perk';

type PerkDetailHeroProps = {
  perk: Perk;
  categoryLabel: string;
  categoryTone: CategoryTone;
};

// Main hero block at the top of the perk detail screen.
export function PerkDetailHero({ perk, categoryLabel, categoryTone }: PerkDetailHeroProps) {
  const tone = categoryToneColors[categoryTone];

  return (
    <View style={styles.container}>
      <View style={styles.accentBlob} />
      <BrandLogo
        company={perk.company}
        logoKey={perk.logoKey}
        logoDomain={perk.logoDomain}
        variant="detail"
      />

      <View style={[styles.categoryPill, { backgroundColor: tone.background }]}> 
        <FontAwesome5 name="sparkles" size={12} color={tone.icon} />
        <Text style={[styles.categoryText, { color: tone.icon }]}>{categoryLabel}</Text>
      </View>

      {perk.company ? <Text style={styles.company}>{perk.company}</Text> : null}
      <Text style={styles.title}>{perk.title}</Text>
      <Text style={styles.description}>{perk.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: radius.xxl,
    backgroundColor: colors.card,
    padding: spacing.xxl,
    marginBottom: spacing.xl,
    overflow: 'hidden',
    ...shadows.card,
  },
  accentBlob: {
    position: 'absolute',
    right: -34,
    top: -10,
    width: 170,
    height: 170,
    borderTopLeftRadius: 74,
    borderBottomLeftRadius: 54,
    borderTopRightRadius: 86,
    borderBottomRightRadius: 62,
    backgroundColor: colors.limeGlow,
  },
  categoryPill: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    minHeight: 28,
    borderRadius: radius.full,
    paddingHorizontal: spacing.md,
    marginTop: spacing.lg,
    marginBottom: spacing.md,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: fontWeights.semibold,
    letterSpacing: -0.2,
  },
  company: {
    color: colors.textSoft,
    fontSize: 15,
    fontWeight: fontWeights.medium,
    lineHeight: 20,
    marginBottom: spacing.xs,
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: fontWeights.bold,
    letterSpacing: -0.7,
    lineHeight: 32,
    marginBottom: spacing.sm,
  },
  description: {
    color: colors.textSoft,
    fontSize: 15,
    fontWeight: fontWeights.regular,
    lineHeight: 23,
  },
});
