import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';

import { AnimatedScalePressable } from '@/components/AnimatedScalePressable';
import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { clampSize, spacing } from '@/constants/spacing';
import { fontWeights } from '@/constants/typography';

const { width } = Dimensions.get('window');

type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
};

// Small reusable heading row used above each content section.
export function SectionHeader({ title, actionLabel, onActionPress }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {actionLabel ? (
        onActionPress ? (
          <AnimatedScalePressable
            onPress={onActionPress}
            contentStyle={styles.actionPressable}
            scaleTo={0.96}>
            <Text style={styles.action}>{actionLabel}</Text>
          </AnimatedScalePressable>
        ) : (
          <Pressable hitSlop={6}>
            <Text style={styles.action}>{actionLabel}</Text>
          </Pressable>
        )
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: radius.lg + spacing.sm + 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  title: {
    color: colors.text,
    fontSize: clampSize(width, 18, 20, 0.05),
    fontWeight: fontWeights.bold,
    letterSpacing: -0.4,
    lineHeight: 24,
  },
  action: {
    color: colors.purple,
    fontSize: clampSize(width, 14, 15, 0.038),
    fontWeight: fontWeights.semibold,
    letterSpacing: -0.2,
    lineHeight: 18,
  },
  actionPressable: {
    minHeight: 30,
    justifyContent: 'center',
  },
});
