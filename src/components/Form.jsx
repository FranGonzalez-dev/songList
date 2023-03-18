import { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Loader } from './Loader';

import { addDoc } from 'firebase/firestore';
import { collectionRef } from '../services';



const addSong = async ( song ) => {
    const docRef = await addDoc( collectionRef, song )
    return docRef.id
}



export const Form = () => {

    

    const [checked, setChecked] = useState(false);

    const handleChecked = () => {
        setChecked(!checked);
    }


    

    





    const [dataForm, setDataForm] = useState({
        title: '',
        url: ''
    });
    const [errorMessage, setErrorMessage] = useState(null);



    const handleChange = ( e ) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
        setErrorMessage(null)
    }


    const formLayout = [
        {
            label: 'Título',
            inputName: 'title',
            placeholder: 'A danzar, aguas profundas...',
            value: dataForm.title
        },
        {
            label: 'Link',
            inputName: 'url',
            placeholder: 'Enlace a youtube, spotify...',
            value: dataForm.url
        }
    ]


    const [isLoading, setIsLoading] = useState( false );


    const createSong = async () => {
        try {
            setIsLoading( true )
            const song = {
                title: dataForm.title,
                url: dataForm.url,
                rehearsed: checked
            }
            await toast.promise(
                addSong( song ),
                {
                    pending: 'Añadiendo canción...',
                    success: 'Canción añadida con éxito! 👌',
                    error: 'Se produjo un error al agregar la canción. 🤯'
                }
            )
            setIsLoading( false )
        } catch ( error ) {
            setIsLoading( false )
            toast.error('Se produjo un error al agregar la canción. 🤯')
            console.log( error )
        }
        
    }




    const handleSubmit = async (e) => {
        e.preventDefault();
        if ( !dataForm.title || !dataForm.url ) {
            return setErrorMessage('Por favor, rellena ambos campos.')
        }
        await createSong( dataForm )
    }


    return (
        isLoading ? <Loader />
        : <form className='form' onSubmit={ handleSubmit }>
            <h2>Nueva canción</h2>
            {
                formLayout.map(( item, id ) => (
                    <div className="form--input"  key={ id }>
                        <label htmlFor={item.inputName}>{item.label}</label>
                        <input type="text" name={item.inputName} placeholder={item.placeholder} value={item.value} onChange={ handleChange } />
                    </div>
                ))
            }

            {errorMessage && <p style={{color:'#f00'}}>{ errorMessage }</p>}

            <div className='form--input'>
                <label htmlFor='input'>¿Ya la ensayamos?</label>
                <div className='input--checked'>
                    <input name='input' type='checkbox' onChange={handleChecked} checked={checked}/>
                    <span>{ checked ? 'Si' : 'No'}</span>
                </div>
            </div>
            <button type='submit' className='add'>
                Agregar
            </button>
        </form>
    )
}