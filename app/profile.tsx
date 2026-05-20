import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BottomTabBar } from '@/components/BottomTabBar';
import { ProfileStatCard } from '@/components/ProfileStatCard';
import { ProfileSummaryCard } from '@/components/ProfileSummaryCard';
import { SectionHeader } from '@/components/SectionHeader';
import { SettingsRow } from '@/components/SettingsRow';
import { colors } from '@/constants/colors';
import { clampSize, spacing } from '@/constants/spacing';
import { usePerks } from '@/hooks/usePerks';
import { useAppPreferences } from '@/state/AppPreferencesContext';
import { useSavedPerks } from '@/state/SavedPerksContext';
import {
  openSupportMail,
} from '@/utils/support';
import { getActivePerksCount, getVerifiedPerksCount } from '@/utils/perkStats';

export default function ProfileScreen() {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { perks } = usePerks();
  const { savedPerkIds } = useSavedPerks();
  const { preferences } = useAppPreferences();
  const activeCount = getActivePerksCount(perks);
  const verifiedCount = getVerifiedPerksCount(perks);
  const audienceLabel =
    preferences.audience === 'early-career' ? 'Early-career setup' : 'Student setup';
  const regionLabel =
    preferences.discoveryRegion === 'global' ? 'Global mix' : 'Australia-first discovery';
  const horizontalPadding = clampSize(width, spacing.screenMin, spacing.screenMax, 0.05);

  async function handleReportOutdated() {
    await openSupportMail(
      'Outdated offer report',
      'Hi Perk,\n\nI want to report an outdated offer.\n\nOffer title:\nProvider:\nSource URL:\nWhat looks wrong:\n-\n\nThanks.'
    );
  }

  async function handleRequestPerk() {
    await openSupportMail(
      'Perk request',
      'Hi Perk,\n\nI would like to request a perk or provider.\n\nRequested brand or perk:\nCategory:\nWhy it would be useful:\n-\n\nThanks.'
    );
  }

  async function handleNotificationInterest() {
    router.push('/notifications');
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
            paddingBottom: insets.bottom + spacing.bottomScrollPadding,
          },
        ]}>
        <SectionHeader title="Profile" />

        <View style={styles.summarySection}>
          <ProfileSummaryCard
            title="Perk on this device"
            subtitle={audienceLabel}
            pillLabel="Local preferences"
            note={`Saved perks and display preferences stay on this device. Current discovery mode: ${regionLabel}.`}
          />
        </View>

        <View style={styles.summarySection}>
          <ProfileStatCard
            savedCount={savedPerkIds.length}
            activeCount={activeCount}
            verifiedCount={verifiedCount}
          />
        </View>

        <View style={styles.section}>
          <SectionHeader title="Preferences" />
          <View style={styles.rowGroup}>
            <SettingsRow
              label="Saved perks"
              value="Stored locally on this device"
              onPress={() => router.push('/saved')}
            />
            <SettingsRow
              label="Recommendation setup"
              value={`${audienceLabel} · ${regionLabel}`}
              onPress={() => router.push('/preferences')}
            />
            <SettingsRow
              label="Discovery region"
              value="Australia and global verified offers"
              onPress={() => router.push('/preferences')}
            />
            <SettingsRow
              label="Offer sources"
              value="Official provider pages only"
              onPress={() => router.push('/about')}
            />
            <SettingsRow
              label="Notifications"
              value="Choose which categories you want to keep an eye on."
              onPress={() => {
                void handleNotificationInterest();
              }}
            />
          </View>
        </View>

        <View style={styles.section}>
          <SectionHeader title="Trust & Support" />
          <View style={styles.rowGroup}>
            <SettingsRow
              label="Verified offers"
              value="Perks are checked against official provider sources."
              onPress={() => router.push('/about')}
            />
            <SettingsRow
              label="Privacy Policy"
              value="What Perk stores locally, what third parties are used, and what data is not collected."
              onPress={() => router.push('/privacy')}
            />
            <SettingsRow
              label="Help"
              value="How Perk works, how saved perks are stored, and how to report outdated offers."
              onPress={() => router.push('/help')}
            />
            <SettingsRow
              label="Contact support"
              value="Open the support centre for help, reports, and requests."
              onPress={() => router.push('/support')}
            />
            <SettingsRow
              label="Business inquiry"
              value="Partnerships, providers, or commercial questions."
              onPress={() => router.push('/support')}
            />
            <SettingsRow
              label="Report outdated offer"
              value="Send a quick email if a provider page changes or a perk expires."
              onPress={() => {
                void handleReportOutdated();
              }}
            />
            <SettingsRow
              label="Request a perk"
              value="Tell Perk which provider, bill, tool, or savings program should be added next."
              onPress={() => {
                void handleRequestPerk();
              }}
            />
            <SettingsRow
              label="About Perk"
              value="What the app is for, how offers are verified, and what could ship next."
              onPress={() => router.push('/about')}
            />
            <SettingsRow
              label="App version"
              value="Release prep build"
              onPress={() => router.push('/about')}
            />
          </View>
        </View>
      </ScrollView>
      <BottomTabBar />
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
  summarySection: {
    marginTop: spacing.md,
  },
  section: {
    marginTop: spacing.sectionGap,
  },
  rowGroup: {
    gap: spacing.sm,
  },
});
