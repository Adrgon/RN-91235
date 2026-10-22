import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function DetailsScreen() {
  const { id, name } = useLocalSearchParams<{ id: string; name?: string }>();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: name ?? `Item ${id}` }} />
      <Text style={styles.text}>ID recibido por la ruta: {id}</Text>
      {name && <Text style={styles.text}>Nombre: {name}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 8, backgroundColor: "#fff" },
  text: { fontSize: 16 },
});
