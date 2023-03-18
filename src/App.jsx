import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, SongList, Nav } from "./components";
import { ToastContainer } from "react-toastify";






function App() {
    return (
        <Router>
            <Header />
            <main className="main">
                <Nav />
                <Routes>
                    <Route path="/" element={<SongList/>}/>
                    <Route exact path="/ensayadas" element={<SongList />}/>
                </Routes>
            </main>

            <ToastContainer/>
        </Router>
    )
}

export default App;
