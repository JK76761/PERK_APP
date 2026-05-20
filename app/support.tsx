import Constants from 'expo-constants';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SubpageHeader } from '@/components/SubpageHeader';
import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';
import {
  openBusinessInquiryMail,
  openGeneralSupportMail,
  openSupportMail,
  supportEmail,
} from '@/utils/support';

export default function SupportScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const appVersion = Constants.expoConfig?.version ?? '1.0.0';

  async function handleReportOutdated() {
    await openSupportMail(
      'Outdated offer report',
      'Hi Perk,\n\nI want to report an outdated offer.\n\nOffer title:\nProvider:\nSource URL:\nWhat looks wrong:\n-\n\nThanks.'
    );
  }

  async function handleRequestPerk() {
    await openSupportMail(
      'Perk request',
      'Hi Perk,\n\nI would like to request a perk or provider.\n\nRequested brand or perk:\nCategory:\nWhy it would be useful:\n-\n\nThanks.'
    );
  }

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
        <SubpageHeader title="Support" onBack={() => router.back()} />

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Need help with Perk?</Text>
          <Text style={styles.body}>
            Perk is a verified savings discovery app. If something looks wrong, a provider link is
            outdated, or you want to suggest a new perk, you can contact us directly.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Quick actions</Text>

          <Pressable
            onPress={() => {
              void openGeneralSupportMail();
            }}
            style={({ pressed }) => [styles.action, pressed ? styles.actionPressed : null]}>
            <Text style={styles.actionTitle}>Contact support</Text>
            <Text style={styles.actionSubtitle}>Questions, bugs, or general help</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              void handleReportOutdated();
            }}
            style={({ pressed }) => [styles.action, pressed ? styles.actionPressed : null]}>
            <Text style={styles.actionTitle}>Report outdated offer</Text>
            <Text style={styles.actionSubtitle}>Flag provider changes or expired perks</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              void handleRequestPerk();
            }}
            style={({ pressed }) => [styles.action, pressed ? styles.actionPressed : null]}>
            <Text style={styles.actionTitle}>Request a perk</Text>
            <Text style={styles.actionSubtitle}>Suggest a brand, tool, bill, or savings program</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              void openBusinessInquiryMail();
            }}
            style={({ pressed }) => [styles.action, pressed ? styles.actionPressed : null]}>
            <Text style={styles.actionTitle}>Business inquiry</Text>
            <Text style={styles.actionSubtitle}>Partnerships, providers, and commercial questions</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Text style={styles.body}>{supportEmail}</Text>
          <Text style={styles.meta}>Current app version: {appVersion}</Text>
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
    lineHeight: 22,
  },
  action: {
    borderRadius: radius.xl,
    backgroundColor: '#FAFBFD',
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    marginTop: spacing.sm,
  },
  actionPressed: {
    opacity: 0.74,
  },
  actionTitle: {
    color: colors.text,
    fontSize: 14,
    fontWeight: fontWeights.semibold,
    marginBottom: spacing.xs,
  },
  actionSubtitle: {
    color: colors.textSoft,
    fontSize: 13,
    lineHeight: 18,
  },
  meta: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 18,
    marginTop: spacing.sm,
  },
});
