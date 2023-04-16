import { ToastContainer } from 'react-toastify';
import { Header, Footer } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login, NewSong, SongDetails } from './screens';


function App() {
    return (
        <Router>
            <div className="transition-colors ease-in-out duration-300 bg-gray-50 dark:bg-neutral-900 flex flex-col justify-between min-h-screen">
                <Header />
                
                    <Routes>
                        <Route exact path='/' element={ <Home/> }/>
                        <Route path='/rehearsed' element={ <Home/> }/>
                        <Route path='/login' element={ <Login/> }/>
                        <Route path='/add' element={ <NewSong/> }/>
                        <Route path='/song/:id' element={ <SongDetails/> }/>
                    </Routes>
                
                <Footer />
            </div>
            <ToastContainer />
        </Router>

    )
}

export default App;
