import { Alert, Button, StyleSheet, View } from 'react-native';

type Props = { onLogin: () => Promise<void> };
export function LoginScreen({ onLogin }: Props) {
  const handlePress = async () => {
    try {
      await onLogin();
    } catch (e) {
      Alert.alert('Error al iniciar sesión', String(e));
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Continuar con Google" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
