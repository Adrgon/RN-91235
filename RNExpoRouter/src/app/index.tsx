import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ITEMS = [
  { id: "1", name: "Manzana" },
  { id: "2", name: "Banana" },
  { id: "3", name: "Naranja" },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo Router básico</Text>

      {ITEMS.map((item) => (
        <Link
          key={item.id}
          href={{ pathname: "/details/[id]", params: { id: item.id, name: item.name } }}
          asChild
        >
          <Pressable style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </Pressable>
        </Link>
      ))}

      <Link href="/about" style={styles.link}>
        Ir a "Acerca de"
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
  item: { padding: 16, borderRadius: 8, backgroundColor: "#E6F4FE" },
  itemText: { fontSize: 16 },
  link: { marginTop: 16, color: "#007AFF", fontSize: 16 },
});
