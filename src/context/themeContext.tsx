import { createContext, useState, useEffect } from "react"
import React from "react"

type ThemeContextProps = {
    children: React.ReactNode
}

type themeType = {
    darkMode : boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext({} as themeType);

export const ThemeProvider = ({children}: ThemeContextProps) => {
    const [darkMode, setDarkMode] = useState(false);

    const value = {darkMode, setDarkMode};

    useEffect(() => {
        const data = localStorage.getItem("darkMode");
        if(data){
            setDarkMode(JSON.parse(data));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, )

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}