import { Nav, Container, SongList } from '../../components' 



export function Home () {
    return (
        <Container title='Lista de canciones'>
            <Nav />
            <SongList/>            
        </Container>
    )
}