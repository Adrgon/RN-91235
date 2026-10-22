import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

const pages = [
  { title: "Scroll vertical", color: "#1abc9c" },
  { title: "Una página por pantalla", color: "#3498db" },
  { title: "Los colores vienen de un array", color: "#9b59b6" },
  { title: "Cada página muestra su color", color: "#e67e22" },
  { title: "¡Llegaste al final!", color: "#e74c3c" },
];

export default function Vertical() {
  const { width, height } = useWindowDimensions();

  return (
    <ScrollView
      pagingEnabled={true}
      snapToInterval={height}
      decelerationRate="fast"
      showsVerticalScrollIndicator={false}
    >
      {pages.map((page, index) => (
        <View
          key={page.color}
          style={[styles.page, { width, height, backgroundColor: page.color }]}
        >
          <Text style={styles.counter}>
            {index + 1} / {pages.length}
          </Text>
          <Text style={styles.title}>{page.title}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{page.color}</Text>
          </View>
          {index < pages.length - 1 && (
            <Text style={styles.hint}>Deslizá hacia arriba ↑</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  counter: {
    position: "absolute",
    top: 48,
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 16,
    fontWeight: "600",
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  badge: {
    marginTop: 16,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  badgeText: {
    color: "#fff",
    fontSize: 16,
  },
  hint: {
    position: "absolute",
    bottom: 48,
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 16,
  },
});
