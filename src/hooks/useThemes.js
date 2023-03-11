import { useState, useEffect } from "react";

export const useThemes = () => {

    const [ isDarkMode, setIsDarkMode ] = useState( false ); 


    useEffect(() => {
        const savedMode = localStorage.getItem('theme');
        if ( savedMode === 'dark' ) {
            setIsDarkMode( true );
        }
    }, []);

    const toggleMode = () => {
        const newMode = !isDarkMode ? 'dark' : 'light'
        setIsDarkMode( !isDarkMode );
        localStorage.setItem('theme', newMode)
        document.body.classList.remove(isDarkMode ? "dark-theme" : "water-theme");
        document.body.classList.add(newMode === "dark" ? "dark-theme" : "water-theme");
    }

    return {
        isDarkMode, toggleMode
    }
}