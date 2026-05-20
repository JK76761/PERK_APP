import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SubpageHeader } from '@/components/SubpageHeader';
import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';
import { openBusinessInquiryMail, supportEmail } from '@/utils/support';

export default function HelpScreen() {
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
        <SubpageHeader title="Help" onBack={() => router.back()} />

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>How Perk works</Text>
          <Text style={styles.body}>
            Perk helps students and early-career savers discover verified ways to save across
            banking, food, transport, software, subscriptions, and rewards programs. Tapping a
            perk opens the provider&apos;s official website.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>What Perk verifies</Text>
          <Text style={styles.body}>
            Perk aims to check offers against official provider pages, keep verified links visible,
            and show the last checked date on perk detail screens where possible.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Saved perks</Text>
          <Text style={styles.body}>
            Saved perks are stored locally on your device. In the current release they do not sync
            across devices because there is no login or account system enabled yet.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>If an offer looks wrong</Text>
          <Text style={styles.body}>
            Provider pricing, eligibility rules, and promotion timing can change. Always confirm
            the official source page before acting on an offer.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Support</Text>
          <Text style={styles.body}>
            You can contact Perk directly if something looks wrong, if a link breaks, or if you
            want to request a new perk.
          </Text>
          <Pressable
            onPress={() => {
              router.push('/support');
            }}
            style={({ pressed }) => [styles.linkButton, pressed ? styles.linkPressed : null]}>
            <Text style={styles.linkText}>Open support centre</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              void openBusinessInquiryMail();
            }}
            style={({ pressed }) => [styles.linkButton, pressed ? styles.linkPressed : null]}>
            <Text style={styles.linkText}>Business inquiry</Text>
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
  },
  linkButton: {
    marginTop: spacing.md,
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
