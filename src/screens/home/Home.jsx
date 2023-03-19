import { Nav, Header, SongList } from "../../components"
import { Route, Routes } from "react-router-dom"


export function Home () {
    return (
        <div className="animate__animated animate__fadeIn home">
            <Header />
            <Nav/>

            <Routes>
                <Route exact path="/home/to-rehearse" element={<SongList/>}/>
                <Route path="/home/rehearsed" element={<SongList/>}/>
            </Routes>

            <SongList/>
        </div>
    )
}