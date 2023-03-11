import { useThemes } from "./hooks"

function App() {
   const { toggleMode, isDarkMode } = useThemes();

    return (
    <>
        <h1>Ensayos App</h1>
        <button onClick={toggleMode}>ToggleMode</button>
        <link
            rel="stylesheet"
            href={`https://cdn.jsdelivr.net/npm/water.css@2/out/${ isDarkMode ? "dark" : "light"}.css`}
        />
        <form className="form">
            <div className="form--input">
                <label htmlFor="input">Añadir una canción</label>
                <input name="input" type="text" placeholder='A danzar, aguas profundas...'/>
            </div>
            <button type="submit">Añadir</button>
        </form>
    </> 
    )
}

export default App
