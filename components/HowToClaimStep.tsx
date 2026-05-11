import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';

type HowToClaimStepProps = {
  stepNumber: number;
  text: string;
};

// Small reusable row for each claim step on the detail page.
export function HowToClaimStep({ stepNumber, text }: HowToClaimStepProps) {
  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{stepNumber}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  badge: {
    width: 28,
    height: 28,
    borderRadius: radius.full,
    backgroundColor: colors.purpleSoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.xs,
  },
  badgeText: {
    color: colors.purple,
    fontSize: 13,
    fontWeight: fontWeights.semibold,
  },
  card: {
    flex: 1,
    borderRadius: radius.xl,
    backgroundColor: colors.card,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    ...shadows.subtle,
  },
  text: {
    color: colors.text,
    fontSize: 14,
    fontWeight: fontWeights.regular,
    lineHeight: 21,
  },
});
