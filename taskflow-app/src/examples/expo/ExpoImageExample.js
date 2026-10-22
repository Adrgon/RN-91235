import { Image } from 'expo-image';
import { useState } from 'react';
import { Text, View } from 'react-native';

import AppButton from '@/components/AppButton';
import ExampleScroll from '@/components/ExampleScroll';
import ExampleSection from '@/components/ExampleSection';
import { styles } from '@/styles/styles';

const BLURHASH = 'L6PZfSi_.AyE_3t7t7R**0o#DgR4';
const CONTENT_FITS = ['cover', 'contain', 'fill', 'none'];

export default function ExpoImageExample() {
  const [seed, setSeed] = useState(1);
  const [fitIndex, setFitIndex] = useState(0);
  const contentFit = CONTENT_FITS[fitIndex];

  return (
    <ExampleScroll>
      <ExampleSection
        title="Placeholder y transición"
        description="Muestra un blurhash mientras carga y hace un fundido de 500 ms al cambiar de imagen. Además cachea en disco y memoria."
      >
        <Image
          source={`https://picsum.photos/seed/taskflow-${seed}/800/500`}
          placeholder={{ blurhash: BLURHASH }}
          contentFit="cover"
          transition={500}
          cachePolicy="memory-disk"
          style={styles.imageWide}
        />
        <AppButton title="Otra imagen" onPress={() => setSeed((value) => value + 1)} />
      </ExampleSection>

      <ExampleSection title="contentFit" description="Equivalente a object-fit de CSS.">
        <View style={styles.row}>
          <Image source="https://picsum.photos/id/1025/600/400" contentFit={contentFit} style={styles.imageFitBox} />
        </View>
        <Text style={styles.caption}>contentFit=&quot;{contentFit}&quot;</Text>
        <AppButton
          title="Cambiar contentFit"
          variant="secondary"
          onPress={() => setFitIndex((index) => (index + 1) % CONTENT_FITS.length)}
        />
      </ExampleSection>

      <ExampleSection title="Imagen local" description="También acepta require() como el Image de React Native.">
        <Image source={require('../../../assets/icon.png')} style={styles.imageCircle} />
      </ExampleSection>
    </ExampleScroll>
  );
}
