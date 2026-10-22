import { Text, View } from 'react-native';

import { styles } from '@/styles/styles';

// Tarjeta con título y descripción para agrupar cada variante de un ejemplo.
export default function ExampleSection({ title, description, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {description ? <Text style={styles.sectionDescription}>{description}</Text> : null}
      <View style={styles.sectionBody}>{children}</View>
    </View>
  );
}
