// Todos los estilos de la app viven en este archivo.
// Los tokens (colores, espaciados, tipografía) se exportan por separado
// para poder usarlos en props que no son `style` (ej. color de un ActivityIndicator).
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
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  /* ───────────── Tipografía ───────────── */
  title: {
    fontSize: fontSize.xl,
    fontWeight: '700',
    color: colors.text,
  },
  subtitle: {
    fontSize: fontSize.md,
    color: colors.textMuted,
    lineHeight: 22,
  },
  body: {
    fontSize: fontSize.md,
    color: colors.text,
    lineHeight: 22,
  },
  caption: {
    fontSize: fontSize.sm,
    color: colors.textMuted,
  },
  mono: {
    fontFamily: 'monospace',
    fontSize: fontSize.sm,
    color: colors.text,
  },

  /* ───────────── Home: lista de componentes ───────────── */
  homeListContent: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xl,
  },
  homeHeader: {
    paddingVertical: spacing.lg,
    gap: spacing.sm,
  },
  homeSectionHeader: {
    paddingTop: spacing.lg,
    paddingBottom: spacing.sm,
    backgroundColor: colors.background,
  },
  homeSectionTitle: {
    fontSize: fontSize.sm,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: colors.textMuted,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  listItemPressed: {
    backgroundColor: colors.primaryLight,
  },
  listItemBody: {
    flex: 1,
    gap: spacing.xs,
  },
  listItemTitle: {
    fontSize: fontSize.lg,
    fontWeight: '600',
    color: colors.text,
  },
  listItemChevron: {
    fontSize: fontSize.xl,
    color: colors.textMuted,
    marginLeft: spacing.sm,
  },
  listSeparator: {
    height: spacing.sm,
  },

  /* ───────────── Badges ───────────── */
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radius.pill,
  },
  badgeReactNative: {
    backgroundColor: colors.primaryLight,
  },
  badgeExpo: {
    backgroundColor: colors.expoLight,
  },
  badgeText: {
    fontSize: fontSize.xs,
    fontWeight: '700',
  },
  badgeTextReactNative: {
    color: colors.primary,
  },
  badgeTextExpo: {
    color: colors.expo,
  },

  /* ───────────── Pantalla de detalle ───────────── */
  detailHeader: {
    padding: spacing.md,
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  exampleContainer: {
    flex: 1,
  },
  exampleContent: {
    padding: spacing.md,
    gap: spacing.md,
  },

  /* ───────────── Secciones de ejemplo ───────────── */
  section: {
    padding: spacing.md,
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  sectionTitle: {
    fontSize: fontSize.lg,
    fontWeight: '600',
    color: colors.text,
  },
  sectionDescription: {
    fontSize: fontSize.sm,
    color: colors.textMuted,
    lineHeight: 18,
  },
  sectionBody: {
    gap: spacing.sm,
    marginTop: spacing.xs,
  },

  /* ───────────── Botones ───────────── */
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm + 4,
    paddingHorizontal: spacing.md,
    borderRadius: radius.sm,
    backgroundColor: colors.primary,
  },
  buttonSecondary: {
    backgroundColor: colors.primaryLight,
  },
  buttonDanger: {
    backgroundColor: colors.danger,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonDisabled: {
    opacity: 0.4,
  },
  buttonText: {
    fontSize: fontSize.md,
    fontWeight: '600',
    color: colors.white,
  },
  buttonTextSecondary: {
    color: colors.primary,
  },
  flexButton: {
    flex: 1,
  },

  /* ───────────── Inputs ───────────── */
  input: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 2,
    fontSize: fontSize.md,
    color: colors.text,
    backgroundColor: colors.background,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  inputFocused: {
    borderColor: colors.primary,
  },
  inputMultiline: {
    minHeight: 96,
    textAlignVertical: 'top',
  },

  /* ───────────── View ───────────── */
  box: {
    width: 64,
    height: 64,
    borderRadius: radius.sm,
  },
  boxA: { backgroundColor: colors.boxA },
  boxB: { backgroundColor: colors.boxB },
  boxC: { backgroundColor: colors.boxC },
  flexDemo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 120,
    padding: spacing.sm,
    backgroundColor: colors.background,
    borderRadius: radius.sm,
  },
  boxTall: { height: 96 },
  boxGrow: { flex: 1, height: 40 },
  shadowCard: {
    padding: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
  },

  /* ───────────── Text ───────────── */
  textHeading: {
    fontSize: fontSize.xxl,
    fontWeight: '800',
    color: colors.text,
  },
  textBold: { fontWeight: '700' },
  textItalic: { fontStyle: 'italic' },
  textUnderline: { textDecorationLine: 'underline' },
  textHighlight: {
    color: colors.primary,
    fontWeight: '700',
  },
  textCenter: { textAlign: 'center' },

  /* ───────────── Image / ImageBackground ───────────── */
  imageSmall: {
    width: 80,
    height: 80,
    borderRadius: radius.md,
  },
  imageWide: {
    width: '100%',
    height: 180,
    borderRadius: radius.md,
    backgroundColor: colors.border,
  },
  imageFitBox: {
    flex: 1,
    height: 110,
    borderRadius: radius.sm,
    backgroundColor: colors.border,
  },
  imageCircle: {
    width: 96,
    height: 96,
    borderRadius: radius.pill,
  },
  imageBackground: {
    height: 160,
    justifyContent: 'flex-end',
    padding: spacing.md,
  },
  imageBackgroundImage: {
    borderRadius: radius.md,
  },
  imageBackgroundText: {
    fontSize: fontSize.lg,
    fontWeight: '700',
    color: colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowRadius: 6,
  },

  /* ───────────── ScrollView ───────────── */
  horizontalScroll: {
    gap: spacing.sm,
    paddingVertical: spacing.xs,
  },
  horizontalCard: {
    width: 120,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.md,
    backgroundColor: colors.primaryLight,
  },
  horizontalCardText: {
    fontSize: fontSize.lg,
    fontWeight: '700',
    color: colors.primary,
  },

  /* ───────────── FlatList / SectionList ───────────── */
  dataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.md,
    backgroundColor: colors.surface,
  },
  dataRowSelected: {
    backgroundColor: colors.primaryLight,
  },
  avatar: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.pill,
    backgroundColor: colors.primary,
  },
  avatarText: {
    fontWeight: '700',
    color: colors.white,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
  },
  listHeader: {
    padding: spacing.md,
    gap: spacing.xs,
  },
  listFooter: {
    padding: spacing.lg,
    alignItems: 'center',
  },
  sectionListHeader: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.primaryLight,
  },
  sectionListHeaderText: {
    fontWeight: '700',
    color: colors.primaryDark,
  },

  /* ───────────── Pressable ───────────── */
  pressableBox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    borderRadius: radius.md,
    backgroundColor: colors.primary,
  },
  pressableBoxPressed: {
    backgroundColor: colors.primaryDark,
    transform: [{ scale: 0.97 }],
  },
  pressableBoxLong: {
    backgroundColor: colors.success,
  },

  /* ───────────── Switch ───────────── */
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.xs,
  },

  /* ───────────── Modal ───────────── */
  modalOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    backgroundColor: colors.overlay,
  },
  modalCard: {
    width: '100%',
    padding: spacing.lg,
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
  },
  modalFullScreen: {
    flex: 1,
    padding: spacing.lg,
    gap: spacing.md,
    justifyContent: 'center',
    backgroundColor: colors.surface,
  },

  /* ───────────── KeyboardAvoidingView (chat) ───────────── */
  chatMessages: {
    padding: spacing.md,
    gap: spacing.sm,
  },
  chatBubble: {
    maxWidth: '80%',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.lg,
  },
  chatBubbleMine: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
  },
  chatBubbleOther: {
    alignSelf: 'flex-start',
    backgroundColor: colors.surface,
  },
  chatTextMine: { color: colors.white },
  chatTextOther: { color: colors.text },
  chatInputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    padding: spacing.sm,
    backgroundColor: colors.surface,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  chatInput: {
    flex: 1,
  },

  /* ───────────── Expo: LinearGradient ───────────── */
  gradientBox: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.md,
  },
  gradientText: {
    fontSize: fontSize.lg,
    fontWeight: '700',
    color: colors.white,
  },
  gradientButton: {
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderRadius: radius.pill,
  },

  /* ───────────── Expo: Constants ───────────── */
  kvRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.md,
    paddingVertical: spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  kvKey: {
    fontSize: fontSize.sm,
    fontWeight: '600',
    color: colors.textMuted,
  },
  kvValue: {
    flexShrink: 1,
    fontSize: fontSize.sm,
    color: colors.text,
    textAlign: 'right',
  },

  /* ───────────── Feedback / resultados ───────────── */
  resultBox: {
    padding: spacing.sm + 4,
    borderRadius: radius.sm,
    backgroundColor: colors.background,
  },
});
