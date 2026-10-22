import { Text, View } from 'react-native';

import ExampleScroll from '@/components/ExampleScroll';
import ExampleSection from '@/components/ExampleSection';
import { styles } from '@/styles/styles';

export default function ViewExample() {
  return (
    <ExampleScroll>
      <ExampleSection
        title="Contenedor básico"
        description="View es el bloque fundamental: un contenedor que soporta flexbox, estilos y eventos táctiles."
      >
        <View style={styles.row}>
          <View style={[styles.box, styles.boxA]} />
          <View style={[styles.box, styles.boxB]} />
          <View style={[styles.box, styles.boxC]} />
        </View>
      </ExampleSection>

      <ExampleSection
        title="Flexbox"
        description="flexDirection: 'row', justifyContent: 'space-between' y alignItems: 'flex-end'. La caja del medio usa flex: 1 para ocupar el espacio libre."
      >
        <View style={styles.flexDemo}>
          <View style={[styles.box, styles.boxA]} />
          <View style={[styles.boxGrow, styles.boxB]} />
          <View style={[styles.box, styles.boxTall, styles.boxC]} />
        </View>
      </ExampleSection>

      <ExampleSection title="Tarjeta con sombra" description="Los View se anidan para construir cualquier layout.">
        <View style={styles.shadowCard}>
          <Text style={styles.sectionTitle}>Soy una tarjeta</Text>
          <Text style={styles.caption}>Un View con padding, borderRadius y boxShadow.</Text>
        </View>
      </ExampleSection>
    </ExampleScroll>
  );
}
