import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';

// Small profile card that highlights the user's savings summary.
export function ProfileStatCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.value}>$240+</Text>
      <Text style={styles.label}>Potential monthly savings</Text>
      <Text style={styles.support}>12 active perks discovered</Text>
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
  },
  support: {
    color: colors.textSoft,
    fontSize: 14,
    fontWeight: fontWeights.regular,
    lineHeight: 20,
  },
});
