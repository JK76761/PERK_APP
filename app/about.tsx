import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SubpageHeader } from '@/components/SubpageHeader';
import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';
import Constants from 'expo-constants';
import { supportEmail } from '@/utils/support';

export default function AboutScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const appVersion = Constants.expoConfig?.version ?? '1.0.0';

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
        <SubpageHeader title="About Perk" onBack={() => router.back()} />

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>What Perk is</Text>
          <Text style={styles.body}>
            Perk is a verified savings discovery app built for students and early-career savers.
            It focuses on practical ways to save across food, transport, software, subscriptions,
            banking, and rewards programs.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Why Perk feels different</Text>
          <Text style={styles.body}>
            Perk is designed to keep verified source links visible, store saved perks locally on
            your device, and make discovery feel more useful than a generic coupon list.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>What Perk covers</Text>
          <Text style={styles.body}>Banking bonuses and savings utilities.</Text>
          <Text style={styles.body}>Food deals, loyalty programs, and cashback-style rewards.</Text>
          <Text style={styles.body}>Student tools, software benefits, and subscriptions.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Version and contact</Text>
          <Text style={styles.body}>Current app version: {appVersion}</Text>
          <Pressable
            onPress={() => {
              router.push('/support');
            }}
            style={({ pressed }) => [styles.linkButton, pressed ? styles.linkPressed : null]}>
            <Text style={styles.linkText}>Open support centre</Text>
          </Pressable>
          <Text style={styles.metaText}>{supportEmail}</Text>
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
  sectionTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: fontWeights.semibold,
    marginBottom: spacing.sm,
  },
  body: {
    color: colors.textSoft,
    fontSize: 14,
    fontWeight: fontWeights.regular,
    lineHeight: 22,
    marginBottom: spacing.sm,
  },
  linkButton: {
    marginTop: spacing.sm,
  },
  linkPressed: {
    opacity: 0.72,
  },
  linkText: {
    color: colors.purple,
    fontSize: 14,
    fontWeight: fontWeights.semibold,
  },
  metaText: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: spacing.sm,
  },
});
