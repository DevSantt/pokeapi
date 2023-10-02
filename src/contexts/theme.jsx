import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "../styles/themes";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [isLightTheme, setIsLightTheme] = useState(() => {
        const theme = localStorage.getItem('theme')

        if (theme === 'light') {
            return 'light'
        } else {
            return 'dark'
        }
    });

    return (
        <ThemeContext.Provider value={{ isLightTheme, setIsLightTheme }}>
            <ThemeProvider theme={isLightTheme === 'light' ? DarkTheme : LightTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
export const useThemeContext = () => {
    
    const { isLightTheme, setIsLightTheme } = useContext(ThemeContext);
    
    function changeTheme() {
        if (isLightTheme === 'light') {
            setIsLightTheme('dark');
            localStorage.setItem('theme', 'dark')
        }
        if (isLightTheme === 'dark') {
            setIsLightTheme('light')
            localStorage.setItem('theme', 'light')
        }
    }

    return{
        changeTheme
    }
}


