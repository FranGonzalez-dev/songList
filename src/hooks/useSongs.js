import { useState, useEffect } from "react";
import { query, where, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { collectionRef } from '../services'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function useSongs ({ location }) {

    const [ songs, setSongs ] = useState([]);
    const [ isLoading , setIsLoading ] = useState( true );


    const songsQuery = location.pathname === '/rehearsed'
        ? query( collectionRef, where( 'rehearsed', '==', true ))
        : query( collectionRef, where( 'rehearsed', '==', false ))

    useEffect(() => {
        setIsLoading( true );
        const unsubscribe = onSnapshot( songsQuery, ( snapshot ) => {
            const data = snapshot.docs.map(( doc ) => ({ id: doc.id, ...doc.data()}))
            setSongs( data );
            setIsLoading( false )
        })
        return unsubscribe;
    }, [ location ]);

    const handleDelete = async ( id ) => {
        try {
            const ref = doc( collectionRef, id );
            await toast.promise(
                deleteDoc( ref ), {
                    pending: 'Eliminando canción...',
                    success: 'Canción eliminada con éxito! 👌',
                    error: 'Se produjo un error al eliminar la canción. 🤯'
                }
            )
            setSongs((prevSongs) => prevSongs.filter((song) => song.id !== id))
        } catch ( error ){
            console.log( error );
            toast.error('Se produjo un error al eliminar la canción. 🤯')
        }
    }

    return {
        songs, isLoading, handleDelete
    }
}

