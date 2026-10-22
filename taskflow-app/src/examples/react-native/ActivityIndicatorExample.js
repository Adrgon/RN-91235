import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import AppButton from '@/components/AppButton';
import ExampleScroll from '@/components/ExampleScroll';
import ExampleSection from '@/components/ExampleSection';
import { colors, styles } from '@/styles/styles';

export default function ActivityIndicatorExample() {
  const [loading, setLoading] = useState(false);

  // Simula una petición que tarda 2 segundos.
  useEffect(() => {
    if (!loading) return undefined;
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <ExampleScroll>
      <ExampleSection title="Tamaños y colores" description="size puede ser 'small' o 'large'; color acepta cualquier color.">
        <View style={styles.row}>
          <ActivityIndicator />
          <ActivityIndicator size="large" />
          <ActivityIndicator size="large" color={colors.primary} />
          <ActivityIndicator size="large" color={colors.success} />
        </View>
      </ExampleSection>

      <ExampleSection title="Simular carga" description="Mostrar el spinner mientras esperamos datos.">
        {loading ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : (
          <Text style={[styles.body, styles.textCenter]}>Datos cargados ✓</Text>
        )}
        <AppButton title="Cargar datos" onPress={() => setLoading(true)} disabled={loading} />
      </ExampleSection>
    </ExampleScroll>
  );
}
