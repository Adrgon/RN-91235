import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text } from 'react-native';

import AppButton from '@/components/AppButton';
import ExampleScroll from '@/components/ExampleScroll';
import ExampleSection from '@/components/ExampleSection';
import { styles } from '@/styles/styles';

export default function StatusBarExample() {
  const [barStyle, setBarStyle] = useState('dark');
  const [hidden, setHidden] = useState(false);

  return (
    <ExampleScroll>
      {/* Mientras esta pantalla está montada, su StatusBar tiene prioridad sobre la del layout. */}
      <StatusBar style={barStyle} hidden={hidden} animated />

      <ExampleSection
        title="Estilo del contenido"
        description="style puede ser 'auto', 'light', 'dark' o 'inverted'. Mirá la hora y la batería arriba de todo."
      >
        <Text style={styles.body}>Estilo actual: {barStyle}</Text>
        <AppButton
          title={barStyle === 'dark' ? "Cambiar a 'light'" : "Cambiar a 'dark'"}
          onPress={() => setBarStyle((value) => (value === 'dark' ? 'light' : 'dark'))}
        />
      </ExampleSection>

      <ExampleSection title="Ocultar" description="hidden oculta la barra de estado (con animación si animated está activo).">
        <AppButton
          title={hidden ? 'Mostrar barra' : 'Ocultar barra'}
          variant="secondary"
          onPress={() => setHidden((value) => !value)}
        />
      </ExampleSection>
    </ExampleScroll>
  );
}
