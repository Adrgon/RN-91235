import { useState } from 'react';
import { Button, Text } from 'react-native';

import ExampleScroll from '@/components/ExampleScroll';
import ExampleSection from '@/components/ExampleSection';
import { colors, styles } from '@/styles/styles';

export default function ButtonExample() {
  const [count, setCount] = useState(0);

  return (
    <ExampleScroll>
      <ExampleSection
        title="Button básico"
        description="Button usa el estilo nativo de cada plataforma. Solo acepta title, color, onPress y disabled; para más control usá Pressable."
      >
        <Button title="Sumar 1" onPress={() => setCount((value) => value + 1)} />
        <Text style={[styles.body, styles.textCenter]}>Contador: {count}</Text>
      </ExampleSection>

      <ExampleSection title="Color personalizado" description="La prop color cambia el color del texto (iOS) o del fondo (Android).">
        <Button title="Reiniciar" color={colors.danger} onPress={() => setCount(0)} />
      </ExampleSection>

      <ExampleSection title="Deshabilitado" description="disabled bloquea el botón.">
        <Button title="No me podés tocar" disabled onPress={() => {}} />
      </ExampleSection>
    </ExampleScroll>
  );
}
