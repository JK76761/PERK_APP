import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { colors } from '@/constants/colors';
import { SavedPerksProvider } from '@/state/SavedPerksContext';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
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
        <StatusBar style="dark" />
      </SavedPerksProvider>
    </SafeAreaProvider>
  );
}
