import { useThemes } from "../hooks"
import { Link } from "react-router-dom";
import { useAppContext } from "../context";


export const Header = () => {

    const { toggleMode, isDarkMode } = useThemes();
    const { user, removeUser  } = useAppContext();

    return (
        <>  
            <header>
                
                <Link to='/' className="header__brand">
                    Dabar Music
                </Link>


                <div className="header__main">
                    <Link className="link-to-login" to='/login' onClick={ removeUser }>
                        { user.isLoggedIn ? 'Cerrar Sesión' : 'Acceder'}
                    </Link>
                    <label className="switch">
                        <input type="checkbox" onChange={toggleMode} checked={!isDarkMode}/>
                        <span className="slider"/>
                    </label>
                </div>

                
            </header>

            <link rel="stylesheet" href={`https://cdn.jsdelivr.net/npm/water.css@2/out/${ isDarkMode ? "dark" : "light"}.css`}/>
        </>
    )
}
