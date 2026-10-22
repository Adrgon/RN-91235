import React from 'react'
import { StyleSheet, Text, View, ScrollView, useWindowDimensions } from "react-native";

export default function Horizontal() {
    const {width, height} = useWindowDimensions();
    const page = {width, height}
    console.log(page)
  return (
    <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
      <View style={[styles.outer, page]}>
        <Text style={styles.innerText}>Welcome to LCO app</Text>
      </View>
      <View style={[styles.outer, page, styles.red]}>
        <Text style={styles.innerText}>Best quality videos</Text>
      </View>
      <View style={[styles.outer, page, styles.green]}>
        <Text style={styles.innerText}>Available on iOS and Android</Text>
      </View>
      <View style={[styles.outer, page, styles.blue]}>
        <Text style={styles.innerText}>Learn at your own pace</Text>
      </View>
      <View style={[styles.outer, page, styles.orange]}>
        <Text style={styles.innerText}>Join our community</Text>
      </View>
      <View style={[styles.outer, page, styles.purple]}>
        <Text style={styles.innerText}>{"Let's get started!"}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  outer: {
    backgroundColor: "#007bb6",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  innerText: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
  },
  red: {
    backgroundColor: "#dd4b39",
  },
  green: {
    backgroundColor: "#27ae60",
  },
  blue: {
    backgroundColor: "#3388ff",
  },
  orange: {
    backgroundColor: "#f39c12",
  },
  purple: {
    backgroundColor: "#8e44ad",
  },
});
