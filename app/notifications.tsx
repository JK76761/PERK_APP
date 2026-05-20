import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PreferencePill } from '@/components/PreferencePill';
import { SubpageHeader } from '@/components/SubpageHeader';
import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';
import { categories } from '@/data/categories';
import { useAppPreferences } from '@/state/AppPreferencesContext';

export default function NotificationsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const {
    preferences,
    setNotificationsEnabled,
    toggleNotificationCategory,
  } = useAppPreferences();

  const enabledCount = preferences.notificationCategories.length;

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: insets.top + spacing.sm,
            paddingBottom: insets.bottom + spacing.xxl,
          },
        ]}>
        <SubpageHeader title="Notification setup" onBack={() => router.back()} />

        <View style={styles.card}>
          <Text style={styles.title}>Stay on top of new perks</Text>
          <Text style={styles.body}>
            Perk saves these notification preferences on this device so the app can highlight the
            categories you care about most.
          </Text>

          <Text style={styles.groupTitle}>Updates</Text>
          <View style={styles.row}>
            <PreferencePill
              label="Enabled"
              active={preferences.notificationsEnabled}
              onPress={() => setNotificationsEnabled(true)}
            />
            <PreferencePill
              label="Paused"
              active={!preferences.notificationsEnabled}
              onPress={() => setNotificationsEnabled(false)}
            />
          </View>

          <Text style={styles.groupTitle}>Categories</Text>
          <Text style={styles.helper}>
            Pick the categories you want Perk to surface more prominently across the app.
          </Text>
          <View style={styles.wrap}>
            {categories.map((category) => (
              <PreferencePill
                key={category.id}
                label={category.label}
                active={
                  preferences.notificationsEnabled &&
                  preferences.notificationCategories.includes(category.id)
                }
                onPress={() => toggleNotificationCategory(category.id)}
              />
            ))}
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryTitle}>
              {preferences.notificationsEnabled
                ? `${enabledCount} categories selected`
                : 'Updates are currently paused'}
            </Text>
            <Text style={styles.summaryBody}>
              {preferences.notificationsEnabled
                ? 'Perk will use these categories to shape future update callouts and notification-style highlights.'
                : 'You can turn updates back on at any time and choose exactly which categories matter most.'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: spacing.screenMin,
    gap: spacing.md,
  },
  card: {
    borderRadius: radius.xxl,
    backgroundColor: colors.card,
    padding: spacing.lg,
    ...shadows.card,
  },
  title: {
    color: colors.text,
    fontSize: 22,
    fontWeight: fontWeights.bold,
    letterSpacing: -0.6,
    marginBottom: spacing.sm,
  },
  body: {
    color: colors.textSoft,
    fontSize: 14,
    lineHeight: 20,
  },
  groupTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: fontWeights.semibold,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
    letterSpacing: -0.2,
  },
  helper: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 19,
    marginBottom: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  summaryCard: {
    marginTop: spacing.xl,
    borderRadius: radius.xl,
    backgroundColor: '#F7F9FC',
    padding: spacing.md,
  },
  summaryTitle: {
    color: colors.text,
    fontSize: 14,
    fontWeight: fontWeights.semibold,
    marginBottom: spacing.xs,
  },
  summaryBody: {
    color: colors.textSoft,
    fontSize: 13,
    lineHeight: 19,
  },
});
