import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { AnimatedScalePressable } from '@/components/AnimatedScalePressable';
import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';

type SubpageHeaderProps = {
  title: string;
  onBack: () => void;
};

// Compact header used on small informational subpages.
export function SubpageHeader({ title, onBack }: SubpageHeaderProps) {
  return (
    <View style={styles.container}>
      <AnimatedScalePressable onPress={onBack} contentStyle={styles.iconButton} scaleTo={0.94}>
        <Ionicons name="chevron-back" size={22} color={colors.text} />
      </AnimatedScalePressable>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: radius.full,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.subtle,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: colors.text,
    fontSize: 20,
    fontWeight: fontWeights.bold,
    letterSpacing: -0.4,
    marginHorizontal: spacing.md,
  },
  placeholder: {
    width: 40,
    height: 40,
  },
});
