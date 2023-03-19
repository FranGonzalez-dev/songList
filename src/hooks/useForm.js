import { useState } from "react"

export function useForm ({ initialState }) {

    const [ dataForm, setDataForm ] = useState(initialState);
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
    
    const handleSubmitForm = ( e ) => {
        e.preventDefault();
        if( !dataForm.title || !dataForm.url || !dataForm.lyrics ){
            return setErrorMessage('Por favor, rellena todos los campos')
        }

        setDataForm( initialState )
    }

    return {
        handleChange, formLayout, dataForm, errorMessage, setDataForm, handleChecked, checked
    }
}