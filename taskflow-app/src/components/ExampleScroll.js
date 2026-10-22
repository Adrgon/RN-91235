import { ScrollView } from 'react-native';

import { styles } from '@/styles/styles';

// Contenedor con scroll para los ejemplos que no son listas.
export default function ExampleScroll({ children }) {
  return (
    <ScrollView contentContainerStyle={styles.exampleContent} keyboardShouldPersistTaps="handled">
      {children}
    </ScrollView>
  );
}
