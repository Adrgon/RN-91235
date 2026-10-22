import { useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

import { styles } from '@/styles/styles';

const contacts = Array.from({ length: 50 }, (_, index) => ({
  id: String(index + 1),
  name: `Contacto ${index + 1}`,
  email: `contacto${index + 1}@mail.com`,
}));

function ContactRow({ contact, selected, onPress }) {
  return (
    <Pressable onPress={onPress} style={[styles.dataRow, selected && styles.dataRowSelected]}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{contact.id}</Text>
      </View>
      <View>
        <Text style={styles.body}>{contact.name}</Text>
        <Text style={styles.caption}>{contact.email}</Text>
      </View>
    </Pressable>
  );
}

export default function FlatListExample() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <FlatList
      data={contacts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ContactRow
          contact={item}
          selected={item.id === selectedId}
          onPress={() => setSelectedId(item.id)}
        />
      )}
      // extraData hace que la lista se vuelva a renderizar cuando cambia la selección.
      extraData={selectedId}
      ItemSeparatorComponent={() => <View style={styles.divider} />}
      ListHeaderComponent={
        <View style={styles.listHeader}>
          <Text style={styles.sectionTitle}>50 contactos</Text>
          <Text style={styles.caption}>
            FlatList solo renderiza lo que está en pantalla. Tocá un contacto para seleccionarlo.
          </Text>
        </View>
      }
      ListFooterComponent={
        <View style={styles.listFooter}>
          <Text style={styles.caption}>Fin de la lista</Text>
        </View>
      }
      ListEmptyComponent={<Text style={styles.caption}>No hay contactos</Text>}
    />
  );
}
