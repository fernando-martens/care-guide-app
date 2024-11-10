import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot } from 'expo-router';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { SessionProvider } from '@/context/SessionContext';


export default function RootLayout() {

  const colorScheme = useColorScheme();

  return (
    <ThemeProvider 
      // value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      value={DefaultTheme}
    >
      <SessionProvider>
        <Slot />
      </SessionProvider>
    </ThemeProvider>
  );
}
