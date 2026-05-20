import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { AnimatedScalePressable } from '@/components/AnimatedScalePressable';
import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { clampSize } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';

type StatsSummaryCardProps = {
  leftValue: string;
  leftLabel: string;
  rightValue: string;
  rightLabel: string;
  onPress?: () => void;
};

// Compact savings summary card used below the hero.
export function StatsSummaryCard({
  leftValue,
  leftLabel,
  rightValue,
  rightLabel,
  onPress,
}: StatsSummaryCardProps) {
  const { width } = useWindowDimensions();
  const cardHeight = clampSize(width, 78, 84, 0.205);
  const statNumberSize = clampSize(width, 24, 26, 0.066);
  const labelSize = clampSize(width, 14, 15, 0.039);

  return (
    <AnimatedScalePressable
      onPress={onPress}
      contentStyle={[styles.card, { height: cardHeight }]}
      scaleTo={0.992}>
      <View style={[styles.statLeft, { width: width * 0.27 }]}>
        <Text style={[styles.activeNumber, { fontSize: statNumberSize, lineHeight: statNumberSize + 2 }]}>
          {leftValue}
        </Text>
        <Text style={[styles.label, { fontSize: labelSize, lineHeight: labelSize + 3 }]}>{leftLabel}</Text>
      </View>

      <View style={[styles.divider, { height: cardHeight * 0.58 }]} />

      <View style={styles.statRight}>
        <Text style={[styles.savingsNumber, { fontSize: statNumberSize, lineHeight: statNumberSize + 2 }]}>
          {rightValue}
        </Text>
        <Text style={[styles.label, { fontSize: labelSize, lineHeight: labelSize + 3 }]}>{rightLabel}</Text>
      </View>

      <View style={styles.chevronWrap}>
        <Ionicons name="chevron-forward" size={18} color={colors.text} style={styles.chevron} />
      </View>
    </AnimatedScalePressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.xxl,
    backgroundColor: colors.card,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 12,
    ...shadows.card,
  },
  statLeft: {
    minWidth: 0,
  },
  statRight: {
    flex: 1,
    paddingLeft: 16,
    minWidth: 0,
  },
  divider: {
    width: 1,
    backgroundColor: '#E6E7ED',
  },
  activeNumber: {
    color: colors.purple,
    fontWeight: fontWeights.bold,
    letterSpacing: -0.7,
  },
  savingsNumber: {
    color: colors.green,
    fontWeight: fontWeights.bold,
    letterSpacing: -0.7,
  },
  label: {
    color: colors.textSoft,
    fontWeight: fontWeights.medium,
    letterSpacing: -0.3,
    marginTop: 1,
    flexShrink: 1,
  },
  chevronWrap: {
    width: 32,
    height: 32,
    borderRadius: radius.full,
    backgroundColor: '#F7F9FC',
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
  },
  chevron: {
    marginLeft: 1,
  },
});
