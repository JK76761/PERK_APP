import { useRouter } from 'expo-router';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BottomTabBar } from '@/components/BottomTabBar';
import { CategoryButton } from '@/components/CategoryButton';
import { FadeInView } from '@/components/FadeInView';
import { HeroSavings } from '@/components/HeroSavings';
import { HomeHeader } from '@/components/HomeHeader';
import { PerkCard } from '@/components/PerkCard';
import { SectionHeader } from '@/components/SectionHeader';
import { StatsSummaryCard } from '@/components/StatsSummaryCard';
import { TrustBadge } from '@/components/TrustBadge';
import { colors } from '@/constants/colors';
import { clampSize, spacing } from '@/constants/spacing';
import { categories } from '@/data/categories';
import { usePerks } from '@/hooks/usePerks';
import {
  getActivePerksCount,
  getCashValueTotal,
  getHomeFeaturedPerks,
  getPotentialSavingsLabel,
  getVerifiedPerksCount,
} from '@/utils/perkStats';

const { width } = Dimensions.get('window');
const horizontalPadding = clampSize(width, spacing.screenMin, spacing.screenMax, 0.05);

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { perks, loading } = usePerks();
  const activeCount = getActivePerksCount(perks);
  const verifiedCount = getVerifiedPerksCount(perks);
  const cashTotal = getCashValueTotal(perks);
  const cashTotalLabel = getPotentialSavingsLabel(perks);
  const homePerks = getHomeFeaturedPerks(perks);
  const homeCategories = categories.slice(0, 6);
  const heroEyebrow = cashTotal > 0 ? 'You could claim' : 'Verified perks';
  const heroAmount = cashTotal > 0 ? cashTotalLabel ?? '$0' : `${verifiedCount}+`;
  const heroSupport = cashTotal > 0 ? 'in verified cash bonuses' : 'ready to explore';
  const statsLeftValue = cashTotal > 0 ? `${activeCount}` : `${verifiedCount}`;
  const statsLeftLabel = cashTotal > 0 ? 'active verified perks' : 'verified offers';
  const statsRightValue = cashTotal > 0 ? cashTotalLabel ?? '$0' : `${verifiedCount}`;
  const statsRightLabel = cashTotal > 0 ? 'verified cash bonuses' : 'updated from official sources';

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: insets.top + 2,
            paddingBottom: insets.bottom + spacing.bottomScrollPadding,
          },
        ]}
      >
        <HomeHeader />

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
          />
          {loading ? <Text style={styles.loadingText}>Refreshing verified offers...</Text> : null}
        </View>

        <SectionHeader
          title="🔥 Hot right now"
          actionLabel="See all"
          onActionPress={() => router.push('/explore')}
        />

        <FadeInView style={styles.perkList}>
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
});
