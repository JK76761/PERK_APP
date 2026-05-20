import { StyleSheet, Text, View } from 'react-native';

import { AnimatedScalePressable } from '@/components/AnimatedScalePressable';
import { PreferencePill } from '@/components/PreferencePill';
import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';
import type {
  AppPreferences,
  AudiencePreference,
  DiscoveryRegionPreference,
} from '@/state/AppPreferencesContext';
import type { CategoryId } from '@/data/categories';

type OnboardingCardProps = {
  preferences: AppPreferences;
  onAudiencePress: (audience: AudiencePreference) => void;
  onRegionPress: (region: DiscoveryRegionPreference) => void;
  onInterestPress: (interest: CategoryId) => void;
  onFinishPress: () => void;
  onManagePress?: () => void;
};

const interestOptions: { id: CategoryId; label: string }[] = [
  { id: 'banking', label: 'Banking' },
  { id: 'food', label: 'Food' },
  { id: 'tech', label: 'Tech' },
  { id: 'ai-tools', label: 'AI tools' },
  { id: 'research-rewards', label: 'Earn money' },
  { id: 'subscriptions', label: 'Subscriptions' },
];

export function OnboardingCard({
  preferences,
  onAudiencePress,
  onRegionPress,
  onInterestPress,
  onFinishPress,
  onManagePress,
}: OnboardingCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.eyebrow}>Complete your setup</Text>
      <Text style={styles.title}>Tell Perk what kind of savings you care about most</Text>
      <Text style={styles.body}>
        We&apos;ll keep this on your device and use it to shape Home and Explore recommendations.
      </Text>

      <View style={styles.group}>
        <Text style={styles.groupLabel}>Audience</Text>
        <View style={styles.pillRow}>
          <PreferencePill
            label="Student"
            active={preferences.audience === 'student'}
            onPress={() => onAudiencePress('student')}
          />
          <PreferencePill
            label="Early-career"
            active={preferences.audience === 'early-career'}
            onPress={() => onAudiencePress('early-career')}
          />
        </View>
      </View>

      <View style={styles.group}>
        <Text style={styles.groupLabel}>Discovery region</Text>
        <View style={styles.pillRow}>
          <PreferencePill
            label="Australia first"
            active={preferences.discoveryRegion === 'australia'}
            onPress={() => onRegionPress('australia')}
          />
          <PreferencePill
            label="Global mix"
            active={preferences.discoveryRegion === 'global'}
            onPress={() => onRegionPress('global')}
          />
        </View>
      </View>

      <View style={styles.group}>
        <Text style={styles.groupLabel}>Interests</Text>
        <View style={styles.interestsWrap}>
          {interestOptions.map((interest) => (
            <PreferencePill
              key={interest.id}
              label={interest.label}
              active={preferences.interests.includes(interest.id)}
              onPress={() => onInterestPress(interest.id)}
            />
          ))}
        </View>
      </View>

      <View style={styles.actionRow}>
        {onManagePress ? (
          <AnimatedScalePressable
            onPress={onManagePress}
            contentStyle={styles.secondaryAction}
            scaleTo={0.98}>
            <Text style={styles.secondaryActionLabel}>More options</Text>
          </AnimatedScalePressable>
        ) : null}
        <AnimatedScalePressable
          onPress={onFinishPress}
          contentStyle={styles.primaryAction}
          scaleTo={0.98}>
          <Text style={styles.primaryActionLabel}>Use these preferences</Text>
        </AnimatedScalePressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.xxl,
    backgroundColor: colors.card,
    padding: spacing.xl,
    ...shadows.card,
  },
  eyebrow: {
    color: colors.purple,
    fontSize: 12,
    fontWeight: fontWeights.semibold,
    letterSpacing: -0.2,
    marginBottom: spacing.xs,
  },
  title: {
    color: colors.text,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: fontWeights.bold,
    letterSpacing: -0.6,
  },
  body: {
    color: colors.textSoft,
    fontSize: 14,
    lineHeight: 20,
    marginTop: spacing.sm,
  },
  group: {
    marginTop: spacing.lg,
  },
  groupLabel: {
    color: colors.text,
    fontSize: 14,
    fontWeight: fontWeights.semibold,
    marginBottom: spacing.sm,
    letterSpacing: -0.2,
  },
  pillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  interestsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  actionRow: {
    marginTop: spacing.xl,
    gap: spacing.sm,
  },
  primaryAction: {
    minHeight: 48,
    borderRadius: radius.full,
    backgroundColor: colors.text,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryActionLabel: {
    color: colors.card,
    fontSize: 15,
    fontWeight: fontWeights.semibold,
    letterSpacing: -0.2,
  },
  secondaryAction: {
    minHeight: 42,
    borderRadius: radius.full,
    backgroundColor: '#F7F8FB',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  secondaryActionLabel: {
    color: colors.text,
    fontSize: 14,
    fontWeight: fontWeights.medium,
    letterSpacing: -0.2,
  },
});
