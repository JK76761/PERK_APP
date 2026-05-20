import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { AnimatedScalePressable } from '@/components/AnimatedScalePressable';
import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { clampSize } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';

type HomeHeaderProps = {
  onNotificationsPress?: () => void;
  showNotificationDot?: boolean;
};

// Header used at the top of the home screen.
export function HomeHeader({
  onNotificationsPress,
  showNotificationDot = true,
}: HomeHeaderProps) {
  const { width } = useWindowDimensions();
  const logoSize = clampSize(width, 40, 45, 0.108);
  const bellSize = clampSize(width, 38, 42, 0.105);
  const dotScale = useRef(new Animated.Value(1)).current;
  const dotOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (!showNotificationDot) {
      dotScale.setValue(1);
      dotOpacity.setValue(1);
      return;
    }

    const pulse = Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(dotScale, {
            toValue: 1.12,
            duration: 900,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
          Animated.timing(dotOpacity, {
            toValue: 0.88,
            duration: 900,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(dotScale, {
            toValue: 1,
            duration: 900,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
          Animated.timing(dotOpacity, {
            toValue: 1,
            duration: 900,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
        ]),
      ])
    );

    pulse.start();

    return () => {
      pulse.stop();
    };
  }, [dotOpacity, dotScale, showNotificationDot]);

  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        <Text style={[styles.logo, { fontSize: logoSize, lineHeight: logoSize + 3 }]}>Perk</Text>
        <Ionicons
          name="sparkles"
          size={logoSize * 0.45}
          color={colors.lime}
          style={styles.logoSparkle}
        />
      </View>

      <AnimatedScalePressable
        onPress={onNotificationsPress}
        contentStyle={[styles.bellButton, { width: bellSize, height: bellSize }]}
        scaleTo={0.94}>
        <Ionicons name="notifications-outline" size={bellSize * 0.58} color={colors.text} />
        {showNotificationDot ? (
          <Animated.View
            style={[
              styles.bellDot,
              {
                top: bellSize * 0.2,
                right: bellSize * 0.17,
                opacity: dotOpacity,
                transform: [{ scale: dotScale }],
              },
            ]}
          />
        ) : null}
      </AnimatedScalePressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  logo: {
    color: colors.text,
    fontWeight: fontWeights.bold,
    letterSpacing: -1.9,
  },
  logoSparkle: {
    marginLeft: 2,
    marginTop: -3,
  },
  bellButton: {
    borderRadius: radius.full,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: '#F3F4F8',
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.subtle,
  },
  bellDot: {
    position: 'absolute',
    width: 9,
    height: 9,
    borderRadius: radius.full,
    backgroundColor: colors.lime,
    borderWidth: 2,
    borderColor: colors.text,
  },
});
