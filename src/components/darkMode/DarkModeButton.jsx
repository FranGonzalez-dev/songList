import { useState, useEffect } from "react";

export function DarkModeButton () {
    const [ darkMode, setDarkMode ] = useState( false );

    const toggleDarkMode = () => {
        setDarkMode(( prevState ) => !prevState );
    }

    useEffect(() => {
        const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
        setDarkMode( isDarkModeEnabled );
    }, []);

    useEffect(() => {
        localStorage.setItem( 'darkMode', darkMode );
        const className = darkMode ? 'dark' : 'xdd';
        document.documentElement.classList.add( className );
        return () => {
            document.documentElement.classList.remove( className );
        }
    }, [ darkMode ]);


    return (
        <div className="flex items-center text-xl cursor-pointer dark:text-gray-100 text-blue-500">
        <input type="checkbox" name="" id="" className='hidden'/>

            <i onClick={toggleDarkMode} className={`${ darkMode ? "ri-sun-fill" : "ri-moon-fill" } transition ease-in-out duration-300 hover:-rotate-45`}  />
        
        </div>   
    )

}