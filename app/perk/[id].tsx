import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Dimensions,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DetailHeader } from '@/components/DetailHeader';
import { HowToClaimStep } from '@/components/HowToClaimStep';
import { PerkDetailHero } from '@/components/PerkDetailHero';
import { PrimaryButton } from '@/components/PrimaryButton';
import { SectionHeader } from '@/components/SectionHeader';
import { TermsCard } from '@/components/TermsCard';
import { TrustBadge } from '@/components/TrustBadge';
import { categoryToneColors, colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { clampSize, spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';
import { categories } from '@/data/categories';
import { usePerks } from '@/hooks/usePerks';

const { width } = Dimensions.get('window');
const horizontalPadding = clampSize(width, spacing.screenMin, spacing.screenMax, 0.05);

function SummaryCard({
  icon,
  label,
  value,
  tone,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
  tone: keyof typeof categoryToneColors;
}) {
  const accent = categoryToneColors[tone];

  return (
    <View style={styles.summaryCard}>
      <View style={[styles.summaryIcon, { backgroundColor: accent.background }]}>
        <Ionicons name={icon} size={18} color={accent.icon} />
      </View>
      <Text style={styles.summaryLabel}>{label}</Text>
      <Text style={styles.summaryValue}>{value}</Text>
    </View>
  );
}

function formatVerifiedDate(dateValue: string) {
  const [year, month, day] = dateValue.split('-').map(Number);

  if (!year || !month || !day) {
    return dateValue;
  }

  return new Date(year, month - 1, day).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function getSourceHost(url: string) {
  try {
    return new URL(url).hostname.replace('www.', '');
  } catch {
    return url;
  }
}

export default function PerkDetailScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [openingLink, setOpeningLink] = useState(false);
  const { perks, loading } = usePerks();
  const perk = id ? perks.find((item) => item.id === id) : undefined;

  if (loading && !perk) {
    return (
      <View style={styles.notFoundScreen}>
        <Text style={styles.notFoundText}>Loading perk...</Text>
      </View>
    );
  }

  if (!perk) {
    return (
      <View style={styles.notFoundScreen}>
        <Text style={styles.notFoundText}>Perk not found</Text>
      </View>
    );
  }

  const category = categories.find((item) => item.id === perk.category);
  const categoryLabel = category?.label ?? 'Perk';
  const categoryTone = category?.tone ?? 'purple';
  const externalUrl = perk.externalUrl ?? '';
  const sourceUrl = perk.sourceUrl ?? '';
  const hasExternalUrl = externalUrl.length > 0;
  const verifiedDateLabel = formatVerifiedDate(perk.verifiedAt);
  const sourceHost = getSourceHost(sourceUrl);

  async function openLink(url: string, useLoadingState = false) {
    if (!url || (useLoadingState && openingLink)) {
      return;
    }

    try {
      if (useLoadingState) {
        setOpeningLink(true);
      }

      const canOpen = await Linking.canOpenURL(url);

      if (!canOpen) {
        Alert.alert('Unable to open this perk right now.');
        return;
      }

      await Linking.openURL(url);
    } catch {
      Alert.alert('Unable to open this perk right now.');
    } finally {
      if (useLoadingState) {
        setOpeningLink(false);
      }
    }
  }

  async function handleOpenPerk() {
    await openLink(externalUrl, true);
  }

  async function handleOpenSource() {
    await openLink(sourceUrl);
  }

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: insets.top + spacing.sm,
            paddingBottom: insets.bottom + spacing.detailBottomPadding,
          },
        ]}>
        <DetailHeader onBack={() => router.back()} perkId={perk.id} />

        <PerkDetailHero perk={perk} categoryLabel={categoryLabel} categoryTone={categoryTone} />

        <View style={styles.summaryRow}>
          <SummaryCard icon="cash-outline" label="Savings" value={perk.savingsValue ?? perk.badgeText ?? 'Available'} tone="green" />
          <SummaryCard icon="time-outline" label="Expires" value={perk.expiryText ?? 'Ongoing'} tone="orange" />
        </View>

        <View style={styles.section}>
          <SectionHeader title="Verified" />
          <View style={styles.verificationCard}>
            <View style={styles.verificationTopRow}>
              {perk.isVerified ? (
                <TrustBadge tone="verified" label="Verified source" />
              ) : null}
              <Text style={styles.verifiedDate}>Checked {verifiedDateLabel}</Text>
            </View>

            <View style={styles.metaRow}>
              <View style={styles.metaItem}>
                <Text style={styles.metaLabel}>Region</Text>
                <Text style={styles.metaValue}>{perk.region}</Text>
              </View>
              <View style={styles.metaItem}>
                <Text style={styles.metaLabel}>Eligibility</Text>
                <Text style={styles.metaValue}>{perk.studentOnly ? 'Students only' : 'Public or mixed offer'}</Text>
              </View>
            </View>

            <Pressable
              onPress={handleOpenSource}
              hitSlop={8}
              style={({ pressed }) => [styles.sourceRow, pressed ? styles.sourceRowPressed : null]}>
              <View style={styles.sourceTextWrap}>
                <Text style={styles.metaLabel}>Official source</Text>
                <Text style={styles.sourceValue} numberOfLines={1}>
                  {perk.provider} · {sourceHost}
                </Text>
              </View>
              <Ionicons name="open-outline" size={18} color={colors.chevron} />
            </Pressable>
          </View>
        </View>

        <View style={styles.section}>
          <SectionHeader title="How to claim" />
          {perk.howToClaim.map((step, index) => (
            <HowToClaimStep key={`${perk.id}-${index + 1}`} stepNumber={index + 1} text={step} />
          ))}
        </View>

        <View style={styles.section}>
          <SectionHeader title="Terms" />
          <TermsCard terms={perk.terms} />
        </View>
      </ScrollView>

      <View
        style={[
          styles.buttonBar,
          {
            paddingBottom: Math.max(insets.bottom + spacing.xs, spacing.md),
          },
        ]}>
        <PrimaryButton
          label={hasExternalUrl ? 'Get this perk' : 'Link unavailable'}
          loading={openingLink}
          disabled={!hasExternalUrl}
          onPress={handleOpenPerk}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingHorizontal: horizontalPadding,
  },
  summaryRow: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.sectionGap,
  },
  summaryCard: {
    flex: 1,
    borderRadius: radius.xxl,
    backgroundColor: colors.card,
    padding: spacing.lg,
    ...shadows.card,
  },
  summaryIcon: {
    width: 34,
    height: 34,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  summaryLabel: {
    color: colors.textSoft,
    fontSize: 13,
    fontWeight: fontWeights.medium,
    lineHeight: 17,
    marginBottom: spacing.xs,
  },
  summaryValue: {
    color: colors.text,
    fontSize: 18,
    fontWeight: fontWeights.semibold,
    letterSpacing: -0.3,
    lineHeight: 22,
  },
  section: {
    marginBottom: spacing.sectionGap,
  },
  verificationCard: {
    borderRadius: radius.xxl,
    backgroundColor: colors.card,
    padding: spacing.lg,
    ...shadows.card,
  },
  verificationTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  verifiedDate: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: fontWeights.medium,
  },
  metaRow: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  metaItem: {
    flex: 1,
    borderRadius: radius.lg,
    backgroundColor: '#FAFBFD',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 2,
  },
  metaLabel: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: fontWeights.medium,
    marginBottom: spacing.xs,
  },
  metaValue: {
    color: colors.text,
    fontSize: 14,
    fontWeight: fontWeights.medium,
    letterSpacing: -0.2,
    lineHeight: 18,
  },
  sourceRow: {
    minHeight: 48,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 2,
  },
  sourceRowPressed: {
    opacity: 0.76,
  },
  sourceTextWrap: {
    flex: 1,
    paddingRight: spacing.md,
  },
  sourceValue: {
    color: colors.text,
    fontSize: 14,
    fontWeight: fontWeights.medium,
    letterSpacing: -0.2,
  },
  buttonBar: {
    position: 'absolute',
    left: horizontalPadding,
    right: horizontalPadding,
    bottom: 0,
    paddingTop: spacing.md,
    paddingHorizontal: spacing.xs,
    backgroundColor: colors.background,
  },
  notFoundScreen: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xxl,
  },
  notFoundText: {
    color: colors.textSoft,
    fontSize: 18,
    fontWeight: fontWeights.medium,
  },
});
