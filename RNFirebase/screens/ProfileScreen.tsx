import { User } from 'firebase/auth';
import { Button, StyleSheet, Text, View } from 'react-native';

type Props = { user: User; onLogout: () => Promise<void> };

export function ProfileScreen({ user, onLogout }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola, {user.displayName}</Text>
      <Text>{user.email}</Text>
      <Button title="Cerrar sesión" onPress={onLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
  title: { fontSize: 20, fontWeight: '600' },
});
