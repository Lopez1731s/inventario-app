import { FC, useState } from 'react';
import { ThemeContext } from "./ThemeContext"

interface ThemeProviderProps {
    children: JSX.Element | JSX.Element[]
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [themeState, setThemeState] = useState("");

    const saveTheme = (theme: string) => {
        localStorage.setItem("theme", theme);
        setThemeState(theme);
    };

    const getTheme = localStorage.getItem("theme") === null ? "light" : localStorage.getItem("theme");

    return (
        <ThemeContext.Provider value={{
            getTheme,
            saveTheme,
            themeState,
            setThemeState
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider