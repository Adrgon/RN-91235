import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from "../theme/useTheme";


export default function HomeScreen() {
    const {colors, mode, isDark} = useTheme()

    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <StatusBar style={isDark ? "light" : "dark"} />
        <View
          style={[
            styles.card,
            { backgroundColor: colors.card, borderColor: colors.border },
          ]}
        >
          <Text style={[styles.title, {color: colors.text}]}>
            Redux Toolkit + Tema
          </Text>
          
          <Text style={[styles.subtitle, {color: colors.text}]}>
            Modo actual:
            <Text
            style={{color: colors.primary}}
            >{mode}</Text>
          </Text>
          <Text style={[styles.body, {color: colors.textSecondary}]}>
            El tema vive en el store global de Redux, por lo que cualquier
            componente puede leerlo con useTheme() o cambiarlo con dispatch
          </Text>

          <ThemeToggle />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  card: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 16,
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
});
