import { useRouter } from 'expo-router';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BottomTabBar } from '@/components/BottomTabBar';
import { EmptyState } from '@/components/EmptyState';
import { FadeInView } from '@/components/FadeInView';
import { PerkCard } from '@/components/PerkCard';
import { SectionHeader } from '@/components/SectionHeader';
import { colors } from '@/constants/colors';
import { clampSize, spacing } from '@/constants/spacing';
import { usePerks } from '@/hooks/usePerks';
import { useSavedPerks } from '@/state/SavedPerksContext';

export default function SavedScreen() {
  const { savedPerkIds } = useSavedPerks();
  const { perks, loading } = usePerks();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { width } = Dimensions.get('window');
  const horizontalPadding = clampSize(width, spacing.screenMin, spacing.screenMax, 0.05);
  const savedPerks = perks.filter((perk) => savedPerkIds.includes(perk.id));

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: insets.top + spacing.sm,
            paddingBottom: insets.bottom + spacing.bottomScrollPadding,
            paddingHorizontal: horizontalPadding,
          },
        ]}>
        <SectionHeader title="Saved" />
        {loading ? <Text style={styles.loadingText}>Refreshing saved offers...</Text> : null}

        {savedPerks.length > 0 ? (
          <FadeInView style={styles.list}>
            {savedPerks.map((perk) => (
              <PerkCard
                key={perk.id}
                perk={perk}
                onPress={() => router.push({ pathname: '/perk/[id]', params: { id: perk.id } })}
              />
            ))}
          </FadeInView>
        ) : (
          <EmptyState
            title="No saved perks yet"
            subtitle="Save perks you want to claim later."
          />
        )}
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
    flexGrow: 1,
  },
  list: {
    gap: spacing.sm,
  },
  loadingText: {
    color: colors.textMuted,
    fontSize: 12,
    marginBottom: spacing.sm,
  },
});
