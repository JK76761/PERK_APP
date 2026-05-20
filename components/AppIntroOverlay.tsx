import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';

const { width, height } = Dimensions.get('window');

type AppIntroOverlayProps = {
  onDone?: () => void;
};

export function AppIntroOverlay({ onDone }: AppIntroOverlayProps) {
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.96)).current;
  const cardOpacity = useRef(new Animated.Value(0)).current;
  const cardTranslateY = useRef(new Animated.Value(18)).current;
  const taglineOpacity = useRef(new Animated.Value(0)).current;
  const badgeOpacity = useRef(new Animated.Value(0)).current;
  const overlayOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const sequence = Animated.sequence([
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 420,
          useNativeDriver: true,
        }),
        Animated.spring(logoScale, {
          toValue: 1,
          useNativeDriver: true,
          speed: 20,
          bounciness: 3,
        }),
      ]),
      Animated.parallel([
        Animated.timing(cardOpacity, {
          toValue: 1,
          duration: 420,
          useNativeDriver: true,
        }),
        Animated.timing(cardTranslateY, {
          toValue: 0,
          duration: 420,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(taglineOpacity, {
          toValue: 1,
          duration: 260,
          useNativeDriver: true,
        }),
        Animated.timing(badgeOpacity, {
          toValue: 1,
          duration: 260,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(650),
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]);

    sequence.start(({ finished }) => {
      if (finished) {
        onDone?.();
      }
    });

    return () => {
      sequence.stop();
    };
  }, [
    badgeOpacity,
    cardOpacity,
    cardTranslateY,
    logoOpacity,
    logoScale,
    onDone,
    overlayOpacity,
    taglineOpacity,
  ]);

  return (
    <Animated.View style={[styles.overlay, { opacity: overlayOpacity }]}>
      <View style={styles.glowPrimary} />
      <View style={styles.glowSecondary} />

      <Animated.View
        style={[
          styles.logoWrap,
          {
            opacity: logoOpacity,
            transform: [{ scale: logoScale }],
          },
        ]}>
        <Text style={styles.logo}>Perk</Text>
        <Ionicons name="sparkles" size={18} color={colors.lime} style={styles.sparkle} />
      </Animated.View>

      <Animated.View
        style={[
          styles.cardRow,
          {
            opacity: cardOpacity,
            transform: [{ translateY: cardTranslateY }],
          },
        ]}>
        <View style={[styles.ghostCard, styles.ghostCardLeft]}>
          <Text style={styles.ghostEyebrow}>Verified</Text>
          <Text style={styles.ghostTitle}>Food savings</Text>
        </View>
        <View style={[styles.ghostCard, styles.ghostCardRight]}>
          <Text style={styles.ghostEyebrow}>Official source</Text>
          <Text style={styles.ghostTitle}>Cash bonuses</Text>
        </View>
      </Animated.View>

      <Animated.Text style={[styles.tagline, { opacity: taglineOpacity }]}>
        Verified ways to save
      </Animated.Text>

      <Animated.View style={[styles.badge, { opacity: badgeOpacity }]}>
        <Ionicons name="checkmark-circle" size={14} color={colors.green} />
        <Text style={styles.badgeText}>Official sources only</Text>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 50,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },
  glowPrimary: {
    position: 'absolute',
    width: width * 0.72,
    height: width * 0.72,
    borderRadius: radius.full,
    backgroundColor: colors.limeGlow,
    opacity: 0.42,
    top: height * 0.14,
    right: -width * 0.08,
  },
  glowSecondary: {
    position: 'absolute',
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: radius.full,
    backgroundColor: colors.purpleSoft,
    opacity: 0.55,
    bottom: height * 0.18,
    left: -width * 0.12,
  },
  logoWrap: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.xl,
  },
  logo: {
    color: colors.text,
    fontSize: 46,
    lineHeight: 48,
    fontWeight: fontWeights.bold,
    letterSpacing: -2.2,
  },
  sparkle: {
    marginLeft: 3,
    marginTop: -2,
  },
  cardRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  ghostCard: {
    width: 146,
    minHeight: 88,
    borderRadius: radius.xl,
    backgroundColor: 'rgba(255,255,255,0.88)',
    padding: spacing.md,
    ...shadows.card,
  },
  ghostCardLeft: {
    transform: [{ rotate: '-4deg' }],
  },
  ghostCardRight: {
    transform: [{ rotate: '4deg' }],
  },
  ghostEyebrow: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: fontWeights.medium,
    marginBottom: spacing.xs,
    letterSpacing: -0.15,
  },
  ghostTitle: {
    color: colors.text,
    fontSize: 17,
    lineHeight: 20,
    fontWeight: fontWeights.semibold,
    letterSpacing: -0.35,
  },
  tagline: {
    color: colors.text,
    fontSize: 18,
    lineHeight: 22,
    fontWeight: fontWeights.semibold,
    letterSpacing: -0.35,
    marginBottom: spacing.sm,
  },
  badge: {
    minHeight: 30,
    borderRadius: radius.full,
    backgroundColor: colors.card,
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    ...shadows.subtle,
  },
  badgeText: {
    color: colors.textSoft,
    fontSize: 12,
    fontWeight: fontWeights.medium,
    letterSpacing: -0.15,
  },
});
