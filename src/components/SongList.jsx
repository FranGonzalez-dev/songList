import { Loader, Animated, SongItem } from '../components';
import { useLocation } from "react-router-dom";
import { useSongs } from "../hooks";





export const SongList = ( ) => {
    
    let location = useLocation();
    
    const { songs, isLoading, handleDelete } = useSongs({ location });
    
    


    return (

        isLoading ? <Loader/>
        : songs.length > 0 ?
        <Animated userClass="song--container">
        { songs.map( song => (
            <SongItem key={ song.id } { ...song } handleDelete={ handleDelete } />
        ))}
        </Animated>
        : 
        <Animated>
            <p>Aún no hay canciones</p>
        </Animated>
    )
}
