import { SectionList, Text, View } from 'react-native';

import { styles } from '@/styles/styles';

const sections = [
  { title: 'Frutas', data: ['Manzana', 'Banana', 'Naranja', 'Frutilla', 'Kiwi'] },
  { title: 'Verduras', data: ['Lechuga', 'Tomate', 'Zanahoria', 'Zapallo', 'Espinaca'] },
  { title: 'Lácteos', data: ['Leche', 'Queso', 'Yogur', 'Manteca'] },
  { title: 'Panadería', data: ['Pan', 'Medialunas', 'Facturas', 'Galletitas'] },
];

export default function SectionListExample() {
  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => `${item}-${index}`}
      renderItem={({ item }) => (
        <View style={styles.dataRow}>
          <Text style={styles.body}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.sectionListHeader}>
          <Text style={styles.sectionListHeaderText}>
            {section.title} ({section.data.length})
          </Text>
        </View>
      )}
      ItemSeparatorComponent={() => <View style={styles.divider} />}
      // Los encabezados quedan fijos arriba mientras scrolleás su sección.
      stickySectionHeadersEnabled
      ListHeaderComponent={
        <View style={styles.listHeader}>
          <Text style={styles.caption}>
            SectionList es como FlatList pero agrupa los datos en secciones con encabezado.
          </Text>
        </View>
      }
    />
  );
}
