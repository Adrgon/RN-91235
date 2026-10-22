import { useState } from 'react';
import { Modal, Text, View } from 'react-native';

import AppButton from '@/components/AppButton';
import ExampleScroll from '@/components/ExampleScroll';
import ExampleSection from '@/components/ExampleSection';
import { styles } from '@/styles/styles';

export default function ModalExample() {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [sheetVisible, setSheetVisible] = useState(false);

  return (
    <ExampleScroll>
      <ExampleSection
        title="Modal transparente"
        description="transparent + animationType='fade' para un diálogo centrado sobre un fondo oscuro."
      >
        <AppButton title="Abrir diálogo" onPress={() => setDialogVisible(true)} />
      </ExampleSection>

      <ExampleSection
        title="Modal de pantalla completa"
        description="animationType='slide' y presentationStyle='pageSheet' (en iOS se ve como hoja)."
      >
        <AppButton title="Abrir modal" variant="secondary" onPress={() => setSheetVisible(true)} />
      </ExampleSection>

      <Modal
        visible={dialogVisible}
        transparent
        animationType="fade"
        // onRequestClose se ejecuta con el botón "atrás" de Android.
        onRequestClose={() => setDialogVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.title}>¡Hola!</Text>
            <Text style={styles.body}>Este es un Modal transparente con una tarjeta en el centro.</Text>
            <AppButton title="Cerrar" onPress={() => setDialogVisible(false)} />
          </View>
        </View>
      </Modal>

      <Modal
        visible={sheetVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setSheetVisible(false)}
      >
        <View style={styles.modalFullScreen}>
          <Text style={styles.title}>Modal completo</Text>
          <Text style={styles.body}>Ocupa toda la pantalla. En iOS podés deslizarlo hacia abajo para cerrarlo.</Text>
          <AppButton title="Cerrar" variant="danger" onPress={() => setSheetVisible(false)} />
        </View>
      </Modal>
    </ExampleScroll>
  );
}
