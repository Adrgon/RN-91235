import { useCallback, useEffect, useRef, useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';

import ExampleSection from '@/components/ExampleSection';
import { colors, styles } from '@/styles/styles';

export default function RefreshControlExample() {
  const [refreshing, setRefreshing] = useState(false);
  const [items, setItems] = useState([1]);
  const timerRef = useRef(null);

  // Limpiamos el timer si la pantalla se desmonta mientras "carga".
  useEffect(() => () => clearTimeout(timerRef.current), []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    timerRef.current = setTimeout(() => {
      setItems((prev) => [prev.length + 1, ...prev]);
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.exampleContent}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[colors.primary]}
          tintColor={colors.primary}
        />
      }
    >
      <ExampleSection
        title="Pull to refresh"
        description="Deslizá hacia abajo desde el principio de la lista. RefreshControl se pasa a ScrollView o FlatList mediante la prop refreshControl."
      >
        {items.map((item) => (
          <View key={item} style={styles.resultBox}>
            <Text style={styles.body}>Actualización #{item}</Text>
          </View>
        ))}
      </ExampleSection>
    </ScrollView>
  );
}
