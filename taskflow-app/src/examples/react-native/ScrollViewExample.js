import { ScrollView, Text, View } from 'react-native';

import ExampleSection from '@/components/ExampleSection';
import { styles } from '@/styles/styles';

const cards = Array.from({ length: 10 }, (_, index) => index + 1);
const paragraphs = Array.from({ length: 6 }, (_, index) => index + 1);

export default function ScrollViewExample() {
  return (
    // La pantalla completa es un ScrollView vertical.
    <ScrollView contentContainerStyle={styles.exampleContent}>
      <ExampleSection
        title="Scroll horizontal"
        description="horizontal={true} y showsHorizontalScrollIndicator={false}."
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
        >
          {cards.map((card) => (
            <View key={card} style={styles.horizontalCard}>
              <Text style={styles.horizontalCardText}>{card}</Text>
            </View>
          ))}
        </ScrollView>
      </ExampleSection>

      <ExampleSection
        title="Scroll vertical"
        description="Toda esta pantalla es un ScrollView: renderiza todos sus hijos de una vez, ideal para contenido corto. Para listas largas usá FlatList."
      >
        {paragraphs.map((paragraph) => (
          <Text key={paragraph} style={styles.body}>
            Párrafo {paragraph}. Deslizá hacia abajo para ver más contenido.
          </Text>
        ))}
      </ExampleSection>
    </ScrollView>
  );
}
