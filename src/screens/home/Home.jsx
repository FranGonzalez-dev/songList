import { Link } from 'react-router-dom'
import { Nav, Container, SongList } from '../../components'
import img from '../../assets/MarcelaGandara.jpg'


export function Home () {
    return (
        <>

            <Container>
                <h2 className='text-xl mb-4 dark:text-gray-100'>
                    Eventos
                </h2>

                <Link to='/marcela-gandara' className='event'>
                    <img src={ img } alt="Cachorros de Leon 2023"/>
                </Link>
            </Container>
            <Container >
                <Nav />
                <SongList/>            
            </Container>
        </>
        
    )
}