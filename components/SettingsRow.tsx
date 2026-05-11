import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { AnimatedScalePressable } from '@/components/AnimatedScalePressable';
import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';

type SettingsRowProps = {
  label: string;
  value?: string;
  onPress?: () => void;
};

// Reusable tappable row for profile preferences and settings.
export function SettingsRow({ label, value, onPress }: SettingsRowProps) {
  return (
    <AnimatedScalePressable onPress={onPress} contentStyle={styles.row} scaleTo={0.988}>
      <View style={styles.textWrap}>
        <Text style={styles.label}>{label}</Text>
        {value ? <Text style={styles.value}>{value}</Text> : null}
      </View>
      <Ionicons name="chevron-forward" size={18} color={colors.chevron} />
    </AnimatedScalePressable>
  );
}

const styles = StyleSheet.create({
  row: {
    minHeight: 58,
    borderRadius: radius.xl,
    backgroundColor: colors.card,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    ...shadows.subtle,
  },
  textWrap: {
    flex: 1,
    paddingRight: spacing.md,
  },
  label: {
    color: colors.text,
    fontSize: 15,
    fontWeight: fontWeights.medium,
    letterSpacing: -0.2,
  },
  value: {
    color: colors.textSoft,
    fontSize: 13,
    fontWeight: fontWeights.regular,
    marginTop: spacing.xs,
  },
});
