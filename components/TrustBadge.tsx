import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { fontWeights } from '@/constants/typography';

type TrustBadgeTone = 'verified' | 'source' | 'student' | 'region';

type TrustBadgeProps = {
  label?: string;
  tone?: TrustBadgeTone;
};

const toneStyles: Record<
  TrustBadgeTone,
  {
    backgroundColor: string;
    iconColor: string;
    textColor: string;
    icon: keyof typeof Ionicons.glyphMap;
  }
> = {
  verified: {
    backgroundColor: colors.greenSoft,
    iconColor: colors.green,
    textColor: colors.green,
    icon: 'checkmark-circle',
  },
  source: {
    backgroundColor: colors.blueSoft,
    iconColor: colors.blue,
    textColor: colors.blue,
    icon: 'shield-checkmark',
  },
  student: {
    backgroundColor: colors.purpleSoft,
    iconColor: colors.purple,
    textColor: colors.purple,
    icon: 'school',
  },
  region: {
    backgroundColor: colors.orangeSoft,
    iconColor: colors.orange,
    textColor: colors.orange,
    icon: 'globe-outline',
  },
};

// Small trust pill used to reinforce source quality without adding noise.
export function TrustBadge({
  label = 'Verified source',
  tone = 'verified',
}: TrustBadgeProps) {
  const toneStyle = toneStyles[tone];

  return (
    <View style={[styles.badge, { backgroundColor: toneStyle.backgroundColor }]}>
      <Ionicons name={toneStyle.icon} size={12} color={toneStyle.iconColor} />
      <Text style={[styles.label, { color: toneStyle.textColor }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    minHeight: 26,
    borderRadius: radius.full,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: spacing.xs,
    paddingHorizontal: spacing.md,
  },
  label: {
    fontSize: 12,
    fontWeight: fontWeights.medium,
    letterSpacing: -0.15,
  },
});
