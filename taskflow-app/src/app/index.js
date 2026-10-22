import { useRouter } from 'expo-router';
import { Pressable, SectionList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import LibraryBadge from '@/components/LibraryBadge';
import { components, componentSections } from '@/data/components';
import { styles } from '@/styles/styles';

function ComponentRow({ component, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.listItem, pressed && styles.listItemPressed]}
    >
      <View style={styles.listItemBody}>
        <Text style={styles.listItemTitle}>{component.name}</Text>
        <Text style={styles.caption} numberOfLines={2}>
          {component.description}
        </Text>
        <LibraryBadge library={component.library} packageName={component.packageName} />
      </View>
      <Text style={styles.listItemChevron}>›</Text>
    </Pressable>
  );
}

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screen} edges={['bottom', 'left', 'right']}>
      <SectionList
        sections={componentSections}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.homeListContent}
        stickySectionHeadersEnabled={false}
        ListHeaderComponent={
          <View style={styles.homeHeader}>
            <Text style={styles.title}>Catálogo de componentes</Text>
            <Text style={styles.subtitle}>
              {components.length} componentes core de React Native y Expo. Tocá uno para ver su
              implementación.
            </Text>
          </View>
        }
        renderSectionHeader={({ section }) => (
          <View style={styles.homeSectionHeader}>
            <Text style={styles.homeSectionTitle}>
              {section.title} · {section.data.length}
            </Text>
          </View>
        )}
        renderItem={({ item }) => (
          <ComponentRow component={item} onPress={() => router.push(`/components/${item.id}`)} />
        )}
        ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
      />
    </SafeAreaView>
  );
}
