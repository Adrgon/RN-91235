import { useAppSelector } from "../store/hooks";
import { darkColors, lightColors } from "./colors";

export function useTheme(){
    const mode = useAppSelector((state)=> state.theme.mode)
    const colors = mode === 'dark' ? darkColors : lightColors
    return {
        mode, 
        colors, 
        isDark: mode === 'dark'}
}


