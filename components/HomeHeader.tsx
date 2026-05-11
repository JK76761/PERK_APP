import { Ionicons } from '@expo/vector-icons';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { clampSize } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';

const { width } = Dimensions.get('window');
const logoSize = clampSize(width, 40, 45, 0.108);
const bellSize = clampSize(width, 38, 42, 0.105);

// Header used at the top of the home screen.
export function HomeHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        <Text style={styles.logo}>Perk</Text>
        <Ionicons name="sparkles" size={logoSize * 0.45} color={colors.lime} style={styles.logoSparkle} />
      </View>

      <View style={styles.bellButton}>
        <Ionicons name="notifications-outline" size={bellSize * 0.58} color={colors.text} />
        <View style={styles.bellDot} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Math.max(46, Math.min(50, width * 0.126)),
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
    fontSize: logoSize,
    fontWeight: fontWeights.bold,
    letterSpacing: -1.9,
    lineHeight: logoSize + 3,
  },
  logoSparkle: {
    marginLeft: 2,
    marginTop: -3,
  },
  bellButton: {
    width: bellSize,
    height: bellSize,
    borderRadius: radius.full,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.subtle,
  },
  bellDot: {
    position: 'absolute',
    top: bellSize * 0.2,
    right: bellSize * 0.17,
    width: 9,
    height: 9,
    borderRadius: radius.full,
    backgroundColor: colors.lime,
    borderWidth: 2,
    borderColor: colors.text,
  },
});
