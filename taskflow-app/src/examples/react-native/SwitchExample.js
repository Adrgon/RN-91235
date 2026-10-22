import { useState } from 'react';
import { Switch, Text, View } from 'react-native';

import ExampleScroll from '@/components/ExampleScroll';
import ExampleSection from '@/components/ExampleSection';
import { colors, styles } from '@/styles/styles';

export default function SwitchExample() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ExampleScroll>
      <ExampleSection title="Switch controlado" description="value y onValueChange manejan el estado.">
        <View style={styles.switchRow}>
          <Text style={styles.body}>Notificaciones</Text>
          <Switch value={notifications} onValueChange={setNotifications} />
        </View>
        <Text style={styles.caption}>{notifications ? 'Activadas' : 'Desactivadas'}</Text>
      </ExampleSection>

      <ExampleSection title="Colores personalizados" description="trackColor, thumbColor e ios_backgroundColor.">
        <View style={styles.switchRow}>
          <Text style={styles.body}>Modo oscuro</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: colors.border, true: colors.success }}
            thumbColor={colors.white}
            ios_backgroundColor={colors.border}
          />
        </View>
      </ExampleSection>

      <ExampleSection title="Deshabilitado">
        <View style={styles.switchRow}>
          <Text style={styles.body}>No editable</Text>
          <Switch value disabled />
        </View>
      </ExampleSection>
    </ExampleScroll>
  );
}
