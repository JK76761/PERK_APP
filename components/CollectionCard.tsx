import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { AnimatedScalePressable } from '@/components/AnimatedScalePressable';
import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';

type CollectionCardProps = {
  title: string;
  subtitle: string;
  onPress?: () => void;
};

export function CollectionCard({ title, subtitle, onPress }: CollectionCardProps) {
  return (
    <AnimatedScalePressable onPress={onPress} contentStyle={styles.card} scaleTo={0.985}>
      <View style={styles.topRow}>
        <View style={styles.dot} />
        <View style={styles.iconWrap}>
          <Ionicons name="arrow-forward" size={14} color={colors.textSoft} />
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </AnimatedScalePressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 194,
    minHeight: 118,
    borderRadius: radius.xl,
    backgroundColor: colors.card,
    padding: spacing.lg,
    ...shadows.subtle,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: radius.full,
    backgroundColor: colors.lime,
  },
  iconWrap: {
    width: 28,
    height: 28,
    borderRadius: radius.full,
    backgroundColor: '#F7F9FC',
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: fontWeights.semibold,
    letterSpacing: -0.35,
    marginBottom: spacing.xs,
  },
  subtitle: {
    color: colors.textSoft,
    fontSize: 13,
    lineHeight: 18,
  },
});
