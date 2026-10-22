import { Text, View } from 'react-native';

import { LIBRARIES } from '@/data/components';
import { styles } from '@/styles/styles';

// Etiqueta con el paquete del que viene el componente (react-native, expo-image, ...).
export default function LibraryBadge({ library, packageName }) {
  const isExpo = library === LIBRARIES.EXPO;

  return (
    <View style={[styles.badge, isExpo ? styles.badgeExpo : styles.badgeReactNative]}>
      <Text style={[styles.badgeText, isExpo ? styles.badgeTextExpo : styles.badgeTextReactNative]}>
        {packageName}
      </Text>
    </View>
  );
}
