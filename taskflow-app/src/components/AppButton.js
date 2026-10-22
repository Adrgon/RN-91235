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
