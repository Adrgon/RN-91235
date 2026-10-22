import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import LibraryBadge from '@/components/LibraryBadge';
import { getComponentById } from '@/data/components';
import { styles } from '@/styles/styles';

export default function ComponentDetailScreen() {
  const { id } = useLocalSearchParams();
  const component = getComponentById(id);

  if (!component) {
    return (
      <View style={styles.centered}>
        <Stack.Screen options={{ title: 'No encontrado' }} />
        <Text style={styles.title}>Componente no encontrado</Text>
        <Text style={styles.subtitle}>No existe un ejemplo con el id &quot;{id}&quot;.</Text>
      </View>
    );
  }

  const { Example } = component;

  return (
    <SafeAreaView style={styles.screen} edges={['bottom', 'left', 'right']}>
      <Stack.Screen options={{ title: component.name }} />

      <View style={styles.detailHeader}>
        <LibraryBadge library={component.library} packageName={component.packageName} />
        <Text style={styles.subtitle}>{component.description}</Text>
      </View>

      <View style={styles.exampleContainer}>
        <Example />
      </View>
    </SafeAreaView>
  );
}
