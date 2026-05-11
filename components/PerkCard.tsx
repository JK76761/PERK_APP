import { Ionicons } from '@expo/vector-icons';
import { useRef } from 'react';
import type { GestureResponderEvent } from 'react-native';
import { Animated, Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';

import { AnimatedScalePressable } from '@/components/AnimatedScalePressable';
import { BrandLogo } from '@/components/BrandLogo';
import { badgeToneColors, colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { clampSize } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';
import type { BadgeTone, Perk } from '@/data/perks';
import { useSavedPerks } from '@/state/SavedPerksContext';

const { width } = Dimensions.get('window');
const cardHeight = clampSize(width, 82, 90, 0.222);
const logoSize = clampSize(width, 46, 50, 0.126);
const titleSize = clampSize(width, 15, 16, 0.039);
const bodySize = clampSize(width, 14, 15, 0.038);
const badgeSize = clampSize(width, 12, 13, 0.032);
const bookmarkSize = clampSize(width, 34, 36, 0.092);

type PerkCardProps = {
  perk: Perk;
  onPress?: () => void;
};

function getCardBadge(perk: Perk): { label: string; tone: BadgeTone } | null {
  if (perk.savingsValue && perk.savingsValue !== 'Varies') {
    return { label: perk.savingsValue, tone: perk.badgeTone ?? 'green' };
  }

  if (perk.badgeText) {
    return { label: perk.badgeText, tone: perk.badgeTone ?? 'green' };
  }

  if (perk.savingsValue) {
    return { label: perk.savingsValue, tone: 'green' };
  }

  return null;
}

function getSupportingText(perk: Perk) {
  if (perk.subtitle) {
    return perk.subtitle;
  }

  return perk.expiryText;
}

// Reusable list card for a single featured perk.
export function PerkCard({ perk, onPress }: PerkCardProps) {
  const badge = getCardBadge(perk);
  const supportingText = badge ? null : getSupportingText(perk);
  const { isSaved, toggleSaved } = useSavedPerks();
  const saved = isSaved(perk.id);
  const bookmarkScale = useRef(new Animated.Value(1)).current;
  const bookmarkOpacity = useRef(new Animated.Value(1)).current;

  function animateBookmarkPop() {
    Animated.parallel([
      Animated.sequence([
        Animated.spring(bookmarkScale, {
          toValue: 1.12,
          useNativeDriver: true,
          speed: 24,
          bounciness: 5,
        }),
        Animated.spring(bookmarkScale, {
          toValue: 1,
          useNativeDriver: true,
          speed: 24,
          bounciness: 4,
        }),
      ]),
      Animated.sequence([
        Animated.timing(bookmarkOpacity, {
          toValue: 0.82,
          duration: 90,
          useNativeDriver: true,
        }),
        Animated.timing(bookmarkOpacity, {
          toValue: 1,
          duration: 140,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }

  function handleBookmarkPress(event: GestureResponderEvent) {
    event.stopPropagation();
    animateBookmarkPop();
    toggleSaved(perk.id);
  }

  return (
    <AnimatedScalePressable onPress={onPress} contentStyle={styles.card} scaleTo={0.988}>
      <BrandLogo company={perk.company} logoKey={perk.logoKey} size={logoSize} variant="card" />

      <View style={styles.content}>
        {perk.company ? <Text style={styles.eyebrow}>{perk.company}</Text> : null}
        <Text style={styles.title} numberOfLines={1}>
          {perk.title}
        </Text>
        {supportingText ? (
          <Text style={styles.subtitle} numberOfLines={1}>
            {supportingText}
          </Text>
        ) : null}
        {badge ? (
          <View style={styles.badgeRow}>
            <View style={[styles.badge, { backgroundColor: badgeToneColors[badge.tone].background }]}> 
              <Text
                style={[styles.badgeText, { color: badgeToneColors[badge.tone].text }]}
                numberOfLines={1}>
                {badge.label}
              </Text>
            </View>
          </View>
        ) : null}
      </View>

      <View style={styles.actionArea}>
        <Pressable
          onPress={handleBookmarkPress}
          hitSlop={8}
          style={({ pressed }) => [styles.bookmarkCircle, pressed ? styles.bookmarkPressed : null]}>
          <Animated.View style={{ opacity: bookmarkOpacity, transform: [{ scale: bookmarkScale }] }}>
            <Ionicons
              name={saved ? 'bookmark' : 'bookmark-outline'}
              size={21}
              color={saved ? colors.purple : colors.text}
            />
          </Animated.View>
        </Pressable>
        <Ionicons name="chevron-forward" size={20} color={colors.chevron} />
      </View>
    </AnimatedScalePressable>
  );
}

const styles = StyleSheet.create({
  card: {
    height: cardHeight,
    borderRadius: radius.xl,
    backgroundColor: colors.card,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingLeft: 9,
    paddingRight: 12,
    ...shadows.card,
  },
  content: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 4,
    justifyContent: 'center',
  },
  eyebrow: {
    color: colors.textSoft,
    fontSize: bodySize - 1,
    fontWeight: fontWeights.regular,
    letterSpacing: -0.3,
    lineHeight: bodySize + 2,
  },
  title: {
    color: colors.text,
    fontSize: titleSize,
    fontWeight: fontWeights.semibold,
    letterSpacing: -0.4,
    lineHeight: titleSize + 3,
  },
  subtitle: {
    color: colors.textSoft,
    fontSize: bodySize - 1,
    fontWeight: fontWeights.regular,
    letterSpacing: -0.3,
    lineHeight: bodySize + 2,
    marginTop: 1,
  },
  badgeRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
  badge: {
    minHeight: 19,
    maxWidth: '92%',
    borderRadius: radius.sm,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: badgeSize,
    fontWeight: fontWeights.semibold,
    letterSpacing: -0.25,
    lineHeight: badgeSize + 3,
    flexShrink: 1,
  },
  actionArea: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  bookmarkCircle: {
    width: bookmarkSize,
    height: bookmarkSize,
    borderRadius: radius.full,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookmarkPressed: {
    opacity: 0.76,
  },
});
