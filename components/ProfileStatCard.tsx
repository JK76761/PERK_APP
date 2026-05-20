import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';

type ProfileStatCardProps = {
  savedCount: number;
  activeCount: number;
  verifiedCount: number;
};

// Small profile card that highlights the current on-device summary.
export function ProfileStatCard({
  savedCount,
  activeCount,
  verifiedCount,
}: ProfileStatCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.value}>{savedCount}</Text>
      <Text style={styles.label}>Saved perks on this device</Text>
      <Text style={styles.support}>
        {activeCount} active verified offers available right now, from {verifiedCount} verified
        listings.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.xxl,
    backgroundColor: colors.card,
    padding: spacing.xl,
    ...shadows.card,
  },
  value: {
    color: colors.text,
    fontSize: 34,
    fontWeight: fontWeights.bold,
    letterSpacing: -1.2,
    marginBottom: spacing.xs,
  },
  label: {
    color: colors.text,
    fontSize: 15,
    fontWeight: fontWeights.semibold,
    letterSpacing: -0.2,
    marginBottom: spacing.xs,
    lineHeight: 20,
  },
  support: {
    color: colors.textSoft,
    fontSize: 14,
    fontWeight: fontWeights.regular,
    lineHeight: 20,
  },
});
