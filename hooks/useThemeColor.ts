/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from 'react-native';

import { Colors, IAppColors } from '@/constants/Colors';

export function useThemeColor(colorName: keyof IAppColors) {
  const theme = useColorScheme() ?? 'light';
  return Colors[theme][colorName];
}
