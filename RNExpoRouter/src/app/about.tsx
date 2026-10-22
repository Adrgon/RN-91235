import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Cada archivo dentro de src/app es una pantalla. Esta es src/app/about.tsx.
      </Text>
      <Button title="Volver" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 16, backgroundColor: "#fff" },
  text: { fontSize: 16 },
});
