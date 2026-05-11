import { Ionicons } from '@expo/vector-icons';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { clampSize, spacing } from '@/constants/spacing';
import { fontWeights } from '@/constants/typography';

const { width } = Dimensions.get('window');
const heroTitleSize = clampSize(width, 31, 35, 0.082);
const amountSize = width * 0.136;
const monthSize = clampSize(width, 19, 21.5, 0.051);
const blobSize = clampSize(width, 154, 178, 0.432);
const blackSparkleSize = blobSize * 0.34;

type HeroSavingsProps = {
  eyebrow: string;
  amount: string;
  support: string;
};

// Hero block that highlights the monthly savings amount.
export function HeroSavings({ eyebrow, amount, support }: HeroSavingsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.copy}>
        <Text style={styles.eyebrow}>{eyebrow}</Text>
        <Text style={styles.amount}>{amount}</Text>
        <Text style={styles.month}>{support}</Text>
      </View>

      <View style={styles.blob}>
        <View style={styles.blobGlowPrimary} />
        <View style={styles.blobGlowSecondary} />
        <View style={styles.blobGlowTertiary} />
        <View style={styles.blackSparkle}>
          <Ionicons name="sparkles" size={blackSparkleSize * 0.5} color={colors.limeSoft} />
        </View>
        <Ionicons name="sparkles" size={blobSize * 0.13} color={colors.lime} style={styles.sparkleLeft} />
        <Ionicons name="sparkles" size={blobSize * 0.09} color={colors.lime} style={styles.sparkleTop} />
        <Ionicons name="sparkles" size={blobSize * 0.12} color={colors.card} style={styles.sparkleRight} />
        <View style={styles.curveOne} />
        <View style={styles.curveTwo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Math.max(126, Math.min(136, width * 0.34)),
    position: 'relative',
  },
  copy: {
    zIndex: 2,
  },
  eyebrow: {
    color: colors.text,
    fontSize: heroTitleSize,
    fontWeight: fontWeights.regular,
    letterSpacing: -0.9,
    lineHeight: heroTitleSize + 3,
    marginBottom: -2,
  },
  amount: {
    color: colors.text,
    fontSize: amountSize,
    fontWeight: fontWeights.bold,
    letterSpacing: -2.8,
    lineHeight: amountSize + 1,
  },
  month: {
    color: colors.text,
    fontSize: monthSize,
    fontWeight: fontWeights.semibold,
    letterSpacing: -0.55,
    lineHeight: monthSize + 3,
    marginTop: -2,
  },
  blob: {
    position: 'absolute',
    top: 10,
    right: -34,
    width: blobSize,
    height: blobSize,
    borderTopLeftRadius: blobSize * 0.36,
    borderBottomLeftRadius: blobSize * 0.26,
    borderTopRightRadius: blobSize * 0.45,
    borderBottomRightRadius: blobSize * 0.32,
    backgroundColor: colors.limeGlow,
    overflow: 'hidden',
  },
  blobGlowPrimary: {
    position: 'absolute',
    left: blobSize * 0.04,
    top: blobSize * 0.1,
    width: blobSize * 0.68,
    height: blobSize * 0.68,
    borderRadius: blobSize * 0.34,
    backgroundColor: 'rgba(241, 255, 160, 0.28)',
  },
  blobGlowSecondary: {
    position: 'absolute',
    right: -14,
    bottom: -14,
    width: blobSize * 0.82,
    height: blobSize * 0.82,
    borderRadius: blobSize * 0.41,
    backgroundColor: 'rgba(225, 247, 108, 0.2)',
  },
  blobGlowTertiary: {
    position: 'absolute',
    right: blobSize * 0.08,
    top: blobSize * 0.18,
    width: blobSize * 0.44,
    height: blobSize * 0.44,
    borderRadius: blobSize * 0.22,
    backgroundColor: 'rgba(250, 255, 205, 0.18)',
  },
  blackSparkle: {
    position: 'absolute',
    top: blobSize * 0.13,
    left: blobSize * 0.42,
    width: blackSparkleSize,
    height: blackSparkleSize,
    borderRadius: radius.full,
    backgroundColor: colors.text,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sparkleLeft: {
    position: 'absolute',
    left: blobSize * 0.25,
    top: blobSize * 0.55,
    opacity: 0.88,
  },
  sparkleTop: {
    position: 'absolute',
    right: blobSize * 0.25,
    top: 2,
    opacity: 0.78,
    transform: [{ rotate: '18deg' }],
  },
  sparkleRight: {
    position: 'absolute',
    right: blobSize * 0.15,
    top: blobSize * 0.57,
    opacity: 0.92,
  },
  curveOne: {
    position: 'absolute',
    left: blobSize * 0.34,
    top: blobSize * 0.63,
    width: blobSize * 0.2,
    height: blobSize * 0.16,
    borderBottomWidth: 1.25,
    borderRightWidth: 1.25,
    borderColor: 'rgba(5, 5, 5, 0.45)',
    borderRadius: spacing.xl,
    transform: [{ rotate: '28deg' }],
  },
  curveTwo: {
    position: 'absolute',
    left: blobSize * 0.49,
    top: blobSize * 0.54,
    width: blobSize * 0.2,
    height: blobSize * 0.22,
    borderBottomWidth: 1.25,
    borderRightWidth: 1.25,
    borderColor: 'rgba(5, 5, 5, 0.45)',
    borderRadius: spacing.xl,
    transform: [{ rotate: '5deg' }],
  },
});
