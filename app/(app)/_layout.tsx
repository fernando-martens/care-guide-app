import { Redirect, Stack } from 'expo-router';
import { useSession } from '@/context/SessionContext';
import { ThemedText } from '@/components/ThemedText';


export default function RootLayout() {
  const { session, isLoading } = useSession();

  if (isLoading)
    return <ThemedText>Loading...</ThemedText>;

  if (!session)
    return <Redirect href="/sign-in" />;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}