import { Text } from 'react-native';

import ExampleScroll from '@/components/ExampleScroll';
import ExampleSection from '@/components/ExampleSection';
import { styles } from '@/styles/styles';

const LONG_TEXT =
  'React Native permite construir apps nativas usando React. Este texto es largo a propósito para mostrar cómo numberOfLines lo recorta y agrega puntos suspensivos al final cuando no entra.';

export default function TextExample() {
  return (
    <ExampleScroll>
      <ExampleSection title="Estilos de texto" description="Todo texto debe ir dentro de un componente Text.">
        <Text style={styles.textHeading}>Título grande</Text>
        <Text style={[styles.body, styles.textBold]}>Negrita</Text>
        <Text style={[styles.body, styles.textItalic]}>Cursiva</Text>
        <Text style={[styles.body, styles.textUnderline]}>Subrayado</Text>
      </ExampleSection>

      <ExampleSection title="Texto anidado" description="Un Text dentro de otro hereda sus estilos y los puede extender.">
        <Text style={styles.body}>
          Podés <Text style={styles.textHighlight}>resaltar</Text> una palabra o{' '}
          <Text style={[styles.textBold, styles.textItalic]}>combinar estilos</Text> en una misma línea.
        </Text>
      </ExampleSection>

      <ExampleSection title="numberOfLines" description="Limita la cantidad de líneas visibles.">
        <Text style={styles.body} numberOfLines={2}>
          {LONG_TEXT}
        </Text>
      </ExampleSection>

      <ExampleSection title="selectable" description="Mantené presionado para copiar este texto.">
        <Text style={styles.body} selectable>
          Este texto se puede seleccionar y copiar.
        </Text>
      </ExampleSection>
    </ExampleScroll>
  );
}
