import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BottomTabBar } from '@/components/BottomTabBar';
import { CategoryChip } from '@/components/CategoryChip';
import { CollectionCard } from '@/components/CollectionCard';
import { EmptyState } from '@/components/EmptyState';
import { ExploreFeatureCard } from '@/components/ExploreFeatureCard';
import { FadeInView } from '@/components/FadeInView';
import { PerkCard } from '@/components/PerkCard';
import { PreferencePill } from '@/components/PreferencePill';
import { SearchBar } from '@/components/SearchBar';
import { SectionHeader } from '@/components/SectionHeader';
import { TrustBadge } from '@/components/TrustBadge';
import { colors } from '@/constants/colors';
import { clampSize, spacing } from '@/constants/spacing';
import { categories, type CategoryId } from '@/data/categories';
import { usePerks } from '@/hooks/usePerks';
import { useAppPreferences } from '@/state/AppPreferencesContext';
import type { Perk } from '@/types/perk';
import {
  type ExploreSortKey,
  getFoodSavingsPerks,
  getFreeToolsPerks,
  getResearchPerks,
  isAustraliaFocused,
  isFreePerk,
  sortPerks,
} from '@/utils/perkDiscovery';
import { getActivePerks, getActivePerksCount } from '@/utils/perkStats';
import { useEffect, useState } from 'react';

function matchesSearch(perk: Perk, searchText: string) {
  const category = categories.find((item) => item.id === perk.category);
  const haystack = [
    perk.company,
    perk.title,
    perk.subtitle,
    perk.category,
    category?.label ?? '',
  ]
    .join(' ')
    .toLowerCase();

  return haystack.includes(searchText.toLowerCase().trim());
}

function getCategoryParamValue(categoryParam?: string | string[]): string | undefined {
  if (Array.isArray(categoryParam)) {
    return categoryParam[0];
  }

  return categoryParam;
}

function isValidCategoryId(value?: string): value is CategoryId {
  if (!value) {
    return false;
  }

  return categories.some((category) => category.id === value);
}

function getTrendingPerks(perks: Perk[], limit = 6) {
  const curated = perks.filter((perk) => perk.isTrending || perk.isFeatured);
  const filtered = curated.filter((perk) => perk.id !== 'apple-education-pricing-au');
  const researchPick = perks.find((perk) => perk.category === 'research-rewards');
  const ordered = researchPick
    ? [researchPick, ...filtered.filter((perk) => perk.id !== researchPick.id)]
    : filtered;
  const fallback = ordered.length > 0 ? ordered : perks;
  return fallback.slice(0, limit);
}

