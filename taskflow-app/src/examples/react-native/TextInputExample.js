import { useState } from 'react';
import { Text, TextInput } from 'react-native';

import ExampleScroll from '@/components/ExampleScroll';
import ExampleSection from '@/components/ExampleSection';
import { colors, styles } from '@/styles/styles';

export default function TextInputExample() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [notes, setNotes] = useState('');
  const [focused, setFocused] = useState(false);

  return (
    <ExampleScroll>
      <ExampleSection title="Input controlado" description="El valor vive en el estado y se actualiza con onChangeText.">
        <TextInput
          style={[styles.input, focused && styles.inputFocused]}
          placeholder="Escribí tu nombre"
          placeholderTextColor={colors.textMuted}
          value={name}
          onChangeText={setName}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          autoCapitalize="words"
        />
        <Text style={styles.caption}>Hola, {name || '...'}</Text>
      </ExampleSection>

      <ExampleSection title="Contraseña" description="secureTextEntry oculta los caracteres.">
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor={colors.textMuted}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Text style={styles.caption}>{password.length} caracteres</Text>
      </ExampleSection>

      <ExampleSection title="Teclado numérico" description="keyboardType cambia el teclado que se muestra.">
        <TextInput
          style={styles.input}
          placeholder="Edad"
          placeholderTextColor={colors.textMuted}
          value={age}
          onChangeText={(text) => setAge(text.replace(/[^0-9]/g, ''))}
          keyboardType="number-pad"
          maxLength={3}
        />
      </ExampleSection>

      <ExampleSection title="Multilínea" description="multiline permite escribir varios renglones.">
        <TextInput
          style={[styles.input, styles.inputMultiline]}
          placeholder="Notas..."
          placeholderTextColor={colors.textMuted}
          value={notes}
          onChangeText={setNotes}
          multiline
        />
      </ExampleSection>
    </ExampleScroll>
  );
}
