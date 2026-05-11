import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { AnimatedScalePressable } from '@/components/AnimatedScalePressable';
import { categoryToneColors, colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { clampSize } from '@/constants/spacing';
import { fontWeights } from '@/constants/typography';
import type { Category, CategoryIcon as CategoryIconName } from '@/data/categories';

const { width } = Dimensions.get('window');
const contentWidth = width - clampSize(width, 36, 44, 0.104);
const itemWidth = contentWidth / 6;
const iconBoxSize = clampSize(width, 42, 46, 0.114);
const iconSize = iconBoxSize * 0.5;

type CategoryButtonProps = {
  category: Category;
  onPress?: () => void;
};

function CategoryIcon({ kind, color }: { kind: CategoryIconName; color: string }) {
  if (kind === 'banking') {
    return <FontAwesome5 name="university" size={iconSize} color={color} />;
  }

  if (kind === 'food') {
    return <FontAwesome5 name="hamburger" size={iconSize + 1} color={color} />;
  }

  if (kind === 'student') {
    return <FontAwesome5 name="graduation-cap" size={iconSize + 2} color={color} />;
  }

  if (kind === 'tech') {
    return <FontAwesome5 name="laptop" size={iconSize} color={color} />;
  }

  if (kind === 'travel') {
    return <FontAwesome5 name="plane" size={iconSize + 2} color={color} />;
  }

  if (kind === 'ai-tools') {
    return <Ionicons name="sparkles" size={iconSize + 2} color={color} />;
  }

  if (kind === 'shopping') {
    return <Ionicons name="bag-handle" size={iconSize + 1} color={color} />;
  }

  return <Ionicons name="albums" size={iconSize + 1} color={color} />;
}

// Category chip used in the browse row.
export function CategoryButton({ category, onPress }: CategoryButtonProps) {
  const tone = categoryToneColors[category.tone];

  return (
    <AnimatedScalePressable onPress={onPress} contentStyle={styles.container} scaleTo={0.965}>
      <View style={[styles.iconBox, { backgroundColor: tone.background }]}>
        <CategoryIcon kind={category.icon} color={tone.icon} />
      </View>
      <Text style={styles.label} numberOfLines={1} adjustsFontSizeToFit>
        {category.label}
      </Text>
    </AnimatedScalePressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: itemWidth,
    minHeight: 72,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  iconBox: {
    width: iconBoxSize,
    height: iconBoxSize,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  label: {
    width: itemWidth + 12,
    color: colors.textSoft,
    textAlign: 'center',
    fontSize: clampSize(width, 11, 12, 0.03),
    fontWeight: fontWeights.bold,
    letterSpacing: -0.25,
    lineHeight: 14,
  },
});
