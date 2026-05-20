import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Linking,
  Pressable,
  Share,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
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
import { useAppPreferences } from '@/state/AppPreferencesContext';
import { getSimilarPerks, getWhyUsefulLines } from '@/utils/perkDiscovery';
import { openSupportMail } from '@/utils/support';

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
  const { width } = useWindowDimensions();
  const { id } = useLocalSearchParams<{ id?: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [openingLink, setOpeningLink] = useState(false);
  const { perks, loading } = usePerks();
  const { preferences } = useAppPreferences();
  const horizontalPadding = clampSize(width, spacing.screenMin, spacing.screenMax, 0.05);
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

  const currentPerk = perk;

  const category = categories.find((item) => item.id === currentPerk.category);
  const categoryLabel = category?.label ?? 'Perk';
  const categoryTone = category?.tone ?? 'purple';
  const externalUrl = currentPerk.externalUrl ?? '';
  const sourceUrl = currentPerk.sourceUrl ?? '';
  const hasExternalUrl = externalUrl.length > 0;
  const verifiedDateLabel = formatVerifiedDate(currentPerk.verifiedAt);
  const sourceHost = getSourceHost(sourceUrl);
  const whyUsefulLines = getWhyUsefulLines(currentPerk, preferences.audience);
  const similarPerks = getSimilarPerks(
    perks.filter((item) => item.isVerified),
    currentPerk,
    3
  );

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

  async function handleReportOutdated() {
    await openSupportMail(
      `Outdated offer report: ${currentPerk.title}`,
      `Hi Perk,\n\nI want to report a possibly outdated offer.\n\nPerk: ${currentPerk.title}\nProvider: ${currentPerk.provider}\nPerk ID: ${currentPerk.id}\nOfficial source: ${currentPerk.sourceUrl}\n\nWhat looks wrong:\n- \n\nThanks.`
    );
  }

  async function handleRequestSimilar() {
    await openSupportMail(
      `Perk request: more offers like ${currentPerk.company}`,
      `Hi Perk,\n\nI want to request more perks like this one.\n\nCurrent perk: ${currentPerk.title}\nProvider: ${currentPerk.provider}\nWhy it is useful:\n- \n\nRequested brand or category:\n- \n\nThanks.`
    );
  }

  async function handleShare() {
    const shareUrl = externalUrl || sourceUrl;
    const summaryLine = currentPerk.subtitle || currentPerk.badgeText || currentPerk.savingsValue;
    const shareMessage = [
      `${currentPerk.title} — ${currentPerk.company}`,
      summaryLine,
      shareUrl ? `Official link: ${shareUrl}` : null,
      'Shared from Perk',
    ]
      .filter(Boolean)
      .join('\n\n');

    try {
      await Share.share({
        message: shareMessage,
        url: shareUrl || undefined,
        title: currentPerk.title,
      });
    } catch {
      Alert.alert('Unable to share this perk right now.');
    }
  }

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingHorizontal: horizontalPadding,
            paddingTop: insets.top + spacing.sm,
            paddingBottom: insets.bottom + spacing.detailBottomPadding,
          },
        ]}>
        <DetailHeader
          onBack={() => router.back()}
          perkId={currentPerk.id}
          onShare={() => {
            void handleShare();
          }}
        />

        <PerkDetailHero
          perk={currentPerk}
          categoryLabel={categoryLabel}
          categoryTone={categoryTone}
        />

        <View style={styles.summaryRow}>
          <SummaryCard
            icon="cash-outline"
            label="Savings"
            value={currentPerk.savingsValue ?? currentPerk.badgeText ?? 'Available'}
            tone="green"
          />
          <SummaryCard
            icon="time-outline"
            label="Expires"
            value={currentPerk.expiryText ?? 'Ongoing'}
            tone="orange"
          />
        </View>

        <View style={styles.section}>
          <SectionHeader title="Verified" />
          <View style={styles.verificationCard}>
            <View style={styles.verificationTopRow}>
              {currentPerk.isVerified ? (
                <TrustBadge tone="verified" label="Verified source" />
              ) : null}
              <Text style={styles.verifiedDate}>Checked {verifiedDateLabel}</Text>
            </View>

            <View style={styles.metaRow}>
              <View style={styles.metaItem}>
                <Text style={styles.metaLabel}>Region</Text>
                <Text style={styles.metaValue}>{currentPerk.region}</Text>
              </View>
              <View style={styles.metaItem}>
                <Text style={styles.metaLabel}>Eligibility</Text>
                <Text style={styles.metaValue}>
                  {currentPerk.studentOnly ? 'Students only' : 'Public or mixed offer'}
                </Text>
              </View>
            </View>

            <Text style={styles.verifyNote}>
              Provider pricing, eligibility, and availability can change. Always confirm the
              official source before acting on an offer.
            </Text>

            <Pressable
              onPress={handleOpenSource}
              hitSlop={8}
              style={({ pressed }) => [styles.sourceRow, pressed ? styles.sourceRowPressed : null]}>
              <View style={styles.sourceTextWrap}>
                <Text style={styles.metaLabel}>Official source</Text>
                <Text style={styles.sourceValue} numberOfLines={1}>
                  {currentPerk.provider} · {sourceHost}
                </Text>
              </View>
              <Ionicons name="open-outline" size={18} color={colors.chevron} />
            </Pressable>

            <View style={styles.supportActions}>
              <Pressable
                onPress={handleReportOutdated}
                hitSlop={8}
                style={({ pressed }) => [styles.inlineAction, pressed ? styles.sourceRowPressed : null]}>
                <Text style={styles.inlineActionLabel}>Report outdated offer</Text>
              </Pressable>
              <Pressable
                onPress={handleRequestSimilar}
                hitSlop={8}
                style={({ pressed }) => [styles.inlineAction, pressed ? styles.sourceRowPressed : null]}>
                <Text style={styles.inlineActionLabel}>Request similar perk</Text>
              </Pressable>
            </View>
          </View>
        </View>

        {whyUsefulLines.length > 0 ? (
          <View style={styles.section}>
            <SectionHeader title="Why this is useful" />
            <View style={styles.whyUsefulCard}>
              {whyUsefulLines.map((line) => (
                <View key={line} style={styles.reasonRow}>
                  <View style={styles.reasonDot} />
                  <Text style={styles.reasonText}>{line}</Text>
                </View>
              ))}
            </View>
          </View>
        ) : null}

        <View style={styles.section}>
          <SectionHeader title="How to claim" />
          {currentPerk.howToClaim.map((step, index) => (
            <HowToClaimStep
              key={`${currentPerk.id}-${index + 1}`}
              stepNumber={index + 1}
              text={step}
            />
          ))}
        </View>

        <View style={styles.section}>
          <SectionHeader title="Terms" />
          <TermsCard terms={currentPerk.terms} />
        </View>

        {similarPerks.length > 0 ? (
          <View style={styles.section}>
            <SectionHeader title="Similar perks" />
            <View style={styles.similarList}>
              {similarPerks.map((similarPerk) => (
                <Pressable
                  key={similarPerk.id}
                  onPress={() => router.push({ pathname: '/perk/[id]', params: { id: similarPerk.id } })}
                  style={({ pressed }) => [styles.similarCard, pressed ? styles.sourceRowPressed : null]}>
                  <Text style={styles.similarCompany}>{similarPerk.company}</Text>
                  <Text style={styles.similarTitle} numberOfLines={2}>
                    {similarPerk.title}
                  </Text>
                  <Text style={styles.similarMeta} numberOfLines={1}>
                    {similarPerk.badgeText ?? similarPerk.savingsValue ?? similarPerk.expiryText ?? 'Verified offer'}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        ) : null}
      </ScrollView>

      <View
        style={[
          styles.buttonBar,
          {
            left: horizontalPadding,
            right: horizontalPadding,
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
    flexWrap: 'wrap',
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
  verifyNote: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 18,
    marginBottom: spacing.md,
  },
  supportActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  inlineAction: {
    flex: 1,
    minHeight: 40,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFBFD',
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
  },
  inlineActionLabel: {
    color: colors.text,
    fontSize: 13,
    fontWeight: fontWeights.medium,
    letterSpacing: -0.2,
  },
  whyUsefulCard: {
    borderRadius: radius.xxl,
    backgroundColor: colors.card,
    padding: spacing.lg,
    ...shadows.card,
  },
  reasonRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
  },
  reasonDot: {
    width: 8,
    height: 8,
    borderRadius: radius.full,
    backgroundColor: colors.lime,
    marginTop: 6,
  },
  reasonText: {
    flex: 1,
    color: colors.textSoft,
    fontSize: 14,
    lineHeight: 21,
  },
  similarList: {
    gap: spacing.sm,
  },
  similarCard: {
    borderRadius: radius.xl,
    backgroundColor: colors.card,
    padding: spacing.lg,
    ...shadows.subtle,
  },
  similarCompany: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: fontWeights.medium,
    marginBottom: spacing.xs,
  },
  similarTitle: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: fontWeights.semibold,
    letterSpacing: -0.3,
  },
  similarMeta: {
    color: colors.textSoft,
    fontSize: 13,
    lineHeight: 18,
    marginTop: spacing.sm,
  },
  buttonBar: {
    position: 'absolute',
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
