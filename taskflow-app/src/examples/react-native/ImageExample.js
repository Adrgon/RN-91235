import { Image, ImageBackground, Text, View } from 'react-native';

import ExampleScroll from '@/components/ExampleScroll';
import ExampleSection from '@/components/ExampleSection';
import { styles } from '@/styles/styles';

const localIcon = require('../../../assets/icon.png');
const REMOTE_URI = 'https://picsum.photos/id/1015/800/500';

export default function ImageExample() {
  return (
    <ExampleScroll>
      <ExampleSection title="Imagen local" description="Se importa con require() desde la carpeta assets.">
        <View style={styles.row}>
          <Image source={localIcon} style={styles.imageSmall} />
          <Image source={localIcon} style={styles.imageCircle} />
        </View>
      </ExampleSection>

      <ExampleSection title="Imagen remota" description="Las imágenes de red necesitan un tamaño explícito (width y height).">
        <Image source={{ uri: REMOTE_URI }} style={styles.imageWide} />
      </ExampleSection>

      <ExampleSection title="resizeMode" description="cover recorta para llenar el espacio; contain muestra la imagen completa.">
        <View style={styles.row}>
          <Image source={{ uri: REMOTE_URI }} style={styles.imageFitBox} resizeMode="cover" />
          <Image source={{ uri: REMOTE_URI }} style={styles.imageFitBox} resizeMode="contain" />
        </View>
      </ExampleSection>

      <ExampleSection title="ImageBackground" description="Una imagen de fondo con contenido encima.">
        <ImageBackground
          source={{ uri: REMOTE_URI }}
          style={styles.imageBackground}
          imageStyle={styles.imageBackgroundImage}
        >
          <Text style={styles.imageBackgroundText}>Texto sobre la imagen</Text>
        </ImageBackground>
      </ExampleSection>
    </ExampleScroll>
  );
}
