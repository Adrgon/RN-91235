import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'


type Fruit = {
    id: string;
    name: string;
}

const fruits: Fruit[] = [
  { id: "1", name: "Manzana" },
  { id: "2", name: "Banana" },
  { id: "3", name: "Naranja" },
  { id: "4", name: "Frutilla" },
  { id: "5", name: "Uva" },
  { id: "7", name: "Pera" },
  { id: "8", name: "Durazno" },
  { id: "9", name: "Durazno" },
];

export default function SimpleFlatList() {
  return (
    <FlatList
      data={fruits}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
      style={styles.list}
    />
  );
}



const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  text: {
    fontSize: 18,
  },
});
