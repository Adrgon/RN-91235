import Constants from 'expo-constants';
import { Platform, Text, View } from 'react-native';

import ExampleScroll from '@/components/ExampleScroll';
import ExampleSection from '@/components/ExampleSection';
import { styles } from '@/styles/styles';

function formatValue(value) {
  if (value === null || value === undefined || value === '') return '—';
  return String(value);
}

function InfoRow({ label, value }) {
  return (
    <View style={styles.kvRow}>
      <Text style={styles.kvKey}>{label}</Text>
      <Text style={styles.kvValue} selectable>
        {formatValue(value)}
      </Text>
    </View>
  );
}

export default function ConstantsExample() {
  const { expoConfig } = Constants;

  return (
    <ExampleScroll>
      <ExampleSection title="App (expoConfig)" description="Los valores de app.json disponibles en tiempo de ejecución.">
        <View>
          <InfoRow label="name" value={expoConfig?.name} />
          <InfoRow label="slug" value={expoConfig?.slug} />
          <InfoRow label="version" value={expoConfig?.version} />
          <InfoRow label="scheme" value={expoConfig?.scheme} />
          <InfoRow label="orientation" value={expoConfig?.orientation} />
        </View>
      </ExampleSection>

      <ExampleSection title="Entorno y dispositivo">
        <View>
          <InfoRow label="Platform.OS" value={Platform.OS} />
          <InfoRow label="executionEnvironment" value={Constants.executionEnvironment} />
          <InfoRow label="deviceName" value={Constants.deviceName} />
          <InfoRow label="statusBarHeight" value={Constants.statusBarHeight} />
          <InfoRow label="expoVersion" value={Constants.expoVersion} />
          <InfoRow label="sessionId" value={Constants.sessionId} />
          <InfoRow label="systemFonts" value={`${Constants.systemFonts?.length ?? 0} fuentes`} />
        </View>
      </ExampleSection>
    </ExampleScroll>
  );
}
