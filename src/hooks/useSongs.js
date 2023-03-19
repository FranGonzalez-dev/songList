import { useState, useEffect } from "react";
import { query, where, onSnapshot, deleteDoc, doc, addDoc } from "firebase/firestore";
import { collectionRef } from '../services'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function useSongs ({ location }) {

    const [ songs, setSongs ] = useState([]);
    const [ isLoading , setIsLoading ] = useState( true );


    const songsQuery = location.pathname === '/home/rehearsed'
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
    
    const handleAddSong = async ({ dataForm, checked }) => {
        const song = {
            title: dataForm.title,
            url: dataForm.url,
            lyrics: dataForm.lyrics,
            rehearsed: checked
        }
        try {
            await toast.promise(
                addDoc( collectionRef, song ), {
                    pending: 'Añadiendo canción...',
                    success: 'Canción añadida con éxito!',
                    error: 'Se produjo un erro al agregar la canción.'
                }
            )
        } catch ( error ) {
            toast.error('Se produjo un error al agregar la canción')
            console.log( error );
        }
    }

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
        songs, isLoading, handleDelete, handleAddSong
    }
}

