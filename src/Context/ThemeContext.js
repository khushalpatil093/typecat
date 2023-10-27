import { createContext, useContext, useState } from "react";
// import { themeOptions } from "../Utils/themeOptions";

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
    <ThemeContextProvider value={{theme, toggleTheme}}>
        {children}
    </ThemeContextProvider>
    )
}