export default function ExploreScreen() {
  const { width } = useWindowDimensions();
  const params = useLocalSearchParams<{ category?: string | string[] }>();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [sortBy, setSortBy] = useState<ExploreSortKey>('recommended');
  const [studentOnlyOnly, setStudentOnlyOnly] = useState(false);
  const [australiaOnly, setAustraliaOnly] = useState(false);
  const [freeOnly, setFreeOnly] = useState(false);
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const categoryParam = getCategoryParamValue(params.category);
  const { perks, loading } = usePerks();
  const { preferences } = useAppPreferences();
  const activeCount = getActivePerksCount(perks);
  const activePerks = getActivePerks(perks);
  const recommendedPerks = sortPerks(activePerks, 'recommended', preferences);
  const trendingPerks = getTrendingPerks(recommendedPerks);
  const foodPerks = getFoodSavingsPerks(recommendedPerks, 3);
  const researchPerks = getResearchPerks(recommendedPerks, 3);
  const aiPerks = getFreeToolsPerks(recommendedPerks, 3);
  const discoveryMode = selectedCategory === 'all' && query.trim().length === 0;
  const horizontalPadding = clampSize(width, spacing.screenMin, spacing.screenMax, 0.05);

  useEffect(() => {
    if (isValidCategoryId(categoryParam)) {
      setSelectedCategory(categoryParam);
      return;
    }

    setSelectedCategory('all');
  }, [categoryParam]);

  const filteredPerks = activePerks.filter((perk) => {
    const categoryMatches = selectedCategory === 'all' || perk.category === selectedCategory;
    const queryMatches = query.trim().length === 0 || matchesSearch(perk, query);
    const studentMatches = !studentOnlyOnly || perk.studentOnly;
    const regionMatches = !australiaOnly || isAustraliaFocused(perk);
    const freeMatches = !freeOnly || isFreePerk(perk);

    return categoryMatches && queryMatches && studentMatches && regionMatches && freeMatches;
  });
  const sortedFilteredPerks = sortPerks(filteredPerks, sortBy, preferences);
  const selectedCategoryHasVerifiedPerks =
    selectedCategory === 'all' ||
    activePerks.some((perk) => perk.category === selectedCategory);
  const showCategoryPendingState =
    selectedCategory !== 'all' &&
    query.trim().length === 0 &&
    !selectedCategoryHasVerifiedPerks;

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
        <SectionHeader title="Explore" />

        <View style={styles.trustRow}>
          <TrustBadge tone="source" label={`${activeCount} verified offers`} />
        </View>
        <Text style={styles.introText}>
          Discover verified ways to save on food, software, banking, transport, and early-career
          life.
        </Text>
        {loading ? <Text style={styles.loadingText}>Refreshing verified offers...</Text> : null}

        <View style={styles.searchWrap}>
          <SearchBar value={query} onChangeText={setQuery} />
        </View>

        {discoveryMode ? (
          <View style={styles.quickStartSection}>
            <SectionHeader title="Trending this week" />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.featureRow}>
              {trendingPerks.map((perk) => (
                <ExploreFeatureCard
                  key={perk.id}
                  perk={perk}
                  onPress={() =>
                    router.push({ pathname: '/perk/[id]', params: { id: perk.id } })
                  }
                />
              ))}
            </ScrollView>

            <SectionHeader title="Collections" />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.collectionRow}>
              <CollectionCard
                title="Best free tools"
                subtitle="Useful free software and study tools first."
                onPress={() => {
                  setSortBy('free-first');
                  setSelectedCategory('all');
                }}
              />
              <CollectionCard
                title="Save on food"
                subtitle="Good everyday wins for meals and dining."
                onPress={() => setSelectedCategory('food')}
              />
              <CollectionCard
                title="Earn money online"
                subtitle="Paid studies and research rewards in one place."
                onPress={() => setSelectedCategory('research-rewards')}
              />
              <CollectionCard
                title="Australia first"
                subtitle="Prioritise locally useful perks and offers."
                onPress={() => setAustraliaOnly(true)}
              />
            </ScrollView>
          </View>
        ) : null}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipRow}>
          <CategoryChip
            label="All"
            tone="neutral"
            active={selectedCategory === 'all'}
            onPress={() => setSelectedCategory('all')}
          />
          {categories.map((category) => (
            <CategoryChip
              key={category.id}
              label={category.label}
              tone={category.tone}
              active={selectedCategory === category.id}
              onPress={() => setSelectedCategory(category.id)}
            />
          ))}
        </ScrollView>

        <View style={styles.sortSection}>
          <SectionHeader title="Sort and filter" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterRow}>
            <PreferencePill
              label="Recommended"
              active={sortBy === 'recommended'}
              onPress={() => setSortBy('recommended')}
            />
            <PreferencePill
              label="Newest verified"
              active={sortBy === 'newest'}
              onPress={() => setSortBy('newest')}
            />
            <PreferencePill
              label="Ending soon"
              active={sortBy === 'ending-soon'}
              onPress={() => setSortBy('ending-soon')}
            />
            <PreferencePill
              label="Free first"
              active={sortBy === 'free-first'}
              onPress={() => setSortBy('free-first')}
            />
          </ScrollView>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterRow}>
            <PreferencePill
              label="Students only"
              active={studentOnlyOnly}
              onPress={() => setStudentOnlyOnly((current) => !current)}
            />
            <PreferencePill
              label="Australia only"
              active={australiaOnly}
              onPress={() => setAustraliaOnly((current) => !current)}
            />
            <PreferencePill
              label="Free only"
              active={freeOnly}
              onPress={() => setFreeOnly((current) => !current)}
            />
            <PreferencePill
              label="Reset filters"
              onPress={() => {
                setSortBy('recommended');
                setStudentOnlyOnly(false);
                setAustraliaOnly(false);
                setFreeOnly(false);
                setSelectedCategory('all');
                setQuery('');
              }}
            />
          </ScrollView>
        </View>

        {discoveryMode ? (
          <View style={styles.discoveryShelf}>
            {foodPerks.length > 0 ? (
              <>
                <SectionHeader title="Save on food" actionLabel="View all" onActionPress={() => setSelectedCategory('food')} />
                <FadeInView style={styles.list} delay={80}>
                  {foodPerks.map((perk) => (
                    <PerkCard
                      key={perk.id}
                      perk={perk}
                      onPress={() =>
                        router.push({ pathname: '/perk/[id]', params: { id: perk.id } })
                      }
                    />
                  ))}
                </FadeInView>
              </>
            ) : null}

            {aiPerks.length > 0 ? (
              <>
                <SectionHeader title="AI and study tools" actionLabel="View all" onActionPress={() => setSelectedCategory('ai-tools')} />
                <FadeInView style={styles.list} delay={120}>
                  {aiPerks.map((perk) => (
                    <PerkCard
                      key={perk.id}
                      perk={perk}
                      onPress={() =>
                        router.push({ pathname: '/perk/[id]', params: { id: perk.id } })
                      }
                    />
                  ))}
                </FadeInView>
              </>
            ) : null}

            {researchPerks.length > 0 ? (
              <>
                <SectionHeader
                  title="Research and rewards"
                  actionLabel="View all"
                  onActionPress={() => setSelectedCategory('research-rewards')}
                />
                <FadeInView style={styles.list} delay={160}>
                  {researchPerks.map((perk) => (
                    <PerkCard
                      key={perk.id}
                      perk={perk}
                      onPress={() =>
                        router.push({ pathname: '/perk/[id]', params: { id: perk.id } })
                      }
                    />
                  ))}
                </FadeInView>
              </>
            ) : null}
          </View>
        ) : null}

        <View style={styles.listSection}>
          <SectionHeader
            title={
              selectedCategory === 'all'
                ? query.trim().length > 0
                  ? 'Search results'
                  : 'All verified perks'
                : categories.find((category) => category.id === selectedCategory)?.label ??
                  'Verified perks'
            }
          />
          {sortedFilteredPerks.length > 0 ? (
            <FadeInView style={styles.list} delay={90}>
              {sortedFilteredPerks.map((perk) => (
                <PerkCard
                  key={perk.id}
                  perk={perk}
                  onPress={() => router.push({ pathname: '/perk/[id]', params: { id: perk.id } })}
                />
              ))}
            </FadeInView>
          ) : (
            <EmptyState
              title={showCategoryPendingState ? 'No verified perks yet' : 'No perks found'}
              subtitle={
                showCategoryPendingState
                  ? 'We are still checking official sources for this category.'
                  : 'Try another keyword or category.'
              }
            />
          )}
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
  searchWrap: {
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  trustRow: {
    marginTop: spacing.xs,
  },
  introText: {
    color: colors.textSoft,
    fontSize: 14,
    lineHeight: 20,
    marginTop: spacing.sm,
    maxWidth: 320,
  },
  loadingText: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: spacing.xs,
  },
  quickStartSection: {
    marginBottom: spacing.lg,
  },
  featureRow: {
    gap: spacing.md,
    paddingRight: spacing.md,
  },
  collectionRow: {
    gap: spacing.md,
    paddingRight: spacing.md,
    marginTop: spacing.xs,
  },
  chipRow: {
    gap: spacing.sm,
    paddingVertical: spacing.xs,
    paddingRight: spacing.md,
  },
  sortSection: {
    marginTop: spacing.md,
  },
  filterRow: {
    gap: spacing.sm,
    paddingVertical: spacing.xs,
    paddingRight: spacing.md,
  },
  discoveryShelf: {
    marginTop: spacing.md,
    gap: spacing.md,
  },
  listSection: {
    marginTop: spacing.md,
  },
  list: {
    gap: spacing.sm,
  },
});
