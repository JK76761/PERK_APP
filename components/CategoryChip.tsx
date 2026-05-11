import { StyleSheet, Text } from 'react-native';

import { AnimatedScalePressable } from '@/components/AnimatedScalePressable';
import { categoryToneColors, colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';
import type { CategoryTone } from '@/data/categories';

type CategoryChipProps = {
  label: string;
  tone: CategoryTone | 'neutral';
  active?: boolean;
  onPress?: () => void;
};

// Small filter chip used in the explore category row.
export function CategoryChip({ label, tone, active = false, onPress }: CategoryChipProps) {
  const toneStyle =
    tone === 'neutral'
      ? {
          background: colors.card,
          text: colors.textSoft,
        }
      : {
          background: categoryToneColors[tone].background,
          text: categoryToneColors[tone].icon,
        };

  return (
    <AnimatedScalePressable
      onPress={onPress}
      contentStyle={[
        styles.chip,
        {
          backgroundColor: active ? colors.text : toneStyle.background,
        },
      ]}
      scaleTo={0.965}>
      <Text
        style={[
          styles.label,
          {
            color: active ? colors.card : toneStyle.text,
          },
        ]}>
        {label}
      </Text>
    </AnimatedScalePressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    minHeight: 34,
    borderRadius: radius.full,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.subtle,
  },
  label: {
    fontSize: 13,
    fontWeight: fontWeights.medium,
    letterSpacing: -0.2,
  },
});
