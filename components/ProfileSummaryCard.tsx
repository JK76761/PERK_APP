import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';

type ProfileSummaryCardProps = {
  title: string;
  subtitle: string;
  pillLabel: string;
  note: string;
};

// Profile header card for local setup and trust messaging.
export function ProfileSummaryCard({
  title,
  subtitle,
  pillLabel,
  note,
}: ProfileSummaryCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.initials}>P</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.pill}>
          <Text style={styles.pillText}>{pillLabel}</Text>
        </View>
        <Text style={styles.note}>{note}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.xxl,
    backgroundColor: colors.card,
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.lg,
    ...shadows.card,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: radius.full,
    backgroundColor: colors.purpleSoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  initials: {
    color: colors.purple,
    fontSize: 24,
    fontWeight: fontWeights.bold,
    letterSpacing: -0.6,
  },
  content: {
    flex: 1,
  },
  name: {
    color: colors.text,
    fontSize: 20,
    fontWeight: fontWeights.bold,
    letterSpacing: -0.4,
    marginBottom: spacing.xs,
  },
  subtitle: {
    color: colors.textSoft,
    fontSize: 14,
    fontWeight: fontWeights.regular,
    marginBottom: spacing.sm,
  },
  pill: {
    alignSelf: 'flex-start',
    minHeight: 28,
    borderRadius: radius.full,
    backgroundColor: colors.limeGlow,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: fontWeights.semibold,
    letterSpacing: -0.2,
  },
  note: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: fontWeights.regular,
    lineHeight: 18,
    marginTop: spacing.sm,
  },
});
