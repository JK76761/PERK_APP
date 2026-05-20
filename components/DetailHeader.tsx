import { Ionicons } from '@expo/vector-icons';
import { useRef } from 'react';
import { Animated, Pressable, StyleSheet, View } from 'react-native';

import { AnimatedScalePressable } from '@/components/AnimatedScalePressable';
import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { useSavedPerks } from '@/state/SavedPerksContext';

type DetailHeaderProps = {
  onBack: () => void;
  perkId: string;
  onShare?: () => void;
};

// Top action row used on the perk detail screen.
export function DetailHeader({ onBack, perkId, onShare }: DetailHeaderProps) {
  const { isSaved, toggleSaved } = useSavedPerks();
  const saved = isSaved(perkId);
  const bookmarkScale = useRef(new Animated.Value(1)).current;

  function animateBookmark() {
    Animated.sequence([
      Animated.spring(bookmarkScale, {
        toValue: 1.14,
        useNativeDriver: true,
        speed: 26,
        bounciness: 6,
      }),
      Animated.spring(bookmarkScale, {
        toValue: 1,
        useNativeDriver: true,
        speed: 24,
        bounciness: 4,
      }),
    ]).start();
  }

  return (
    <View style={styles.container}>
      <AnimatedScalePressable onPress={onBack} contentStyle={styles.iconButton} scaleTo={0.94}>
        <Ionicons name="chevron-back" size={22} color={colors.text} />
      </AnimatedScalePressable>

      <View style={styles.actions}>
        <Pressable
          onPress={() => {
            animateBookmark();
            toggleSaved(perkId);
          }}
          style={({ pressed }) => [styles.iconButton, pressed ? styles.pressed : null]}>
          <Animated.View style={{ transform: [{ scale: bookmarkScale }] }}>
            <Ionicons
              name={saved ? 'bookmark' : 'bookmark-outline'}
              size={21}
              color={saved ? colors.purple : colors.text}
            />
          </Animated.View>
        </Pressable>
        <AnimatedScalePressable onPress={onShare} contentStyle={styles.iconButton} scaleTo={0.94}>
          <Ionicons name="share-social-outline" size={21} color={colors.text} />
        </AnimatedScalePressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.sm,
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
  pressed: {
    opacity: 0.8,
  },
});
