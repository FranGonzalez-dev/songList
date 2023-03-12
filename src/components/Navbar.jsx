import { useThemes } from "../hooks"

export const Navbar = () => {

    const { toggleMode, isDarkMode } = useThemes();

    return (
        <>
        
            <header>
                <img src='https://i.stack.imgur.com/l60Hf.png' alt="" className="profile__icon"/>
                <h3> Ensayos</h3>
                <label className="switch">
                    <input type="checkbox" onChange={toggleMode} checked={!isDarkMode}/>
                    <span className="slider"/>
                </label>
            </header>

            <link rel="stylesheet" href={`https://cdn.jsdelivr.net/npm/water.css@2/out/${ isDarkMode ? "dark" : "light"}.css`}/>
        </>
        
    )
}
