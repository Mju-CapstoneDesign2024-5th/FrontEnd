import { lightTheme, darkTheme } from "./Theme";
import { createContext, useState, useContext, useCallback } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

const ThemeContext = createContext({});

const ThemeProvider = ({children}) => {
    const localTheme = window.localStorage.getItem('theme') || 'light';
    const [ThemeMode, setThemeMode] = useState(localTheme);
    const themeObject = ThemeMode === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ThemeMode, setThemeMode}}>
            <StyledProvider theme={themeObject}>
                {children}
            </StyledProvider>
        </ThemeContext.Provider>
    )
}

function useTheme(){
    const context = useContext(ThemeContext);
    const {ThemeMode, setThemeMode} = context;
    const toggleTheme = useCallback(() => {
        if (ThemeMode === 'light'){
            setThemeMode('dark');
            window.localStorage.setItem('theme', 'dark');
        } else {
            setThemeMode('light');
            window.localStorage.setItem('theme', 'light');
        }
    }, [ThemeMode]);

    return [ThemeMode, toggleTheme];
}

export {ThemeProvider, useTheme};