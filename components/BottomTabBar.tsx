import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter, type Href } from 'expo-router';
import { useEffect, useRef, type ComponentProps } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AnimatedScalePressable } from '@/components/AnimatedScalePressable';
import { colors } from '@/constants/colors';
import { radius } from '@/constants/radius';
import { clampSize, spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { fontWeights } from '@/constants/typography';

const { width } = Dimensions.get('window');
const tabHeight = clampSize(width, 66, 72, 0.178);
const sideInset = clampSize(width, 16, 20, 0.044);

type IoniconName = ComponentProps<typeof Ionicons>['name'];

type TabItem = {
  label: string;
  href: Href;
  icon: IoniconName;
  activeIcon: IoniconName;
};

const tabs: TabItem[] = [
  { label: 'Home', href: '/', icon: 'home-outline', activeIcon: 'home' },
  { label: 'Explore', href: '/explore', icon: 'search-outline', activeIcon: 'search' },
  { label: 'Saved', href: '/saved', icon: 'bookmark-outline', activeIcon: 'bookmark' },
  { label: 'Profile', href: '/profile', icon: 'person-outline', activeIcon: 'person' },
];

function isActive(pathname: string, href: Href) {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname.startsWith(String(href));
}

type TabButtonProps = {
  label: string;
  icon: IoniconName;
  activeIcon: IoniconName;
  active: boolean;
  onPress: () => void;
};

function TabButton({ label, icon, activeIcon, active, onPress }: TabButtonProps) {
  const progress = useRef(new Animated.Value(active ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: active ? 1 : 0,
      duration: 180,
      useNativeDriver: false,
    }).start();
  }, [active, progress]);

  const labelColor = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.tabInactive, colors.text],
  });

  const activeIconScale = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0.94, 1.03],
  });

  const activeIconOpacity = progress;
  const inactiveIconOpacity = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  return (
    <AnimatedScalePressable onPress={onPress} contentStyle={styles.tab} scaleTo={0.95}>
      <View style={styles.iconWrap}>
        <Animated.View style={[styles.iconLayer, { opacity: inactiveIconOpacity }]}>
          <Ionicons name={icon} size={23} color={colors.tabInactive} />
        </Animated.View>
        <Animated.View
          style={[
            styles.iconLayer,
            {
              opacity: activeIconOpacity,
              transform: [{ scale: activeIconScale }],
            },
          ]}>
          <Ionicons name={activeIcon} size={23} color={colors.text} />
        </Animated.View>
      </View>
      <Animated.Text style={[styles.label, { color: labelColor }, active ? styles.activeLabel : null]}>
        {label}
      </Animated.Text>
    </AnimatedScalePressable>
  );
}

// Floating bottom tab bar used across the main app screens.
export function BottomTabBar() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={[styles.container, { bottom: Math.max(insets.bottom - spacing.bottomTabOffset, spacing.bottomTabOffset) }]}>
      {tabs.map((tab) => {
        const active = isActive(pathname, tab.href);

        return (
          <TabButton
            key={tab.label}
            label={tab.label}
            icon={tab.icon}
            activeIcon={tab.activeIcon}
            active={active}
            onPress={() => {
              if (!active) {
                router.replace(tab.href);
              }
            }}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: sideInset,
    right: sideInset,
    height: tabHeight,
    borderRadius: radius.full,
    backgroundColor: colors.card,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    ...shadows.floating,
  },
  tab: {
    flex: 1,
    height: tabHeight - 14,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  iconWrap: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLayer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: clampSize(width, 10.5, 11.5, 0.029),
    fontWeight: fontWeights.medium,
    letterSpacing: -0.1,
    lineHeight: 13,
  },
  activeLabel: {
    fontWeight: fontWeights.semibold,
  },
});
