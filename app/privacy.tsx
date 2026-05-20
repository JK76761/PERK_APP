import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SubpageHeader } from '@/components/SubpageHeader';
import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';
import { supportEmail } from '@/utils/support';

export default function PrivacyScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

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
        <SubpageHeader title="Privacy Policy" onBack={() => router.back()} />

        <View style={styles.card}>
          <Text style={styles.intro}>
            Perk is designed to work without a mandatory account. The current release stores saved
            perks and lightweight preference data locally on your device and reads verified public
            perk listings from Supabase.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>What Perk stores</Text>
          <Text style={styles.body}>
            Saved perks are stored locally on your device using on-device app storage so you can
            bookmark offers for later.
          </Text>
          <Text style={styles.body}>
            Perk also stores lightweight recommendation, discovery region, and notification
            preference settings on this device.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Third-party services used</Text>
          <Text style={styles.body}>
            Supabase is used to fetch verified public perk listings. Logo.dev is used to display
            optional remote brand logos when available. External provider links open in your browser
            when you choose to visit an offer.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>What is not collected in this release</Text>
          <Text style={styles.body}>No account login data.</Text>
          <Text style={styles.body}>No payment information.</Text>
          <Text style={styles.body}>No government ID, passport, or banking credentials.</Text>
          <Text style={styles.body}>No user-posted content or comments.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>External providers</Text>
          <Text style={styles.body}>
            When you open an offer, Perk sends you to the provider&apos;s own site. Those external
            websites operate under their own privacy policies, terms, and tracking rules.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Privacy contact</Text>
          <Text style={styles.body}>
            If you have privacy or data questions about this release, contact Perk directly.
          </Text>
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
  intro: {
    color: colors.text,
    fontSize: 15,
    fontWeight: fontWeights.medium,
    lineHeight: 24,
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
