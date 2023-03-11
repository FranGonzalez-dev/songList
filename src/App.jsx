import { useThemes } from "./hooks"

function App() {
    const { toggleMode, isDarkMode } = useThemes();
    const addSong = (e) => {
        e.preventDefault();
        alert('holi')
    }
    return (
    <>
        <nav>

            <h3>App</h3>
            <label className="switch">
                <input type="checkbox" onClick={toggleMode} checked={!isDarkMode}/>
            <span className="slider"/>
        </label>
        </nav>
        {/* <button onClick={toggleMode}>ToggleMode</button> */}
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

        <main className="main">
            <h2>Para ensayar | Ensayadas</h2>
            <div className="song--container">
                <div className="song">
                    <div className="song--info">
                        <p>Canción 1</p>
                        <a href="#">Link</a>
                    </div>
                    <input type="checkbox"/>
                </div>
                <div className="song">
                    <div className="song--info">
                        <p>Canción 2</p>
                        <a href="#">Link</a>
                    </div>
                    <input type="checkbox"/>
                </div>
                <div className="song">
                    <div className="song--info">
                        <p>Canción 3</p>
                        <a href="#">Link</a>
                    </div>
                    <input type="checkbox"/>
                </div>
            </div>
        </main>
        
        

    </> 
    )
}

export default App
