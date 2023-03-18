import { useThemes } from "../hooks"
import { Link } from "react-router-dom";
import { Form } from "./Form";


export const Header = () => {

    const { toggleMode, isDarkMode } = useThemes();

    return (
        <>  
            <header>
                <Link to='/' className="header__brand">
                    Dabar
                </Link>
                <label className="switch">
                    <input type="checkbox" onChange={toggleMode} checked={!isDarkMode}/>
                    <span className="slider"/>
                </label>
            </header>

            <link rel="stylesheet" href={`https://cdn.jsdelivr.net/npm/water.css@2/out/${ isDarkMode ? "dark" : "light"}.css`}/>

            <Form />
        </>
        
    )
}
