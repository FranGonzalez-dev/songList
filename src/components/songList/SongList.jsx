

import { Loader } from "../loader/Loader";
import { SongItem } from "../songItem/SongItem";
import { useSongs } from "../../hooks";

import { useLocation } from 'react-router-dom'



export function SongList () {

    let location = useLocation()
    
    const { songs, isLoading } = useSongs({ location });

    

    return (
        <div className="my-4" style={{ minHeight:'40vh' }}>
            {
                isLoading 
                ? <Loader/>
                : 
                <div className="grid animate__animated animate__fadeIn">
                    {
                        songs.map( song => (
                            <SongItem key={ song.id } { ...song }/>
                        ))
                    }
                </div>
            }
        </div>
    )
}
