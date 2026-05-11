import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BottomTabBar } from '@/components/BottomTabBar';
import { ProfileStatCard } from '@/components/ProfileStatCard';
import { ProfileSummaryCard } from '@/components/ProfileSummaryCard';
import { SectionHeader } from '@/components/SectionHeader';
import { SettingsRow } from '@/components/SettingsRow';
import { colors } from '@/constants/colors';
import { clampSize, spacing } from '@/constants/spacing';

const { width } = Dimensions.get('window');
const horizontalPadding = clampSize(width, spacing.screenMin, spacing.screenMax, 0.05);

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: insets.top + spacing.sm,
            paddingBottom: insets.bottom + spacing.bottomScrollPadding,
          },
        ]}>
        <SectionHeader title="Profile" />

        <View style={styles.summarySection}>
          <ProfileSummaryCard />
        </View>

        <View style={styles.summarySection}>
          <ProfileStatCard />
        </View>

        <View style={styles.section}>
          <SectionHeader title="Preferences" />
          <View style={styles.rowGroup}>
            <SettingsRow label="Categories" value="Banking, Food, Student Deals" />
            <SettingsRow label="Location" value="Brisbane, AU" />
            <SettingsRow label="Student status" value="Verified student" />
            <SettingsRow label="Notifications" value="New perks and reminders" />
          </View>
        </View>

        <View style={styles.section}>
          <SectionHeader title="Settings" />
          <View style={styles.rowGroup}>
            <SettingsRow
              label="Verified offers"
              value="Perks are checked against official provider sources."
            />
            <SettingsRow label="Privacy" />
            <SettingsRow label="Help" />
            <SettingsRow label="About Perk" />
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
    paddingHorizontal: horizontalPadding,
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
