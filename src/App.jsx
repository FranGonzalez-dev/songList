import { useThemes } from "./hooks"

function App() {
    const { toggleMode, isDarkMode } = useThemes();
    const addSong = (e) => {
        e.preventDefault();
        alert('holi')
    }
    return (
    <>
        <h1>Ensayos App</h1>
        <button onClick={toggleMode}>ToggleMode</button>
        <link
            rel="stylesheet"
            href={`https://cdn.jsdelivr.net/npm/water.css@2/out/${ isDarkMode ? "dark" : "light"}.css`}
        />
        <form className="form" onSubmit={ addSong }>
            <div className="form--input">
                <label htmlFor="input">Añadir una canción</label>
                <input name="input" type="text" placeholder='A danzar, aguas profundas...'/>
            </div>
            <button type="submit" className="add">
                <i class="ri-add-line"></i>
            </button>
        </form>
    </> 
    )
}

export default App
