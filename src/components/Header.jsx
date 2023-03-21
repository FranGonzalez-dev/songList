import { useThemes } from "../hooks"
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../context";


export const Header = () => {

    const { toggleMode, isDarkMode } = useThemes();
    const { user, removeUser  } = useAppContext();

    let location = useLocation();

    return (
        <>  
            <header>
                
                <Link to='/' className="header__brand">
                    Dabar
                </Link>


                <div className="header__main">

                    {
                        location.pathname !== '/login' ?
                        <Link className="link-to-login" to='/login' onClick={ removeUser }>
                            { user.isLoggedIn ? 'Cerrar Sesión' : 'Acceder'}
                        </Link>
                        : null
                    }
                    



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
