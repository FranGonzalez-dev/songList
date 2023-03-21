import { Form, Nav, SongList } from "../../components"
import { useAppContext } from "../../context"


export function Home () {
    const { user } = useAppContext();
    
    return (
        <div className="animate__animated animate__fadeIn home">
            

            {
                user.isLoggedIn ? <Form/>
                : null
            }
            

            <h1 className="title">Lista de canciones</h1>
            <Nav/>
            <SongList/>
        </div>
    )
}