import { createContext } from 'react';

export interface ThemeContext {
    getTheme: string | null;
    saveTheme: (theme: string) => void;
    themeState: string | null;
    setThemeState: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);