import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { AnimatedScalePressable } from '@/components/AnimatedScalePressable';
import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { clampSize, spacing } from '@/constants/spacing';
import { fontWeights } from '@/constants/typography';

type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
};

// Small reusable heading row used above each content section.
export function SectionHeader({ title, actionLabel, onActionPress }: SectionHeaderProps) {
  const { width } = useWindowDimensions();
  const titleSize = clampSize(width, 18, 20, 0.05);
  const actionSize = clampSize(width, 14, 15, 0.038);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: titleSize }]} numberOfLines={1}>
        {title}
      </Text>
      {actionLabel ? (
        onActionPress ? (
          <AnimatedScalePressable
            onPress={onActionPress}
            contentStyle={styles.actionPressable}
            scaleTo={0.96}>
            <Text style={[styles.action, { fontSize: actionSize }]}>{actionLabel}</Text>
          </AnimatedScalePressable>
        ) : (
          <Pressable hitSlop={6}>
            <Text style={[styles.action, { fontSize: actionSize }]}>{actionLabel}</Text>
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
    fontWeight: fontWeights.bold,
    letterSpacing: -0.4,
    lineHeight: 24,
    flex: 1,
    paddingRight: spacing.sm,
  },
  action: {
    color: colors.purple,
    fontWeight: fontWeights.semibold,
    letterSpacing: -0.2,
    lineHeight: 18,
    flexShrink: 0,
  },
  actionPressable: {
    minHeight: 30,
    borderRadius: radius.full,
    paddingHorizontal: spacing.sm + 2,
    justifyContent: 'center',
    backgroundColor: colors.purpleSoft,
  },
});
