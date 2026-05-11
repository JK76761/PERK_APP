import { useEffect, useRef, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Animated, StyleSheet, TextInput } from 'react-native';

import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

// Simple search field used on discovery screens.
export function SearchBar({
  value,
  onChangeText,
  placeholder = 'Search perks, brands...',
}: SearchBarProps) {
  const [focused, setFocused] = useState(false);
  const focus = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focus, {
      toValue: focused ? 1 : 0,
      duration: 180,
      useNativeDriver: false,
    }).start();
  }, [focus, focused]);

  const borderColor = focus.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(17, 17, 17, 0.03)', 'rgba(123, 104, 255, 0.18)'],
  });

  const shadowOpacity = focus.interpolate({
    inputRange: [0, 1],
    outputRange: [0.04, 0.08],
  });

  const backgroundColor = focus.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.card, '#FFFFFF'],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          borderColor,
          backgroundColor,
          shadowOpacity,
        },
      ]}>
      <Ionicons name="search-outline" size={18} color={colors.textMuted} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: radius.full,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    ...shadows.subtle,
  },
  input: {
    flex: 1,
    color: colors.text,
    fontSize: 15,
    fontWeight: fontWeights.regular,
    paddingVertical: 0,
  },
});
