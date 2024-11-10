import ThemedButton from '@/components/ThemedButton';
import { ThemedView } from '@/components/ThemedView';
import { useSession } from '@/context/SessionContext';


export default function Index() {
  const { signOut } = useSession();
  return (
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedButton
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </ThemedView>
  );
}