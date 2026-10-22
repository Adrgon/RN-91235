import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Tabs>
        <Tabs.Screen name="index" options={{ title: "Inicio" }} />
        <Tabs.Screen name="about" options={{ title: "Acerca de" }} />
        <Tabs.Screen name="details/[id]" options={{ title: "Detalle" }} />
      </Tabs>
      <StatusBar style="auto" />
    </>
  );
}
