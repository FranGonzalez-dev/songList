import { useState } from 'react'
import { useSongs, useForm } from '../hooks';
import { useLocation } from 'react-router-dom';



export const Form = () => {

    let location = useLocation()

    const { handleAddSong } = useSongs({ location });

    const initialState = {
        title: '',
        url: '',
        lyrics: ''
    }

    const [errorMessage, setErrorMessage] = useState(null);




    const { handleChange, dataForm, setDataForm, formLayout, checked, handleChecked } = useForm({ initialState });
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if ( !dataForm.title || !dataForm.url || !dataForm.lyrics ) {
            return setErrorMessage('Por favor, rellena todos los campos campos.')
        }
       
        await handleAddSong( { dataForm, checked } )
        setDataForm( initialState )
    }


    return (
        <form className='form' onSubmit={ handleSubmit }>
            <h2>Nueva canción</h2>
            { formLayout.map(( item, id ) => (
                <div className="form--input"  key={ id }>
                    <label htmlFor={item.inputName}>{item.label}</label>
                    <input type="text" name={item.inputName} placeholder={item.placeholder} value={item.value} onChange={ handleChange } />
                </div>
            ))}

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