import { useLocation } from "react-router-dom"
import { useSongs } from "../../hooks"
import { Container, SongItem, Loader } from "../../components"






export const Concert = () => {

    let location = useLocation() 

    const { songs, isLoading } = useSongs({ location })
    const filteredSongs = songs.filter(( song ) => song.author === 'Marcela Gandara')
    return (
        <Container title="Marcela Gandara">
            <div className="py-16" style={{ minHeight: '40vh' }}>
            {
                isLoading ? <Loader />
                : <div className="grid animate__animated animate__fadeIn">
                    {
                        filteredSongs.map( song => (
                            <SongItem key={ song.id } { ...song }/>
                        ))
                    }
                </div>
            }
            </div>
        </Container>
    )
}
