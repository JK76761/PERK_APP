import { Ionicons } from '@expo/vector-icons';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { clampSize } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';

const { width } = Dimensions.get('window');
const cardHeight = clampSize(width, 78, 84, 0.205);
const statNumberSize = clampSize(width, 24, 26, 0.066);
const labelSize = clampSize(width, 14, 15, 0.039);

type StatsSummaryCardProps = {
  leftValue: string;
  leftLabel: string;
  rightValue: string;
  rightLabel: string;
};

// Compact savings summary card used below the hero.
export function StatsSummaryCard({
  leftValue,
  leftLabel,
  rightValue,
  rightLabel,
}: StatsSummaryCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.statLeft}>
        <Text style={styles.activeNumber}>{leftValue}</Text>
        <Text style={styles.label}>{leftLabel}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.statRight}>
        <Text style={styles.savingsNumber}>{rightValue}</Text>
        <Text style={styles.label}>{rightLabel}</Text>
      </View>

      <Ionicons name="chevron-forward" size={24} color={colors.text} style={styles.chevron} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: cardHeight,
    borderRadius: radius.xxl,
    backgroundColor: colors.card,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 12,
    ...shadows.card,
  },
  statLeft: {
    width: width * 0.27,
  },
  statRight: {
    flex: 1,
    paddingLeft: 16,
  },
  divider: {
    width: 1,
    height: cardHeight * 0.58,
    backgroundColor: '#E6E7ED',
  },
  activeNumber: {
    color: colors.purple,
    fontSize: statNumberSize,
    fontWeight: fontWeights.bold,
    letterSpacing: -0.7,
    lineHeight: statNumberSize + 2,
  },
  savingsNumber: {
    color: colors.green,
    fontSize: statNumberSize,
    fontWeight: fontWeights.bold,
    letterSpacing: -0.7,
    lineHeight: statNumberSize + 2,
  },
  label: {
    color: colors.textSoft,
    fontSize: labelSize,
    fontWeight: fontWeights.medium,
    letterSpacing: -0.3,
    lineHeight: labelSize + 3,
    marginTop: 1,
  },
  chevron: {
    marginLeft: 4,
  },
});
