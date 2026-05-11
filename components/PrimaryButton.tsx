import { StyleSheet, Text } from 'react-native';

import { AnimatedScalePressable } from '@/components/AnimatedScalePressable';
import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights, typography } from '@/constants/typography';

type PrimaryButtonProps = {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
};

// Main bottom call-to-action button used on the detail screen.
export function PrimaryButton({
  label,
  onPress,
  disabled = false,
  loading = false,
  loadingText = 'Loading...',
}: PrimaryButtonProps) {
  const blocked = disabled || loading;
  const textLabel = loading ? loadingText : label;

  return (
    <AnimatedScalePressable
      onPress={blocked ? undefined : onPress}
      disabled={blocked}
      contentStyle={[styles.button, blocked ? styles.buttonDisabled : null]}
      scaleTo={0.982}>
      <Text style={[styles.label, blocked ? styles.labelDisabled : null]}>{textLabel}</Text>
    </AnimatedScalePressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: spacing.buttonHeight,
    minHeight: 44,
    borderRadius: radius.full,
    backgroundColor: colors.text,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.floating,
  },
  buttonDisabled: {
    opacity: 0.56,
  },
  label: {
    color: colors.card,
    fontSize: typography.buttonLabel,
    fontWeight: fontWeights.semibold,
    letterSpacing: -0.2,
  },
  labelDisabled: {
    color: 'rgba(255, 255, 255, 0.92)',
  },
});
