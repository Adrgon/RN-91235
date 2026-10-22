import { Pressable, StyleSheet, Text } from "react-native";
import { useAppDispatch } from "../store/hooks";
import { toggleTheme } from "../store/themeSlice";
import { useTheme } from "../theme/useTheme";


export default function ThemeToggle(){
    const dispatch = useAppDispatch()
    const {colors, isDark} = useTheme()

    return (
      <Pressable 
        onPress={() => dispatch(toggleTheme())}
        style={({pressed}) => [
            styles.button, {backgroundColor: colors.primary, opacity: pressed ? 0.7 : 1}
        ]}
      >
        <Text style={styles.text}>{isDark ? "🌞 Cambiar a modo claro" : "🌙 Cambiar a modo oscuro"}</Text>
      </Pressable>
    );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
