import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { clampSize, spacing } from '@/constants/spacing';
import { fontWeights } from '@/constants/typography';

type HeroSavingsProps = {
  eyebrow: string;
  amount: string;
  support: string;
};

// Hero block that highlights the monthly savings amount.
export function HeroSavings({ eyebrow, amount, support }: HeroSavingsProps) {
  const { width } = useWindowDimensions();
  const heroTitleSize = clampSize(width, 31, 35, 0.082);
  const amountSize = width * 0.136;
  const monthSize = clampSize(width, 19, 21.5, 0.051);
  const blobSize = clampSize(width, 154, 178, 0.432);
  const blackSparkleSize = blobSize * 0.34;
  const copyMaxWidth = Math.max(190, width - blobSize * 0.72);
  const floatY = useRef(new Animated.Value(0)).current;
  const blobScale = useRef(new Animated.Value(1)).current;
  const sparkleDrift = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const motion = Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(floatY, {
            toValue: -4,
            duration: 2400,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
          Animated.timing(blobScale, {
            toValue: 1.02,
            duration: 2400,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
          Animated.timing(sparkleDrift, {
            toValue: 1,
            duration: 2400,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(floatY, {
            toValue: 0,
            duration: 2400,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
          Animated.timing(blobScale, {
            toValue: 1,
            duration: 2400,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
          Animated.timing(sparkleDrift, {
            toValue: 0,
            duration: 2400,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
        ]),
      ])
    );

    motion.start();

    return () => {
      motion.stop();
    };
  }, [blobScale, floatY, sparkleDrift]);

  const sparkleLeftStyle = {
    transform: [
      {
        translateY: sparkleDrift.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -4],
        }),
      },
      {
        translateX: sparkleDrift.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 2],
        }),
      },
    ],
  };

  const sparkleTopStyle = {
    transform: [
      {
        rotate: sparkleDrift.interpolate({
          inputRange: [0, 1],
          outputRange: ['18deg', '24deg'],
        }),
      },
      {
        translateY: sparkleDrift.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -3],
        }),
      },
    ],
  };

  const sparkleRightStyle = {
    transform: [
      {
        translateY: sparkleDrift.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 3],
        }),
      },
      {
        scale: sparkleDrift.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.04],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={[styles.copy, { maxWidth: copyMaxWidth }]}>
        <Text style={[styles.eyebrow, { fontSize: heroTitleSize, lineHeight: heroTitleSize + 3 }]}>
          {eyebrow}
        </Text>
        <Text style={[styles.amount, { fontSize: amountSize, lineHeight: amountSize + 1 }]}>
          {amount}
        </Text>
        <Text
          style={[
            styles.month,
            {
              fontSize: monthSize,
              lineHeight: monthSize + 3,
              maxWidth: copyMaxWidth,
            },
          ]}>
          {support}
        </Text>
      </View>

      <Animated.View
        style={[
          styles.blob,
          {
            top: 10,
            right: -34,
            width: blobSize,
            height: blobSize,
            borderTopLeftRadius: blobSize * 0.36,
            borderBottomLeftRadius: blobSize * 0.26,
            borderTopRightRadius: blobSize * 0.45,
            borderBottomRightRadius: blobSize * 0.32,
            transform: [{ translateY: floatY }, { scale: blobScale }],
          },
        ]}>
        <View
          style={[
            styles.blobGlowPrimary,
            {
              left: blobSize * 0.04,
              top: blobSize * 0.1,
              width: blobSize * 0.68,
              height: blobSize * 0.68,
              borderRadius: blobSize * 0.34,
            },
          ]}
        />
        <View
          style={[
            styles.blobGlowSecondary,
            {
              width: blobSize * 0.82,
              height: blobSize * 0.82,
              borderRadius: blobSize * 0.41,
            },
          ]}
        />
        <View
          style={[
            styles.blobGlowTertiary,
            {
              right: blobSize * 0.08,
              top: blobSize * 0.18,
              width: blobSize * 0.44,
              height: blobSize * 0.44,
              borderRadius: blobSize * 0.22,
            },
          ]}
        />
        <View
          style={[
            styles.blackSparkle,
            {
              top: blobSize * 0.13,
              left: blobSize * 0.42,
              width: blackSparkleSize,
              height: blackSparkleSize,
            },
          ]}>
          <Ionicons name="sparkles" size={blackSparkleSize * 0.5} color={colors.limeSoft} />
        </View>
        <Animated.View
          style={[
            styles.sparkleLayer,
            styles.sparkleLeft,
            { left: blobSize * 0.25, top: blobSize * 0.55 },
            sparkleLeftStyle,
          ]}>
          <Ionicons name="sparkles" size={blobSize * 0.13} color={colors.lime} />
        </Animated.View>
        <Animated.View
          style={[
            styles.sparkleLayer,
            styles.sparkleTop,
            { right: blobSize * 0.25, top: 2 },
            sparkleTopStyle,
          ]}>
          <Ionicons name="sparkles" size={blobSize * 0.09} color={colors.lime} />
        </Animated.View>
        <Animated.View
          style={[
            styles.sparkleLayer,
            styles.sparkleRight,
            { right: blobSize * 0.15, top: blobSize * 0.57 },
            sparkleRightStyle,
          ]}>
          <Ionicons name="sparkles" size={blobSize * 0.12} color={colors.card} />
        </Animated.View>
        <View
          style={[
            styles.curveOne,
            {
              left: blobSize * 0.34,
              top: blobSize * 0.63,
              width: blobSize * 0.2,
              height: blobSize * 0.16,
            },
          ]}
        />
        <View
          style={[
            styles.curveTwo,
            {
              left: blobSize * 0.49,
              top: blobSize * 0.54,
              width: blobSize * 0.2,
              height: blobSize * 0.22,
            },
          ]}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 126,
    position: 'relative',
  },
  copy: {
    zIndex: 2,
    paddingRight: spacing.sm,
  },
  eyebrow: {
    color: colors.text,
    fontWeight: fontWeights.regular,
    letterSpacing: -0.9,
    marginBottom: -2,
  },
  amount: {
    color: colors.text,
    fontWeight: fontWeights.bold,
    letterSpacing: -2.8,
  },
  month: {
    color: colors.text,
    fontWeight: fontWeights.semibold,
    letterSpacing: -0.55,
    marginTop: -2,
  },
  blob: {
    position: 'absolute',
    backgroundColor: colors.limeGlow,
    overflow: 'hidden',
  },
  blobGlowPrimary: {
    position: 'absolute',
    backgroundColor: 'rgba(241, 255, 160, 0.28)',
  },
  blobGlowSecondary: {
    position: 'absolute',
    right: -14,
    bottom: -14,
    backgroundColor: 'rgba(225, 247, 108, 0.2)',
  },
  blobGlowTertiary: {
    position: 'absolute',
    backgroundColor: 'rgba(250, 255, 205, 0.18)',
  },
  blackSparkle: {
    position: 'absolute',
    borderRadius: radius.full,
    backgroundColor: colors.text,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sparkleLayer: {
    position: 'absolute',
  },
  sparkleLeft: {
    opacity: 0.88,
  },
  sparkleTop: {
    opacity: 0.78,
  },
  sparkleRight: {
    opacity: 0.92,
  },
  curveOne: {
    position: 'absolute',
    borderBottomWidth: 1.25,
    borderRightWidth: 1.25,
    borderColor: 'rgba(5, 5, 5, 0.45)',
    borderRadius: spacing.xl,
    transform: [{ rotate: '28deg' }],
  },
  curveTwo: {
    position: 'absolute',
    borderBottomWidth: 1.25,
    borderRightWidth: 1.25,
    borderColor: 'rgba(5, 5, 5, 0.45)',
    borderRadius: spacing.xl,
    transform: [{ rotate: '5deg' }],
  },
});
