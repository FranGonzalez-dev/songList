import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import { Login, Home } from "./screens";

import { Header } from "./components";



function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/rehearsed" element={<Home/>}/>
                <Route path="/login" element={ <Login/> }/>
            </Routes>
            <ToastContainer/>
        </Router>
    )
}

export default App;
