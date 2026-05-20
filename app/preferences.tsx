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

export default function PreferencesScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const {
    preferences,
    setAudience,
    setDiscoveryRegion,
    toggleInterest,
    completeOnboarding,
    resetPreferences,
  } = useAppPreferences();

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
        <SubpageHeader title="Preferences" onBack={() => router.back()} />

        <View style={styles.card}>
          <Text style={styles.title}>Shape your recommendations</Text>
          <Text style={styles.body}>
            Perk keeps these settings on this device and uses them to improve Home and Explore.
          </Text>

          <Text style={styles.groupTitle}>Audience</Text>
          <View style={styles.row}>
            <PreferencePill
              label="Student"
              active={preferences.audience === 'student'}
              onPress={() => setAudience('student')}
            />
            <PreferencePill
              label="Early-career"
              active={preferences.audience === 'early-career'}
              onPress={() => setAudience('early-career')}
            />
          </View>

          <Text style={styles.groupTitle}>Discovery region</Text>
          <View style={styles.row}>
            <PreferencePill
              label="Australia first"
              active={preferences.discoveryRegion === 'australia'}
              onPress={() => setDiscoveryRegion('australia')}
            />
            <PreferencePill
              label="Global mix"
              active={preferences.discoveryRegion === 'global'}
              onPress={() => setDiscoveryRegion('global')}
            />
          </View>

          <Text style={styles.groupTitle}>Interests</Text>
          <View style={styles.wrap}>
            {categories.map((category) => (
              <PreferencePill
                key={category.id}
                label={category.label}
                active={preferences.interests.includes(category.id)}
                onPress={() => toggleInterest(category.id)}
              />
            ))}
          </View>

          <Text style={styles.groupTitle}>Notifications</Text>
          <Text style={styles.body}>
            Want category-based update preferences too? You can fine-tune them from Notification
            setup.
          </Text>
          <View style={styles.footerRow}>
            <PreferencePill label="Notification setup" onPress={() => router.push('/notifications')} />
          </View>

          <View style={styles.footerRow}>
            <PreferencePill label="Reset" onPress={resetPreferences} />
            {!preferences.hasCompletedOnboarding ? (
              <PreferencePill label="Finish setup" active onPress={completeOnboarding} />
            ) : null}
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
  footerRow: {
    marginTop: spacing.xl,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
});
