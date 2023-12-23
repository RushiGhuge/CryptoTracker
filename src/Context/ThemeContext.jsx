import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {

    const [themeMode, setThemeMode] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.body.setAttribute('data-theme', themeMode)
        localStorage.setItem('theme', themeMode)
    }, [themeMode])

    const toggleThemeMode = () => {
        setThemeMode(themeMode === 'dark' ? 'light' : 'dark')
    }
    return (
        <ThemeContext.Provider value={{ themeMode, toggleThemeMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
export { ThemeContext };