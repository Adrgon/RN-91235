import { useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from 'react-native';

import AppButton from '@/components/AppButton';
import { colors, styles } from '@/styles/styles';

const initialMessages = [
  { id: 1, mine: false, text: 'Hola 👋 Tocá el campo de abajo para abrir el teclado.' },
  { id: 2, mine: false, text: 'KeyboardAvoidingView empuja el contenido para que el input no quede tapado.' },
];

export default function KeyboardAvoidingViewExample() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState('');

  // KeyboardAvoidingView calcula su posición relativa a su padre, así que le
  // pasamos como offset la distancia real desde el borde superior de la pantalla
  // (header de navegación + encabezado de la pantalla de detalle).
  const measureOffset = () => {
    containerRef.current?.measureInWindow((_x, y) => setOffset(y));
  };

  const sendMessage = () => {
    const text = draft.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { id: Date.now(), mine: true, text }]);
    setDraft('');
  };

  return (
    <View ref={containerRef} style={styles.screen} onLayout={measureOffset}>
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={offset}
      >
        <ScrollView
          ref={scrollRef}
          contentContainerStyle={styles.chatMessages}
          keyboardShouldPersistTaps="handled"
          onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}
        >
          {messages.map((message) => (
            <View
              key={message.id}
              style={[styles.chatBubble, message.mine ? styles.chatBubbleMine : styles.chatBubbleOther]}
            >
              <Text style={message.mine ? styles.chatTextMine : styles.chatTextOther}>{message.text}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.chatInputBar}>
          <TextInput
            style={[styles.input, styles.chatInput]}
            placeholder="Escribí un mensaje"
            placeholderTextColor={colors.textMuted}
            value={draft}
            onChangeText={setDraft}
            onSubmitEditing={sendMessage}
            returnKeyType="send"
          />
          <AppButton title="Enviar" onPress={sendMessage} disabled={!draft.trim()} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
