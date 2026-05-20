import { Stack, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppIntroOverlay } from '@/components/AppIntroOverlay';
import { colors } from '@/constants/colors';
import { AppPreferencesProvider } from '@/state/AppPreferencesContext';
import { SavedPerksProvider } from '@/state/SavedPerksContext';

export default function RootLayout() {
  const segments = useSegments();
  const [showIntro, setShowIntro] = useState(true);
  const topSegment = segments[0];
  const shouldHideIntro =
    Platform.OS === 'web' ||
    topSegment === 'privacy' ||
    topSegment === 'support' ||
    topSegment === 'help' ||
    topSegment === 'about';

  return (
    <SafeAreaProvider>
      <AppPreferencesProvider>
        <SavedPerksProvider>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: colors.background },
            }}
          >
            <Stack.Screen
              name="perk/[id]"
              options={{
                animation: 'fade_from_bottom',
                presentation: 'card',
                gestureEnabled: true,
              }}
            />
          </Stack>
          {showIntro && !shouldHideIntro ? <AppIntroOverlay onDone={() => setShowIntro(false)} /> : null}
          <StatusBar style="dark" />
        </SavedPerksProvider>
      </AppPreferencesProvider>
    </SafeAreaProvider>
  );
}
