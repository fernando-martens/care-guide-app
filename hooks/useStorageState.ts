import  { useEffect, useCallback, useReducer, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

type UseStateHook<T> = [T | undefined, (value: T | undefined) => void];

export async function setStorageItemAsync(key: string, value: string | undefined) {
    if (value == undefined) {
        await SecureStore.deleteItemAsync(key);
    } else {
        await SecureStore.setItemAsync(key, value);
    }
}

export function useStorageState<T>(key: string): UseStateHook<T> {

  const [state, setState] = useState<T>();


  useEffect(() => {
    SecureStore.getItemAsync(key).then(value => {
        setState(value ? JSON.parse(value) : undefined);
    });
  }, [key]);


  const setValue = useCallback(
    (value: T | undefined) => {
      setState(value);
      setStorageItemAsync(key, value ? JSON.stringify(value) : undefined);
    },
    [key]
  );

  return [state, setValue];
}