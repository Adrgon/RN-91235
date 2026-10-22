import * as Haptics from 'expo-haptics';
import { View } from 'react-native';

import AppButton from '@/components/AppButton';
import ExampleScroll from '@/components/ExampleScroll';
import ExampleSection from '@/components/ExampleSection';
import { styles } from '@/styles/styles';

export default function HapticsExample() {
  return (
    <ExampleScroll>
      <ExampleSection
        title="impactAsync"
        description="Simula un golpe físico. Probalo en un dispositivo real: en simuladores no vibra."
      >
        <View style={styles.row}>
          <AppButton
            title="Light"
            style={styles.flexButton}
            onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
          />
          <AppButton
            title="Medium"
            style={styles.flexButton}
            onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}
          />
          <AppButton
            title="Heavy"
            style={styles.flexButton}
            onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}
          />
        </View>
      </ExampleSection>

      <ExampleSection title="notificationAsync" description="Para comunicar el resultado de una acción.">
        <AppButton
          title="Éxito"
          variant="secondary"
          onPress={() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)}
        />
        <AppButton
          title="Advertencia"
          variant="secondary"
          onPress={() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)}
        />
        <AppButton
          title="Error"
          variant="danger"
          onPress={() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)}
        />
      </ExampleSection>

      <ExampleSection title="selectionAsync" description="Una vibración sutil para cambios de selección (ej. un picker).">
        <AppButton title="Selección" onPress={() => Haptics.selectionAsync()} />
      </ExampleSection>
    </ExampleScroll>
  );
}
