import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { AnimatedScalePressable } from '@/components/AnimatedScalePressable';
import { categoryToneColors, colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { clampSize } from '@/constants/spacing';
import { fontWeights } from '@/constants/typography';
import type { Category, CategoryIcon as CategoryIconName } from '@/data/categories';

type CategoryButtonProps = {
  category: Category;
  onPress?: () => void;
};

function CategoryIcon({
  kind,
  color,
  iconSize,
}: {
  kind: CategoryIconName;
  color: string;
  iconSize: number;
}) {
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

  if (kind === 'research') {
    return <Ionicons name="cash-outline" size={iconSize + 2} color={color} />;
  }

  if (kind === 'shopping') {
    return <Ionicons name="bag-handle" size={iconSize + 1} color={color} />;
  }

  return <Ionicons name="albums" size={iconSize + 1} color={color} />;
}

// Category chip used in the browse row.
export function CategoryButton({ category, onPress }: CategoryButtonProps) {
  const { width } = useWindowDimensions();
  const tone = categoryToneColors[category.tone];
  const contentWidth = width - clampSize(width, 36, 44, 0.104);
  const itemWidth = contentWidth / 6;
  const iconBoxSize = clampSize(width, 42, 46, 0.114);
  const iconSize = iconBoxSize * 0.5;
  const labelSize = clampSize(width, 10.5, 11.5, 0.029);

  return (
    <AnimatedScalePressable
      onPress={onPress}
      contentStyle={[styles.container, { width: itemWidth }]}
      scaleTo={0.965}>
      <View
        style={[
          styles.iconBox,
          {
            width: iconBoxSize,
            height: iconBoxSize,
            backgroundColor: tone.background,
          },
        ]}>
        <CategoryIcon kind={category.icon} color={tone.icon} iconSize={iconSize} />
      </View>
      <Text
        style={[
          styles.label,
          {
            width: itemWidth,
            fontSize: labelSize,
          },
        ]}
        numberOfLines={2}>
        {category.label}
      </Text>
    </AnimatedScalePressable>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 82,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  iconBox: {
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  label: {
    minHeight: 30,
    color: colors.textSoft,
    textAlign: 'center',
    fontWeight: fontWeights.semibold,
    letterSpacing: -0.18,
    lineHeight: 14,
    flexShrink: 1,
  },
});
