import { Stack } from 'expo-router';

export default function RootLayout() {
 
  return (
      <Stack>
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="selection" options={{ headerShown: false }} />
      </Stack>
  );
}
