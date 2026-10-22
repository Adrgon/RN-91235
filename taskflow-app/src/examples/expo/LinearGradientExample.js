import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, Text } from 'react-native';

import ExampleScroll from '@/components/ExampleScroll';
import ExampleSection from '@/components/ExampleSection';
import { gradients, styles } from '@/styles/styles';

export default function LinearGradientExample() {
  return (
    <ExampleScroll>
      <ExampleSection title="Vertical" description="Por defecto va de arriba hacia abajo. colors necesita al menos dos colores.">
        <LinearGradient colors={gradients.sunset} style={styles.gradientBox}>
          <Text style={styles.gradientText}>Atardecer</Text>
        </LinearGradient>
      </ExampleSection>

      <ExampleSection
        title="Horizontal"
        description="start y end son puntos entre 0 y 1: { x: 0, y: 0 } → { x: 1, y: 0 }."
      >
        <LinearGradient
          colors={gradients.ocean}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientBox}
        >
          <Text style={styles.gradientText}>Océano</Text>
        </LinearGradient>
      </ExampleSection>

      <ExampleSection title="Diagonal con locations" description="locations define dónde termina cada color.">
        <LinearGradient
          colors={gradients.primary}
          locations={[0, 0.3, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientBox}
        >
          <Text style={styles.gradientText}>Diagonal</Text>
        </LinearGradient>
      </ExampleSection>

      <ExampleSection title="Botón con degradé" description="Combinado con Pressable.">
        <Pressable style={({ pressed }) => pressed && styles.buttonPressed}>
          <LinearGradient
            colors={gradients.primary}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientButton}
          >
            <Text style={styles.buttonText}>Continuar</Text>
          </LinearGradient>
        </Pressable>
      </ExampleSection>
    </ExampleScroll>
  );
}
