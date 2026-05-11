import { useRef, type ReactNode } from 'react';
import {
  Animated,
  Pressable,
  type GestureResponderEvent,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

type AnimatedScalePressableProps = PressableProps & {
  children: ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
  scaleTo?: number;
};

// Reusable press wrapper for subtle iOS-style scale feedback.
export function AnimatedScalePressable({
  children,
  contentStyle,
  scaleTo = 0.985,
  onPressIn,
  onPressOut,
  ...pressableProps
}: AnimatedScalePressableProps) {
  const scale = useRef(new Animated.Value(1)).current;

  function animateTo(value: number) {
    Animated.spring(scale, {
      toValue: value,
      useNativeDriver: true,
      speed: 26,
      bounciness: 0,
    }).start();
  }

  function handlePressIn(event: GestureResponderEvent) {
    animateTo(scaleTo);
    onPressIn?.(event);
  }

  function handlePressOut(event: GestureResponderEvent) {
    animateTo(1);
    onPressOut?.(event);
  }

  return (
    <Pressable {...pressableProps} onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View style={[contentStyle, { transform: [{ scale }] }]}>{children}</Animated.View>
    </Pressable>
  );
}
