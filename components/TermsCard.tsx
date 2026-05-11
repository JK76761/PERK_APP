import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';

type TermsCardProps = {
  terms: string[];
};

// Soft card that lists the perk terms in a simple readable way.
export function TermsCard({ terms }: TermsCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Things to know</Text>
        <Ionicons name="chevron-down" size={18} color={colors.chevron} />
      </View>

      <View style={styles.list}>
        {terms.map((term) => (
          <View key={term} style={styles.row}>
            <View style={styles.dot} />
            <Text style={styles.term}>{term}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.xxl,
    backgroundColor: colors.card,
    padding: spacing.lg,
    ...shadows.card,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  title: {
    color: colors.text,
    fontSize: 15,
    fontWeight: fontWeights.semibold,
    letterSpacing: -0.2,
  },
  list: {
    gap: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: radius.full,
    backgroundColor: colors.textMuted,
    marginTop: 7,
  },
  term: {
    flex: 1,
    color: colors.textSoft,
    fontSize: 14,
    fontWeight: fontWeights.regular,
    lineHeight: 20,
  },
});
