import { StyleSheet, Text } from 'react-native';

import { AnimatedScalePressable } from '@/components/AnimatedScalePressable';
import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { fontWeights } from '@/constants/typography';

type PreferencePillProps = {
  label: string;
  active?: boolean;
  onPress?: () => void;
};

export function PreferencePill({ label, active = false, onPress }: PreferencePillProps) {
  return (
    <AnimatedScalePressable
      onPress={onPress}
      contentStyle={[styles.pill, active ? styles.pillActive : null]}
      scaleTo={0.97}>
      <Text style={[styles.label, active ? styles.labelActive : null]}>{label}</Text>
    </AnimatedScalePressable>
  );
}

const styles = StyleSheet.create({
  pill: {
    minHeight: 36,
    borderRadius: radius.full,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F8FB',
    borderWidth: 1,
    borderColor: colors.border,
  },
  pillActive: {
    backgroundColor: colors.text,
    borderColor: colors.text,
  },
  label: {
    color: colors.textSoft,
    fontSize: 13,
    fontWeight: fontWeights.medium,
    letterSpacing: -0.2,
  },
  labelActive: {
    color: colors.card,
  },
});
