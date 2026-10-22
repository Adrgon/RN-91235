import { useState } from 'react';
import { Pressable, Text } from 'react-native';

import ExampleScroll from '@/components/ExampleScroll';
import ExampleSection from '@/components/ExampleSection';
import { styles } from '@/styles/styles';

export default function PressableExample() {
  const [taps, setTaps] = useState(0);
  const [lastEvent, setLastEvent] = useState('Ninguno');
  const [longPressed, setLongPressed] = useState(false);

  return (
    <ExampleScroll>
      <ExampleSection
        title="Estado pressed"
        description="style y children pueden ser funciones que reciben { pressed }."
      >
        <Pressable
          onPress={() => setTaps((count) => count + 1)}
          style={({ pressed }) => [styles.pressableBox, pressed && styles.pressableBoxPressed]}
        >
          {({ pressed }) => (
            <Text style={styles.buttonText}>{pressed ? '¡Presionado!' : `Tocame (${taps})`}</Text>
          )}
        </Pressable>
      </ExampleSection>

      <ExampleSection
        title="Eventos"
        description="onPressIn, onPressOut, onPress y onLongPress (mantené presionado 1 segundo)."
      >
        <Pressable
          onPressIn={() => setLastEvent('onPressIn')}
          onPressOut={() => setLastEvent((prev) => `${prev} → onPressOut`)}
          onPress={() => setLastEvent((prev) => `${prev} → onPress`)}
          onLongPress={() => {
            setLastEvent((prev) => `${prev} → onLongPress`);
            setLongPressed((value) => !value);
          }}
          delayLongPress={1000}
          hitSlop={16}
          style={({ pressed }) => [
            styles.pressableBox,
            longPressed && styles.pressableBoxLong,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Probá tocar y mantener</Text>
        </Pressable>
        <Text style={styles.caption}>Eventos: {lastEvent}</Text>
      </ExampleSection>
    </ExampleScroll>
  );
}
