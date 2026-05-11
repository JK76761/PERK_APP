import { useLocalSearchParams, useRouter } from 'expo-router';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BottomTabBar } from '@/components/BottomTabBar';
import { CategoryChip } from '@/components/CategoryChip';
import { EmptyState } from '@/components/EmptyState';
import { FadeInView } from '@/components/FadeInView';
import { PerkCard } from '@/components/PerkCard';
import { SearchBar } from '@/components/SearchBar';
import { SectionHeader } from '@/components/SectionHeader';
import { TrustBadge } from '@/components/TrustBadge';
import { colors } from '@/constants/colors';
import { clampSize, spacing } from '@/constants/spacing';
import { categories, type CategoryId } from '@/data/categories';
import { usePerks } from '@/hooks/usePerks';
import type { Perk } from '@/types/perk';
import { getActivePerks, getActivePerksCount } from '@/utils/perkStats';
import { useEffect, useState } from 'react';

const { width } = Dimensions.get('window');
const horizontalPadding = clampSize(width, spacing.screenMin, spacing.screenMax, 0.05);

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

export default function ExploreScreen() {
  const params = useLocalSearchParams<{ category?: string | string[] }>();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const categoryParam = getCategoryParamValue(params.category);
  const { perks, loading } = usePerks();
  const activeCount = getActivePerksCount(perks);
  const activePerks = getActivePerks(perks);

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

    return categoryMatches && queryMatches;
  });
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
            paddingTop: insets.top + spacing.sm,
            paddingBottom: insets.bottom + spacing.bottomScrollPadding,
          },
        ]}>
        <SectionHeader title="Explore" />

        <View style={styles.trustRow}>
          <TrustBadge tone="source" label={`${activeCount} verified offers`} />
        </View>
        {loading ? <Text style={styles.loadingText}>Refreshing verified offers...</Text> : null}

        <View style={styles.searchWrap}>
          <SearchBar value={query} onChangeText={setQuery} />
        </View>

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

        <View style={styles.listSection}>
          {filteredPerks.length > 0 ? (
            <FadeInView style={styles.list}>
              {filteredPerks.map((perk) => (
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
    paddingHorizontal: horizontalPadding,
  },
  searchWrap: {
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  trustRow: {
    marginTop: spacing.xs,
  },
  loadingText: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: spacing.xs,
  },
  chipRow: {
    gap: spacing.sm,
    paddingVertical: spacing.xs,
    paddingRight: spacing.md,
  },
  listSection: {
    marginTop: spacing.md,
  },
  list: {
    gap: spacing.sm,
  },
});
