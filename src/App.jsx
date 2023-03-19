import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";


import { Login, Home, Admin } from "./screens";







function App() {
    return (
        <Router>
            
            
                <Routes>
                    <Route exact path="/" element={ <Login/> }/>
                    <Route path="/login" element={ <Admin/> }/>
                    <Route path="/home/*" element={ <Home/> }/>
                </Routes>
            

            <ToastContainer/>
        </Router>
    )
}

export default App;
