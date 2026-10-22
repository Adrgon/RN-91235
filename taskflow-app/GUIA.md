# Guía paso a paso: catálogo de componentes con React Native y Expo

Esta guía explica cómo construir, desde una carpeta vacía, la app de este repositorio: un catálogo que muestra en la pantalla principal una lista de componentes core de **React Native** y **Expo**, y que al tocar cada uno abre una pantalla con ejemplos funcionando.

Al terminar vas a tener:

- Un proyecto Expo **SDK 57** creado con el template `blank`.
- Navegación con **Expo Router** (lista → detalle).
- **Todos los estilos en un solo archivo** (`src/styles/styles.js`).
- 21 ejemplos: 15 de React Native y 6 de Expo.
- ESLint configurado y el proyecto compilando para iOS, Android y web.

---

## Índice

1. [Requisitos](#1-requisitos)
2. [Crear el proyecto con el template blank](#2-crear-el-proyecto-con-el-template-blank)
3. [Instalar Expo Router y los módulos de Expo](#3-instalar-expo-router-y-los-módulos-de-expo)
4. [Configurar el punto de entrada, el scheme y el alias `@/`](#4-configurar-el-punto-de-entrada-el-scheme-y-el-alias-)
5. [Configurar ESLint](#5-configurar-eslint)
6. [Crear la estructura de carpetas](#6-crear-la-estructura-de-carpetas)
7. [El archivo único de estilos](#7-el-archivo-único-de-estilos)
8. [Componentes reutilizables](#8-componentes-reutilizables)
9. [Los ejemplos de React Native](#9-los-ejemplos-de-react-native)
10. [Los ejemplos de Expo](#10-los-ejemplos-de-expo)
11. [El catálogo de componentes](#11-el-catálogo-de-componentes)
12. [Las pantallas y la navegación](#12-las-pantallas-y-la-navegación)
13. [Verificar que todo funciona](#13-verificar-que-todo-funciona)
14. [Ejecutar la app](#14-ejecutar-la-app)
15. [Cómo agregar un componente nuevo](#15-cómo-agregar-un-componente-nuevo)
16. [Problemas comunes y soluciones](#16-problemas-comunes-y-soluciones)

---

## 1. Requisitos

- **Node.js** 20 o superior (este proyecto se hizo con Node 24).
- **npm** (viene con Node).
- La app **Expo Go** en tu teléfono, o un simulador de iOS / emulador de Android.

> **Importante:** Expo cambia bastante entre versiones. Antes de escribir código, consultá la documentación de tu versión exacta: <https://docs.expo.dev/versions/v57.0.0/>. Los ejemplos de esta guía están verificados contra SDK 57.

---

## 2. Crear el proyecto con el template blank

```bash
npx create-expo-app@latest taskflow-app --template blank
cd taskflow-app
npm install
```

El template `blank` genera lo mínimo:

```
taskflow-app/
├── App.js          ← componente raíz (lo vamos a reemplazar)
├── index.js        ← registra App (lo vamos a reemplazar)
├── app.json        ← configuración de Expo
├── assets/         ← íconos y splash
├── package.json
└── AGENTS.md       ← indicaciones para asistentes de IA
```

---

## 3. Instalar Expo Router y los módulos de Expo

Usamos **Expo Router** para navegar: cada archivo dentro de `src/app/` se convierte automáticamente en una pantalla.

> Usá siempre `npx expo install` en lugar de `npm install` para paquetes de Expo o React Native: elige la versión compatible con tu SDK.

```bash
# Navegación (Expo Router y sus dependencias)
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants

# Módulos de Expo que vamos a mostrar en los ejemplos
npx expo install expo-image expo-linear-gradient expo-haptics expo-clipboard

# Soporte para web
npx expo install react-dom react-native-web
```

`expo install` agrega automáticamente los plugins `expo-router` y `expo-image` en `app.json`.

---

## 4. Configurar el punto de entrada, el scheme y el alias `@/`

### 4.1 Borrar los archivos del template

Expo Router reemplaza a `App.js` e `index.js`:

```bash
rm App.js index.js
```

### 4.2 `package.json`: nuevo punto de entrada

Cambiá la propiedad `main`:

```json
{
  "main": "expo-router/entry"
}
```

### 4.3 `app.json`: agregar un `scheme`

El scheme permite abrir la app con enlaces profundos (`taskflowapp://...`). Expo Router lo necesita:

```json
{
  "expo": {
    "name": "taskflow-app",
    "slug": "taskflow-app",
    "scheme": "taskflowapp",
    "plugins": ["expo-router", "expo-image"]
  }
}
```

(El resto del archivo queda como lo generó el template.)

### 4.4 `jsconfig.json`: alias `@/`

Para no escribir rutas como `../../../styles/styles`, creamos un alias que apunta a `src/`. Metro (el empaquetador de Expo) lo entiende sin configuración extra.

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Ahora podemos importar así:

```js
import { styles } from '@/styles/styles';
```

---

## 5. Configurar ESLint

```bash
npm install -D "eslint@^9.0.0" "eslint-config-expo@~57.0.2"
npm pkg set scripts.lint="expo lint"
```

Creá `eslint.config.js` en la raíz:

```js
// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
  {
    // Resuelve el alias "@/..." definido en jsconfig.json.
    settings: {
      'import/resolver': {
        typescript: { project: './jsconfig.json' },
      },
    },
  },
]);
```

> El bloque `settings` es necesario: sin él, ESLint no encuentra los imports con `@/` y marca error `import/no-unresolved` en cada archivo.

---

## 6. Crear la estructura de carpetas

```bash
mkdir -p src/app/components src/components src/data src/styles src/examples/react-native src/examples/expo
```

Así queda organizado el código:

```
src/
├── app/                        ← PANTALLAS (Expo Router)
│   ├── _layout.js              ← navegador Stack
│   ├── index.js                ← pantalla principal: la lista
│   └── components/
│       └── [id].js             ← pantalla de detalle (ruta dinámica)
├── components/                 ← piezas de UI reutilizables
│   ├── AppButton.js
│   ├── ExampleScroll.js
│   ├── ExampleSection.js
│   └── LibraryBadge.js
├── data/
│   └── components.js           ← catálogo: qué componentes existen
├── examples/                   ← un archivo por ejemplo
│   ├── react-native/
│   └── expo/
└── styles/
    └── styles.js               ← TODOS los estilos
```

**Regla:** dentro de `src/app/` solo van pantallas. Todo lo demás (componentes, datos, estilos) va afuera.

---

## 7. El archivo único de estilos

Todos los estilos viven en `src/styles/styles.js`. El archivo exporta dos cosas:

1. **Tokens de diseño** (`colors`, `spacing`, `radius`, `fontSize`, `gradients`): valores sueltos que se usan en props que no son `style`, como el `color` de un `ActivityIndicator` o los `colors` de un `LinearGradient`.
2. **`styles`**: un único `StyleSheet.create` organizado por secciones con comentarios.

```js
// src/styles/styles.js
import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#4F46E5',
  primaryDark: '#3730A3',
  primaryLight: '#EEF2FF',
  expo: '#0E7490',
  expoLight: '#ECFEFF',
  background: '#F5F6FA',
  surface: '#FFFFFF',
  text: '#1F2937',
  textMuted: '#6B7280',
  border: '#E5E7EB',
  success: '#16A34A',
  warning: '#D97706',
  danger: '#DC2626',
  white: '#FFFFFF',
  overlay: 'rgba(17, 24, 39, 0.55)',
  boxA: '#F87171',
  boxB: '#FBBF24',
  boxC: '#34D399',
};

export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 };
export const radius = { sm: 6, md: 12, lg: 20, pill: 999 };
export const fontSize = { xs: 11, sm: 13, md: 15, lg: 18, xl: 24, xxl: 32 };

export const gradients = {
  sunset: ['#F97316', '#EC4899', '#8B5CF6'],
  ocean: ['#06B6D4', '#3B82F6'],
  primary: ['#6366F1', '#4F46E5', '#3730A3'],
};

export const styles = StyleSheet.create({
  /* ───────────── Layout general ───────────── */
  screen: { flex: 1, backgroundColor: colors.background },
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },

  /* ───────────── Tipografía ───────────── */
  title: { fontSize: fontSize.xl, fontWeight: '700', color: colors.text },
  body: { fontSize: fontSize.md, color: colors.text, lineHeight: 22 },
  caption: { fontSize: fontSize.sm, color: colors.textMuted },

  /* ───────────── Home: lista de componentes ───────────── */
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
  },
  listItemPressed: { backgroundColor: colors.primaryLight },

  /* ───────────── Botones ───────────── */
  button: {
    alignItems: 'center',
    paddingVertical: spacing.sm + 4,
    borderRadius: radius.sm,
    backgroundColor: colors.primary,
  },

  // ... una sección por cada componente de ejemplo:
  // View, Text, Image, ScrollView, FlatList, Pressable, Switch,
  // Modal, KeyboardAvoidingView (chat), LinearGradient, Constants...
});
```

> El fragmento de arriba está resumido. El archivo completo tiene ~530 líneas con las secciones: layout general, tipografía, home, badges, detalle, secciones de ejemplo, botones, inputs y una sección por componente. Miralo en [`src/styles/styles.js`](src/styles/styles.js).

### Cómo se usan los estilos

```js
import { colors, styles } from '@/styles/styles';

// Un estilo
<Text style={styles.body}>Hola</Text>

// Combinar estilos con un array (el último gana)
<View style={[styles.box, styles.boxA]} />

// Estilo condicional
<TextInput style={[styles.input, focused && styles.inputFocused]} />

// Tokens en props que no son `style`
<ActivityIndicator color={colors.primary} />
```

**Por qué un solo archivo:** cambiar un color o un espaciado se hace en un solo lugar, y ningún componente queda con estilos "sueltos".

---

## 8. Componentes reutilizables

Antes de los ejemplos, creamos cuatro piezas que todos van a compartir.

### 8.1 `ExampleSection`: tarjeta con título y descripción

```js
// src/components/ExampleSection.js
import { Text, View } from 'react-native';

import { styles } from '@/styles/styles';

// Tarjeta con título y descripción para agrupar cada variante de un ejemplo.
export default function ExampleSection({ title, description, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {description ? <Text style={styles.sectionDescription}>{description}</Text> : null}
      <View style={styles.sectionBody}>{children}</View>
    </View>
  );
}
```

### 8.2 `ExampleScroll`: contenedor con scroll

```js
// src/components/ExampleScroll.js
import { ScrollView } from 'react-native';

import { styles } from '@/styles/styles';

// Contenedor con scroll para los ejemplos que no son listas.
export default function ExampleScroll({ children }) {
  return (
    <ScrollView contentContainerStyle={styles.exampleContent} keyboardShouldPersistTaps="handled">
      {children}
    </ScrollView>
  );
}
```

> Los ejemplos de **FlatList** y **SectionList** no usan `ExampleScroll`: una lista virtualizada no debe ir dentro de un `ScrollView` (React Native muestra una advertencia y pierde rendimiento).

### 8.3 `AppButton`: botón con variantes

```js
// src/components/AppButton.js
import { Pressable, Text } from 'react-native';

import { styles } from '@/styles/styles';

const variantStyles = {
  primary: { button: null, text: null },
  secondary: { button: styles.buttonSecondary, text: styles.buttonTextSecondary },
  danger: { button: styles.buttonDanger, text: null },
};

// Botón reutilizable construido sobre Pressable.
export default function AppButton({ title, onPress, variant = 'primary', disabled = false, style }) {
  const variantStyle = variantStyles[variant] ?? variantStyles.primary;

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        variantStyle.button,
        pressed && styles.buttonPressed,
        disabled && styles.buttonDisabled,
        style,
      ]}
    >
      <Text style={[styles.buttonText, variantStyle.text]}>{title}</Text>
    </Pressable>
  );
}
```

### 8.4 `LibraryBadge`: etiqueta con el paquete

```js
// src/components/LibraryBadge.js
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
```

---

## 9. Los ejemplos de React Native

Cada ejemplo es un archivo en `src/examples/react-native/` que exporta un componente por defecto. Todos siguen el mismo patrón:

```js
import ExampleScroll from '@/components/ExampleScroll';
import ExampleSection from '@/components/ExampleSection';
import { styles } from '@/styles/styles';

export default function AlgoExample() {
  return (
    <ExampleScroll>
      <ExampleSection title="Variante 1" description="Qué muestra esta variante.">
        {/* ... */}
      </ExampleSection>
      <ExampleSection title="Variante 2">{/* ... */}</ExampleSection>
    </ExampleScroll>
  );
}
```

### 9.1 Ejemplo completo: `ViewExample.js`

```js
import { Text, View } from 'react-native';

import ExampleScroll from '@/components/ExampleScroll';
import ExampleSection from '@/components/ExampleSection';
import { styles } from '@/styles/styles';

export default function ViewExample() {
  return (
    <ExampleScroll>
      <ExampleSection
        title="Contenedor básico"
        description="View es el bloque fundamental: un contenedor que soporta flexbox, estilos y eventos táctiles."
      >
        <View style={styles.row}>
          <View style={[styles.box, styles.boxA]} />
          <View style={[styles.box, styles.boxB]} />
          <View style={[styles.box, styles.boxC]} />
        </View>
      </ExampleSection>

      <ExampleSection
        title="Flexbox"
        description="flexDirection: 'row', justifyContent: 'space-between' y alignItems: 'flex-end'. La caja del medio usa flex: 1 para ocupar el espacio libre."
      >
        <View style={styles.flexDemo}>
          <View style={[styles.box, styles.boxA]} />
          <View style={[styles.boxGrow, styles.boxB]} />
          <View style={[styles.box, styles.boxTall, styles.boxC]} />
        </View>
      </ExampleSection>

      <ExampleSection title="Tarjeta con sombra" description="Los View se anidan para construir cualquier layout.">
        <View style={styles.shadowCard}>
          <Text style={styles.sectionTitle}>Soy una tarjeta</Text>
          <Text style={styles.caption}>Un View con padding, borderRadius y boxShadow.</Text>
        </View>
      </ExampleSection>
    </ExampleScroll>
  );
}
```

### 9.2 Resto de los ejemplos: qué muestra cada uno y el código clave

El código completo de cada uno está en `src/examples/react-native/`.

#### Text: `TextExample.js`
Estilos (negrita, cursiva, subrayado), texto anidado, `numberOfLines` y `selectable`.

```js
<Text style={styles.body}>
  Podés <Text style={styles.textHighlight}>resaltar</Text> una palabra.
</Text>
<Text style={styles.body} numberOfLines={2}>{LONG_TEXT}</Text>
```

#### Image: `ImageExample.js`
Imagen local con `require()`, imagen remota (necesita `width` y `height`), `resizeMode` e `ImageBackground`.

```js
const localIcon = require('../../../assets/icon.png');

<Image source={localIcon} style={styles.imageSmall} />
<Image source={{ uri: REMOTE_URI }} style={styles.imageWide} />
<ImageBackground source={{ uri: REMOTE_URI }} style={styles.imageBackground}>
  <Text style={styles.imageBackgroundText}>Texto sobre la imagen</Text>
</ImageBackground>
```

#### TextInput: `TextInputExample.js`
Input controlado con `useState`, estado de foco, `secureTextEntry`, teclado numérico y `multiline`.

```js
const [name, setName] = useState('');

<TextInput
  style={[styles.input, focused && styles.inputFocused]}
  value={name}
  onChangeText={setName}
  onFocus={() => setFocused(true)}
  onBlur={() => setFocused(false)}
/>
```

#### ScrollView: `ScrollViewExample.js`
La pantalla entera es un `ScrollView` vertical y adentro tiene uno horizontal.

```js
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
  {cards.map((card) => <View key={card} style={styles.horizontalCard} />)}
</ScrollView>
```

#### FlatList: `FlatListExample.js`
50 contactos con `keyExtractor`, selección con `extraData`, separadores, header, footer y `ListEmptyComponent`.

```js
<FlatList
  data={contacts}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <ContactRow contact={item} />}
  extraData={selectedId}
  ItemSeparatorComponent={() => <View style={styles.divider} />}
  ListHeaderComponent={<Text>50 contactos</Text>}
/>
```

#### SectionList: `SectionListExample.js`
Datos agrupados en secciones (`{ title, data }`) con encabezados fijos.

```js
<SectionList
  sections={[{ title: 'Frutas', data: ['Manzana', 'Banana'] }]}
  renderItem={({ item }) => <Text>{item}</Text>}
  renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
  stickySectionHeadersEnabled
/>
```

#### Pressable: `PressableExample.js`
`style` y `children` como funciones que reciben `{ pressed }`, y los eventos `onPressIn`, `onPressOut`, `onPress` y `onLongPress`.

```js
<Pressable
  onPress={() => setTaps((count) => count + 1)}
  style={({ pressed }) => [styles.pressableBox, pressed && styles.pressableBoxPressed]}
>
  {({ pressed }) => <Text>{pressed ? '¡Presionado!' : 'Tocame'}</Text>}
</Pressable>
```

#### Button: `ButtonExample.js`
El botón nativo: `title`, `color`, `onPress` y `disabled`. Solo acepta esas props; para más control se usa `Pressable`.

#### Switch: `SwitchExample.js`
Switch controlado y con colores personalizados (`trackColor`, `thumbColor`).

```js
<Switch value={notifications} onValueChange={setNotifications} />
```

#### ActivityIndicator: `ActivityIndicatorExample.js`
Tamaños, colores y una carga simulada con `setTimeout`. El timer se limpia en el `useEffect`:

```js
useEffect(() => {
  if (!loading) return undefined;
  const timer = setTimeout(() => setLoading(false), 2000);
  return () => clearTimeout(timer);
}, [loading]);
```

#### Modal: `ModalExample.js`
Un diálogo transparente centrado y un modal de pantalla completa. `onRequestClose` maneja el botón "atrás" de Android.

```js
<Modal visible={visible} transparent animationType="fade" onRequestClose={() => setVisible(false)}>
  <View style={styles.modalOverlay}>
    <View style={styles.modalCard}>{/* ... */}</View>
  </View>
</Modal>
```

#### Alert: `AlertExample.js`
`Alert` no es un componente visual: es una API que abre el diálogo nativo.

```js
Alert.alert('Eliminar tarea', '¿Seguro que querés eliminarla?', [
  { text: 'Cancelar', style: 'cancel' },
  { text: 'Eliminar', style: 'destructive', onPress: () => setResult('Eliminada') },
]);
```

#### KeyboardAvoidingView: `KeyboardAvoidingViewExample.js`
Un mini chat con el input abajo. Tiene un detalle importante: `KeyboardAvoidingView` calcula su posición **relativa a su padre**, pero en nuestra pantalla hay contenido arriba (el header de navegación y la descripción). Por eso medimos la posición real en pantalla y la pasamos como `keyboardVerticalOffset`:

```js
const containerRef = useRef(null);
const [offset, setOffset] = useState(0);

const measureOffset = () => {
  containerRef.current?.measureInWindow((_x, y) => setOffset(y));
};

<View ref={containerRef} style={styles.screen} onLayout={measureOffset}>
  <KeyboardAvoidingView
    style={styles.screen}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={offset}
  >
    {/* mensajes + input */}
  </KeyboardAvoidingView>
</View>
```

#### RefreshControl: `RefreshControlExample.js`
"Deslizar para actualizar". Se pasa a un `ScrollView` o `FlatList` con la prop `refreshControl`.

```js
<ScrollView
  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
>
```

---

## 10. Los ejemplos de Expo

Van en `src/examples/expo/`. Todas las APIs están verificadas contra la documentación de SDK 57.

#### StatusBar (`expo-status-bar`): `StatusBarExample.js`
Cambia el estilo (`light` / `dark`) y la visibilidad de la barra de estado. Mientras la pantalla está montada, su `StatusBar` tiene prioridad sobre la del layout.

```js
import { StatusBar } from 'expo-status-bar';

<StatusBar style={barStyle} hidden={hidden} animated />
```

#### Image (`expo-image`): `ExpoImageExample.js`
Imagen con caché, placeholder *blurhash*, transición animada y `contentFit`.

```js
import { Image } from 'expo-image';

<Image
  source="https://picsum.photos/seed/taskflow-1/800/500"
  placeholder={{ blurhash: 'L6PZfSi_.AyE_3t7t7R**0o#DgR4' }}
  contentFit="cover"
  transition={500}
  cachePolicy="memory-disk"
  style={styles.imageWide}
/>
```

#### LinearGradient (`expo-linear-gradient`): `LinearGradientExample.js`
Degradé vertical, horizontal (`start` / `end`), diagonal con `locations` y un botón con degradé.

```js
import { LinearGradient } from 'expo-linear-gradient';

<LinearGradient
  colors={gradients.ocean}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
  style={styles.gradientBox}
>
  <Text style={styles.gradientText}>Océano</Text>
</LinearGradient>
```

#### Haptics (`expo-haptics`): `HapticsExample.js`
Vibración háptica. **Solo se siente en un dispositivo físico**, no en simuladores.

```js
import * as Haptics from 'expo-haptics';

Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
Haptics.selectionAsync();
```

#### Clipboard (`expo-clipboard`): `ClipboardExample.js`
Copiar y pegar. Las funciones son asíncronas.

```js
import * as Clipboard from 'expo-clipboard';

await Clipboard.setStringAsync(text);
const content = await Clipboard.getStringAsync();
```

#### Constants (`expo-constants`): `ConstantsExample.js`
Muestra datos de `app.json` (`expoConfig`) e información del entorno.

```js
import Constants from 'expo-constants';

Constants.expoConfig?.name;          // "taskflow-app"
Constants.executionEnvironment;      // "storeClient" en Expo Go
Constants.deviceName;
Constants.statusBarHeight;
```

> Algunas propiedades antiguas (`appOwnership`, `platform`, `deviceYearClass`) están deprecadas en SDK 57: usá `executionEnvironment` o el paquete `expo-device`.

---

## 11. El catálogo de componentes

`src/data/components.js` es el corazón de la app: **una lista de objetos** que describe cada componente. La pantalla principal y la de detalle leen de acá, así que ninguna de las dos necesita saber qué ejemplos existen.

```js
// src/data/components.js
import ViewExample from '@/examples/react-native/ViewExample';
import TextExample from '@/examples/react-native/TextExample';
// ... un import por cada ejemplo
import ExpoImageExample from '@/examples/expo/ExpoImageExample';

export const LIBRARIES = {
  REACT_NATIVE: 'React Native',
  EXPO: 'Expo',
};

export const components = [
  {
    id: 'view',                           // se usa en la URL: /components/view
    name: 'View',                         // título en la lista y en el header
    library: LIBRARIES.REACT_NATIVE,      // sección de la lista
    packageName: 'react-native',          // texto del badge
    description: 'Contenedor básico para construir layouts con flexbox.',
    Example: ViewExample,                 // el componente que se renderiza
  },
  // ... resto de React Native
  {
    id: 'expo-image',
    name: 'Image',
    library: LIBRARIES.EXPO,
    packageName: 'expo-image',
    description: 'Imágenes con caché, placeholders blurhash y transiciones.',
    Example: ExpoImageExample,
  },
  // ... resto de Expo
];

// Datos agrupados para la SectionList de la pantalla principal.
export const componentSections = Object.values(LIBRARIES).map((library) => ({
  title: library,
  data: components.filter((component) => component.library === library),
}));

export function getComponentById(id) {
  return components.find((component) => component.id === id);
}
```

> Fijate que `Example` empieza con mayúscula: así después podemos escribir `<Example />` en JSX.

---

## 12. Las pantallas y la navegación

Con Expo Router, **la estructura de carpetas define las rutas**:

| Archivo | Ruta | Pantalla |
|---|---|---|
| `src/app/_layout.js` | — | Navegador que envuelve todas las pantallas |
| `src/app/index.js` | `/` | Lista de componentes |
| `src/app/components/[id].js` | `/components/:id` | Detalle (los corchetes indican un parámetro dinámico) |

### 12.1 El layout: `src/app/_layout.js`

Define un navegador **Stack**: las pantallas se apilan y el header muestra el botón "atrás" automáticamente.

```js
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { colors } from '@/styles/styles';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.surface },
          headerTintColor: colors.primary,
          headerTitleStyle: { color: colors.text, fontWeight: '700' },
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Componentes' }} />
        <Stack.Screen name="components/[id]" options={{ title: '' }} />
      </Stack>
    </>
  );
}
```

> Expo Router ya incluye el `SafeAreaProvider`, así que no hace falta agregarlo a mano.

### 12.2 La pantalla principal: `src/app/index.js`

Una `SectionList` con dos secciones (React Native y Expo). Al tocar un ítem navegamos con `router.push`.

```js
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
```

> Usamos el `SafeAreaView` de `react-native-safe-area-context` (el de `react-native` está deprecado). El borde superior (`top`) lo omitimos porque de eso ya se ocupa el header del Stack.

### 12.3 La pantalla de detalle: `src/app/components/[id].js`

Lee el `id` de la URL con `useLocalSearchParams`, busca el componente en el catálogo, cambia el título del header y renderiza el ejemplo.

```js
import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import LibraryBadge from '@/components/LibraryBadge';
import { getComponentById } from '@/data/components';
import { styles } from '@/styles/styles';

export default function ComponentDetailScreen() {
  const { id } = useLocalSearchParams();
  const component = getComponentById(id);

  if (!component) {
    return (
      <View style={styles.centered}>
        <Stack.Screen options={{ title: 'No encontrado' }} />
        <Text style={styles.title}>Componente no encontrado</Text>
        <Text style={styles.subtitle}>No existe un ejemplo con el id &quot;{id}&quot;.</Text>
      </View>
    );
  }

  const { Example } = component;

  return (
    <SafeAreaView style={styles.screen} edges={['bottom', 'left', 'right']}>
      <Stack.Screen options={{ title: component.name }} />

      <View style={styles.detailHeader}>
        <LibraryBadge library={component.library} packageName={component.packageName} />
        <Text style={styles.subtitle}>{component.description}</Text>
      </View>

      <View style={styles.exampleContainer}>
        <Example />
      </View>
    </SafeAreaView>
  );
}
```

**Así fluye la navegación:**

```
Lista (/)  ──router.push('/components/flat-list')──▶  Detalle (/components/[id])
                                                        │
                                                        ├─ useLocalSearchParams() → { id: 'flat-list' }
                                                        ├─ getComponentById('flat-list')
                                                        └─ <Example />  →  <FlatListExample />
```

---

## 13. Verificar que todo funciona

```bash
# 1. Lint: no debe mostrar errores
npm run lint

# 2. Diagnóstico de dependencias y configuración de Expo
npx expo-doctor

# 3. Compilar los bundles de las 3 plataformas sin abrir la app
npx expo export --platform all --output-dir /tmp/taskflow-dist
```

Resultado esperado:

```
21/21 checks passed. No issues detected!
Web Bundled     ... node_modules/expo-router/entry.js
Android Bundled ... node_modules/expo-router/entry.js
iOS Bundled     ... node_modules/expo-router/entry.js
```

---

## 14. Ejecutar la app

```bash
npm start
```

Después:

- **Teléfono:** escaneá el código QR con Expo Go (Android) o con la cámara (iOS).
- **Simulador iOS:** apretá `i`.
- **Emulador Android:** apretá `a`.
- **Navegador:** apretá `w`.

Si cambiaste configuración (`app.json`, `jsconfig.json`, `babel`) y algo no se actualiza, limpiá la caché:

```bash
npx expo start --clear
```

---

## 15. Cómo agregar un componente nuevo

Ejemplo: agregar **`TouchableOpacity`**.

**Paso 1.** Si necesitás estilos nuevos, agregalos en `src/styles/styles.js` en una sección propia:

```js
  /* ───────────── TouchableOpacity ───────────── */
  touchableBox: {
    padding: spacing.lg,
    alignItems: 'center',
    borderRadius: radius.md,
    backgroundColor: colors.primary,
  },
```

**Paso 2.** Creá `src/examples/react-native/TouchableOpacityExample.js`:

```js
import { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import ExampleScroll from '@/components/ExampleScroll';
import ExampleSection from '@/components/ExampleSection';
import { styles } from '@/styles/styles';

export default function TouchableOpacityExample() {
  const [count, setCount] = useState(0);

  return (
    <ExampleScroll>
      <ExampleSection title="activeOpacity" description="Baja la opacidad al tocar.">
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.touchableBox}
          onPress={() => setCount((value) => value + 1)}
        >
          <Text style={styles.buttonText}>Toques: {count}</Text>
        </TouchableOpacity>
      </ExampleSection>
    </ExampleScroll>
  );
}
```

**Paso 3.** Registralo en `src/data/components.js`:

```js
import TouchableOpacityExample from '@/examples/react-native/TouchableOpacityExample';

// dentro del array `components`:
{
  id: 'touchable-opacity',
  name: 'TouchableOpacity',
  library: LIBRARIES.REACT_NATIVE,
  packageName: 'react-native',
  description: 'Botón que se vuelve translúcido al tocarlo.',
  Example: TouchableOpacityExample,
},
```

Listo: aparece en la lista y su pantalla de detalle funciona sin tocar nada más.

> Si el componente viene de un paquete de Expo, instalalo primero con `npx expo install <paquete>` y poné el ejemplo en `src/examples/expo/`.

---

## 16. Problemas comunes y soluciones

| Problema | Causa | Solución |
|---|---|---|
| `npm error ERESOLVE ... react-dom@19.3.0 ... Found: react@19.2.3` al instalar algo | npm intenta traer una versión de `react-dom` incompatible con la de `react` | `npx expo install react-dom` instala la versión correcta del SDK |
| ESLint: `Unable to resolve path to module '@/...'` | El resolver de ESLint no lee `jsconfig.json` por defecto | Agregá el bloque `settings['import/resolver']` del [paso 5](#5-configurar-eslint) |
| Web: `Unable to resolve module react-native-web` | El template blank no incluye soporte web | `npx expo install react-native-web react-dom` |
| La app sigue mostrando la pantalla de `App.js` | `main` todavía apunta a `index.js` | Poné `"main": "expo-router/entry"` en `package.json` y reiniciá con `--clear` |
| Advertencia `VirtualizedLists should never be nested inside plain ScrollViews` | Una `FlatList` dentro de un `ScrollView` | Hacé que la lista sea la raíz del ejemplo (no uses `ExampleScroll`) |
| El teclado tapa el input | `keyboardVerticalOffset` incorrecto | Medí la posición con `measureInWindow`, como en el ejemplo de KeyboardAvoidingView |
| Haptics no vibra | Estás en un simulador | Probalo en un dispositivo físico |
| Una imagen remota no se ve | `Image` de React Native sin tamaño | Dale `width` y `height` en el estilo |
