import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BottomTabBar } from '@/components/BottomTabBar';
import { CategoryButton } from '@/components/CategoryButton';
import { FadeInView } from '@/components/FadeInView';
import { HeroSavings } from '@/components/HeroSavings';
import { HomeHeader } from '@/components/HomeHeader';
import { OnboardingCard } from '@/components/OnboardingCard';
import { PerkCard } from '@/components/PerkCard';
import { SectionHeader } from '@/components/SectionHeader';
import { StatsSummaryCard } from '@/components/StatsSummaryCard';
import { TrustBadge } from '@/components/TrustBadge';
import { colors } from '@/constants/colors';
import { clampSize, spacing } from '@/constants/spacing';
import { categories } from '@/data/categories';
import { usePerks } from '@/hooks/usePerks';
import { useAppPreferences } from '@/state/AppPreferencesContext';
import {
  getFoodSavingsPerks,
  getFreeToolsPerks,
  getResearchPerks,
  sortPerks,
} from '@/utils/perkDiscovery';
import {
  getActivePerks,
  getActivePerksCount,
  getCashValueTotal,
  getHomeFeaturedPerks,
  getPotentialSavingsLabel,
  getVerifiedPerksCount,
} from '@/utils/perkStats';

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { perks, loading } = usePerks();
  const {
    preferences,
    setAudience,
    setDiscoveryRegion,
    toggleInterest,
    completeOnboarding,
  } = useAppPreferences();
  const activeCount = getActivePerksCount(perks);
  const verifiedCount = getVerifiedPerksCount(perks);
  const cashTotal = getCashValueTotal(perks);
  const cashTotalLabel = getPotentialSavingsLabel(perks);
  const homePerks = getHomeFeaturedPerks(perks);
  const activePerks = getActivePerks(perks);
  const recommendedPerks = sortPerks(activePerks, 'recommended', preferences);
  const personalPicks = recommendedPerks.slice(0, 3);
  const freeTools = getFreeToolsPerks(recommendedPerks, 2);
  const foodSavings = getFoodSavingsPerks(recommendedPerks, 2);
  const earnOnline = getResearchPerks(recommendedPerks, 2);
  const homeCategories = categories.filter((category) => category.id !== 'research-rewards').slice(0, 6);
  const notificationsActive =
    preferences.notificationsEnabled && preferences.notificationCategories.length > 0;
  const horizontalPadding = clampSize(width, spacing.screenMin, spacing.screenMax, 0.05);
  const heroEyebrow = cashTotal > 0 ? 'Verified cash offers' : 'Verified perks';
  const heroAmount = cashTotal > 0 ? cashTotalLabel ?? '$0' : `${verifiedCount}+`;
  const heroSupport = cashTotal > 0 ? 'counted clearly today' : 'ready to explore';
  const statsLeftValue = cashTotal > 0 ? `${activeCount}` : `${verifiedCount}`;
  const statsLeftLabel = cashTotal > 0 ? 'active verified perks' : 'verified offers';
  const statsRightValue = cashTotal > 0 ? cashTotalLabel ?? '$0' : `${verifiedCount}`;
  const statsRightLabel = cashTotal > 0 ? 'counted cash offers' : 'updated from official sources';
  const personalSectionTitle =
    preferences.audience === 'early-career' ? 'Good for early-career life' : 'Picked for you';

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingHorizontal: horizontalPadding,
            paddingTop: insets.top + 2,
            paddingBottom: insets.bottom + spacing.bottomScrollPadding,
          },
        ]}
      >
        <HomeHeader
          onNotificationsPress={() => router.push('/notifications')}
          showNotificationDot={notificationsActive}
        />

        <View style={styles.heroArea}>
          <HeroSavings eyebrow={heroEyebrow} amount={heroAmount} support={heroSupport} />
          <View style={styles.trustRow}>
            <TrustBadge
              tone="source"
              label={`${verifiedCount} offers verified from official sources`}
            />
          </View>
          <StatsSummaryCard
            leftValue={statsLeftValue}
            leftLabel={statsLeftLabel}
            rightValue={statsRightValue}
            rightLabel={statsRightLabel}
            onPress={() =>
              router.push({
                pathname: '/explore',
                params: { category: cashTotal > 0 ? 'banking' : 'all' },
              })
            }
          />
          {loading ? <Text style={styles.loadingText}>Refreshing verified offers...</Text> : null}
        </View>

        {!preferences.hasCompletedOnboarding ? (
          <View style={styles.onboardingSection}>
            <OnboardingCard
              preferences={preferences}
              onAudiencePress={setAudience}
              onRegionPress={setDiscoveryRegion}
              onInterestPress={toggleInterest}
              onFinishPress={completeOnboarding}
              onManagePress={() => router.push('/preferences')}
            />
          </View>
        ) : null}

        <SectionHeader
          title="🔥 Hot right now"
          actionLabel="See all"
          onActionPress={() => router.push('/explore')}
        />

        <FadeInView style={styles.perkList} delay={40}>
          {homePerks.map((perk) => (
            <PerkCard
              key={perk.id}
              perk={perk}
              onPress={() => router.push({ pathname: '/perk/[id]', params: { id: perk.id } })}
            />
          ))}
        </FadeInView>

        <View style={styles.categorySection}>
          <SectionHeader
            title="Browse by category"
            actionLabel="See all"
            onActionPress={() => router.push('/explore')}
          />
          <View style={styles.categoryRow}>
            {homeCategories.map((category) => (
              <CategoryButton
                key={category.id}
                category={category}
                onPress={() =>
                  router.push({
                    pathname: '/explore',
                    params: { category: category.id },
                  })
                }
              />
            ))}
          </View>
        </View>

        {personalPicks.length > 0 ? (
          <View style={styles.recommendationSection}>
            <SectionHeader title={personalSectionTitle} actionLabel="Tune" onActionPress={() => router.push('/preferences')} />
            <FadeInView style={styles.recommendationList} delay={80}>
              {personalPicks.map((perk) => (
                <PerkCard
                  key={perk.id}
                  perk={perk}
                  onPress={() => router.push({ pathname: '/perk/[id]', params: { id: perk.id } })}
                />
              ))}
            </FadeInView>
          </View>
        ) : null}

        {foodSavings.length > 0 ? (
          <View style={styles.recommendationSection}>
            <SectionHeader
              title="Save on food"
              actionLabel="See all"
              onActionPress={() => router.push({ pathname: '/explore', params: { category: 'food' } })}
            />
            <FadeInView style={styles.recommendationList} delay={120}>
              {foodSavings.map((perk) => (
                <PerkCard
                  key={perk.id}
                  perk={perk}
                  onPress={() => router.push({ pathname: '/perk/[id]', params: { id: perk.id } })}
                />
              ))}
            </FadeInView>
          </View>
        ) : null}

        {freeTools.length > 0 ? (
          <View style={styles.recommendationSection}>
            <SectionHeader
              title="Best free tools"
              actionLabel="Explore"
              onActionPress={() => router.push('/explore')}
            />
            <FadeInView style={styles.recommendationList} delay={160}>
              {freeTools.map((perk) => (
                <PerkCard
                  key={perk.id}
                  perk={perk}
                  onPress={() => router.push({ pathname: '/perk/[id]', params: { id: perk.id } })}
                />
              ))}
            </FadeInView>
          </View>
        ) : null}

        {earnOnline.length > 0 ? (
          <View style={styles.recommendationSection}>
            <SectionHeader
              title="Earn money online"
              actionLabel="See all"
              onActionPress={() =>
                router.push({ pathname: '/explore', params: { category: 'research-rewards' } })
              }
            />
            <FadeInView style={styles.recommendationList} delay={200}>
              {earnOnline.map((perk) => (
                <PerkCard
                  key={perk.id}
                  perk={perk}
                  onPress={() => router.push({ pathname: '/perk/[id]', params: { id: perk.id } })}
                />
              ))}
            </FadeInView>
          </View>
        ) : null}
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
  heroArea: {
    marginTop: spacing.heroGap,
    marginBottom: spacing.xl,
  },
  trustRow: {
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  loadingText: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: spacing.sm,
  },
  onboardingSection: {
    marginBottom: spacing.sectionGap,
  },
  perkList: {
    gap: 2,
  },
  categorySection: {
    marginTop: spacing.sectionGap,
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 0,
  },
  recommendationSection: {
    marginTop: spacing.sectionGap,
  },
  recommendationList: {
    gap: spacing.sm,
  },
});
