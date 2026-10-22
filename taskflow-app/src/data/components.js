// Catálogo de componentes. Para sumar un ejemplo nuevo:
// 1. Creá el archivo en src/examples/react-native o src/examples/expo.
// 2. Agregá una entrada a este array.
import ClipboardExample from '@/examples/expo/ClipboardExample';
import ConstantsExample from '@/examples/expo/ConstantsExample';
import ExpoImageExample from '@/examples/expo/ExpoImageExample';
import HapticsExample from '@/examples/expo/HapticsExample';
import LinearGradientExample from '@/examples/expo/LinearGradientExample';
import StatusBarExample from '@/examples/expo/StatusBarExample';
import ActivityIndicatorExample from '@/examples/react-native/ActivityIndicatorExample';
import AlertExample from '@/examples/react-native/AlertExample';
import ButtonExample from '@/examples/react-native/ButtonExample';
import FlatListExample from '@/examples/react-native/FlatListExample';
import ImageExample from '@/examples/react-native/ImageExample';
import KeyboardAvoidingViewExample from '@/examples/react-native/KeyboardAvoidingViewExample';
import ModalExample from '@/examples/react-native/ModalExample';
import PressableExample from '@/examples/react-native/PressableExample';
import RefreshControlExample from '@/examples/react-native/RefreshControlExample';
import ScrollViewExample from '@/examples/react-native/ScrollViewExample';
import SectionListExample from '@/examples/react-native/SectionListExample';
import SwitchExample from '@/examples/react-native/SwitchExample';
import TextExample from '@/examples/react-native/TextExample';
import TextInputExample from '@/examples/react-native/TextInputExample';
import ViewExample from '@/examples/react-native/ViewExample';

export const LIBRARIES = {
  REACT_NATIVE: 'React Native',
  EXPO: 'Expo',
};

export const components = [
  // ───── React Native ─────
  {
    id: 'view',
    name: 'View',
    library: LIBRARIES.REACT_NATIVE,
    packageName: 'react-native',
    description: 'Contenedor básico para construir layouts con flexbox.',
    Example: ViewExample,
  },
  {
    id: 'text',
    name: 'Text',
    library: LIBRARIES.REACT_NATIVE,
    packageName: 'react-native',
    description: 'Muestra texto con estilos, anidado y recorte de líneas.',
    Example: TextExample,
  },
  {
    id: 'image',
    name: 'Image',
    library: LIBRARIES.REACT_NATIVE,
    packageName: 'react-native',
    description: 'Imágenes locales y remotas, resizeMode e ImageBackground.',
    Example: ImageExample,
  },
  {
    id: 'text-input',
    name: 'TextInput',
    library: LIBRARIES.REACT_NATIVE,
    packageName: 'react-native',
    description: 'Campos de texto controlados, contraseñas y multilínea.',
    Example: TextInputExample,
  },
  {
    id: 'scroll-view',
    name: 'ScrollView',
    library: LIBRARIES.REACT_NATIVE,
    packageName: 'react-native',
    description: 'Contenido desplazable vertical y horizontal.',
    Example: ScrollViewExample,
  },
  {
    id: 'flat-list',
    name: 'FlatList',
    library: LIBRARIES.REACT_NATIVE,
    packageName: 'react-native',
    description: 'Listas largas y eficientes con header, footer y separadores.',
    Example: FlatListExample,
  },
  {
    id: 'section-list',
    name: 'SectionList',
    library: LIBRARIES.REACT_NATIVE,
    packageName: 'react-native',
    description: 'Listas agrupadas en secciones con encabezados fijos.',
    Example: SectionListExample,
  },
  {
    id: 'pressable',
    name: 'Pressable',
    library: LIBRARIES.REACT_NATIVE,
    packageName: 'react-native',
    description: 'Detecta toques, pulsaciones largas y el estado pressed.',
    Example: PressableExample,
  },
  {
    id: 'button',
    name: 'Button',
    library: LIBRARIES.REACT_NATIVE,
    packageName: 'react-native',
    description: 'Botón nativo simple de cada plataforma.',
    Example: ButtonExample,
  },
  {
    id: 'switch',
    name: 'Switch',
    library: LIBRARIES.REACT_NATIVE,
    packageName: 'react-native',
    description: 'Interruptor booleano de encendido/apagado.',
    Example: SwitchExample,
  },
  {
    id: 'activity-indicator',
    name: 'ActivityIndicator',
    library: LIBRARIES.REACT_NATIVE,
    packageName: 'react-native',
    description: 'Indicador circular de carga.',
    Example: ActivityIndicatorExample,
  },
  {
    id: 'modal',
    name: 'Modal',
    library: LIBRARIES.REACT_NATIVE,
    packageName: 'react-native',
    description: 'Contenido superpuesto: diálogos y pantallas modales.',
    Example: ModalExample,
  },
  {
    id: 'alert',
    name: 'Alert',
    library: LIBRARIES.REACT_NATIVE,
    packageName: 'react-native',
    description: 'API para abrir diálogos nativos con botones.',
    Example: AlertExample,
  },
  {
    id: 'keyboard-avoiding-view',
    name: 'KeyboardAvoidingView',
    library: LIBRARIES.REACT_NATIVE,
    packageName: 'react-native',
    description: 'Evita que el teclado tape los campos de texto.',
    Example: KeyboardAvoidingViewExample,
  },
  {
    id: 'refresh-control',
    name: 'RefreshControl',
    library: LIBRARIES.REACT_NATIVE,
    packageName: 'react-native',
    description: 'Deslizar hacia abajo para actualizar (pull to refresh).',
    Example: RefreshControlExample,
  },

  // ───── Expo ─────
  {
    id: 'expo-status-bar',
    name: 'StatusBar',
    library: LIBRARIES.EXPO,
    packageName: 'expo-status-bar',
    description: 'Controla el estilo y la visibilidad de la barra de estado.',
    Example: StatusBarExample,
  },
  {
    id: 'expo-image',
    name: 'Image',
    library: LIBRARIES.EXPO,
    packageName: 'expo-image',
    description: 'Imágenes con caché, placeholders blurhash y transiciones.',
    Example: ExpoImageExample,
  },
  {
    id: 'expo-linear-gradient',
    name: 'LinearGradient',
    library: LIBRARIES.EXPO,
    packageName: 'expo-linear-gradient',
    description: 'Fondos con degradé lineal.',
    Example: LinearGradientExample,
  },
  {
    id: 'expo-haptics',
    name: 'Haptics',
    library: LIBRARIES.EXPO,
    packageName: 'expo-haptics',
    description: 'Vibración háptica para dar feedback táctil.',
    Example: HapticsExample,
  },
  {
    id: 'expo-clipboard',
    name: 'Clipboard',
    library: LIBRARIES.EXPO,
    packageName: 'expo-clipboard',
    description: 'Copiar y pegar desde el portapapeles del sistema.',
    Example: ClipboardExample,
  },
  {
    id: 'expo-constants',
    name: 'Constants',
    library: LIBRARIES.EXPO,
    packageName: 'expo-constants',
    description: 'Información de la app y del dispositivo en tiempo de ejecución.',
    Example: ConstantsExample,
  },
];

// Datos agrupados para la SectionList de la pantalla principal.
export const componentSections = Object.values(LIBRARIES).map((library) => ({
  title: library,
  data: components.filter((component) => component.library === library),
}));

export function getComponentById(id) {
  return components.find((component) => component.id === id);
}
