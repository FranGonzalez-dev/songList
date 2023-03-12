import { Navbar, SongList } from "./components";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

const data = [
    {
        title: 'Cancion 1',
        link: '#',
        completed: false
    },
    {
        title: 'Cancion 2',
        link: '#',
        completed: true
    },
    {
        title: 'Cancion 3',
        link: '#',
        completed: false
    },
    {
        title: 'Cancion 4',
        link: '#',
        completed: false
    },
    {
        title: 'Cancion 5',
        link: '#',
        completed: true
    },
    {
        title: 'Cancion 6',
        link: '#',
        completed: false
    },
]


function App() {
    
    const addSong = (e) => {
        e.preventDefault();
        alert('holi')
    }

    const [checked, setChecked] = useState(false);

    const handleChecked = () => {
        setChecked(!checked);
    }




    const [ songs, setSongs ] = useState([]);

    const songList = () => {
        setSongs({...data})
    }
    

    const incompletedSongs = data.filter( song => !song.completed )

    const completedSongs = data.filter(song => song.completed)

    return (
    <Router>
        
        <Navbar />
        
        <form className="form" onSubmit={ addSong }>
            <h2>Añadir una canción</h2>
            <div className="form--input">
                <label htmlFor="input">Titulo</label>
                <input name="input" type="text" placeholder='A danzar, aguas profundas...'/>
            </div>
            <div className="form--input">
                <label htmlFor="input">Link</label>
                <input name="input" type="text" placeholder='Enlace a youtube, spotify...'/>
            </div>
            <div className="form--input">
                <label htmlFor="input">¿Ya la ensayamos?</label>
                <div className="input--checked">
                    <input name="input" type="checkbox" onChange={handleChecked} checked={checked}/>
                    <span>{ checked ? 'Si' : 'No'}</span>
                </div>
            </div>
            <button type="submit" className="add">
                Agregar
            </button>
        </form>

        <main className="main">

            <nav className="nav">
                <ul className="nav__container">
                    <NavLink to='/' className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link "} >
                        Para ensayar
                    </NavLink>

                    <NavLink to='/ensayadas' className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link "}>
                        Ensayadas
                    </NavLink>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<SongList data={ incompletedSongs }/>}/>
                <Route exact path="/ensayadas" element={<SongList data={ completedSongs }/>}/>
            </Routes>
        </main>
        

    </Router> 
    )
}

export default App
