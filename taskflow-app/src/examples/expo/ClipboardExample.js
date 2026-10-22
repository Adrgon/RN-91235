import * as Clipboard from 'expo-clipboard';
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import AppButton from '@/components/AppButton';
import ExampleScroll from '@/components/ExampleScroll';
import ExampleSection from '@/components/ExampleSection';
import { colors, styles } from '@/styles/styles';

export default function ClipboardExample() {
  const [text, setText] = useState('¡Hola desde TaskFlow!');
  const [pasted, setPasted] = useState('');
  const [status, setStatus] = useState('');

  const copy = async () => {
    await Clipboard.setStringAsync(text);
    setStatus('Copiado ✓');
  };

  const paste = async () => {
    const content = await Clipboard.getStringAsync();
    setPasted(content || '(el portapapeles está vacío)');
  };

  return (
    <ExampleScroll>
      <ExampleSection title="setStringAsync" description="Copia texto al portapapeles del sistema.">
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(value) => {
            setText(value);
            setStatus('');
          }}
          placeholder="Texto a copiar"
          placeholderTextColor={colors.textMuted}
        />
        <AppButton title="Copiar" onPress={copy} disabled={!text} />
        {status ? <Text style={styles.caption}>{status}</Text> : null}
      </ExampleSection>

      <ExampleSection
        title="getStringAsync"
        description="Lee el contenido actual del portapapeles. iOS puede pedir permiso para pegar."
      >
        <AppButton title="Pegar" variant="secondary" onPress={paste} />
        <View style={styles.resultBox}>
          <Text style={styles.body}>{pasted || 'Tocá "Pegar" para ver el contenido'}</Text>
        </View>
      </ExampleSection>
    </ExampleScroll>
  );
}
