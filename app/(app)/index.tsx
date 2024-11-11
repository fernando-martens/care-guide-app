import ThemedButton from '@/components/ThemedButton';
import { ThemedView } from '@/components/ThemedView';
import { useSession } from '@/context/SessionContext';
import { StyleSheet } from 'react-native';


export default function Index() {
  const { signOut } = useSession();
  return (
    <ThemedView style={styles.container}>
      <ThemedButton
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,   
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 50,
    gap: 20
  },
});