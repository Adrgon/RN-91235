import { useState } from 'react';
import { Alert, Text, View } from 'react-native';

import AppButton from '@/components/AppButton';
import ExampleScroll from '@/components/ExampleScroll';
import ExampleSection from '@/components/ExampleSection';
import { styles } from '@/styles/styles';

export default function AlertExample() {
  const [result, setResult] = useState('Todavía no elegiste nada');

  const showSimpleAlert = () => {
    Alert.alert('Atención', 'Este es un Alert simple con un solo botón.');
  };

  const showConfirmAlert = () => {
    Alert.alert('Eliminar tarea', '¿Seguro que querés eliminarla?', [
      { text: 'Cancelar', style: 'cancel', onPress: () => setResult('Cancelaste') },
      { text: 'Eliminar', style: 'destructive', onPress: () => setResult('Eliminaste la tarea') },
    ]);
  };

  const showThreeOptions = () => {
    Alert.alert('Guardar cambios', 'Tenés cambios sin guardar.', [
      { text: 'Descartar', style: 'destructive', onPress: () => setResult('Descartaste los cambios') },
      { text: 'Cancelar', style: 'cancel', onPress: () => setResult('Cancelaste') },
      { text: 'Guardar', onPress: () => setResult('Guardaste los cambios') },
    ]);
  };

  return (
    <ExampleScroll>
      <ExampleSection
        title="Alert.alert"
        description="Alert no es un componente visual: es una API que abre el diálogo nativo. En web el soporte es limitado."
      >
        <AppButton title="Alert simple" onPress={showSimpleAlert} />
        <AppButton title="Confirmación" variant="secondary" onPress={showConfirmAlert} />
        <AppButton title="Tres opciones" variant="secondary" onPress={showThreeOptions} />
      </ExampleSection>

      <ExampleSection title="Resultado">
        <View style={styles.resultBox}>
          <Text style={styles.body}>{result}</Text>
        </View>
      </ExampleSection>
    </ExampleScroll>
  );
}
