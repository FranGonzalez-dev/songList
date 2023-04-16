import { useState, useEffect } from "react";
import { getSingleSong } from "../services";

export function useSong ({ id }) {

    const [ song, setSong ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( true );

    useEffect(() => {
        setIsLoading( true )
        try {
            getSingleSong( id )
            .then( resp => setSong( resp ))
            .finally(() => setIsLoading( false ));
        } catch ( error ) {
            setIsLoading( false )
            console.error( error )
        }
    }, [ id ]);

    

    return {
        song, isLoading
    }
}