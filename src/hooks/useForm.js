import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { addDoc } from "firebase/firestore";
import { collectionRef } from '../services'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export function useForm ({ initialState }) {
    const navigate = useNavigate();
    const [ dataForm, setDataForm ] = useState( initialState );
    const [ errorMessage, setErrorMessage ] = useState( null );
    const [ checked, setChecked ] = useState( false );


    const formLayout = [
        {
            label: 'Título',
            inputName: 'title',
            placeholder: 'A danzar, aguas profundas...',
            value: dataForm.title
        },
        {
            label: 'Autor',
            inputName: 'author',
            placeholder: 'Barak, David Quinlan...',
            value: dataForm.author
        },
        {
            label: 'Música',
            inputName: 'url',
            placeholder: 'Enlace a youtube, spotify...',
            value: dataForm.url
        },
        {
            label: 'Letra',
            inputName: 'lyrics',
            placeholder: 'Enlace a la letra de la canción...',
            value: dataForm.lyrics
        }
    ]
    
    
    const handleChange = ( e ) => {
        setDataForm({
            ...dataForm,
            [ e.target.name ] : e.target.value
        })
        setErrorMessage( null )
    }

    const handleChecked = () => {
        setChecked( !checked )
    }
 
    const addSong = async ({ dataForm, checked }) => {
        const song = {
            title: dataForm.title,
            author: dataForm.author,
            url: dataForm.url,
            lyrics: dataForm.lyrics,
            rehearsed: checked,
            createdAt: new Date()
        }
        
        try {
            await toast.promise(
                addDoc( collectionRef, song ), {
                    pending: 'Añadiendo canción...',
                    success: 'Canción añadida con éxito!',
                    error: 'Se produjo un error al añadir la canción.'
                }
            )
            navigate('/');
            
        } catch ( error ) {
            console.log(error)
            toast.error('Se produjo un error al añadir la canción.')
        }
    }

    const handleSubmitForm = async ( e ) => {
        e.preventDefault();
        if( !dataForm.title || !dataForm.author || !dataForm.url || !dataForm.lyrics ){
            return setErrorMessage('Por favor, rellena todos los campos')
        }
        await addSong({ dataForm, checked })
        setDataForm( initialState )
    }

    return {
        formLayout, dataForm, errorMessage, checked, setDataForm, handleChecked, handleSubmitForm, handleChange
    }
}