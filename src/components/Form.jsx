import {  useForm } from '../hooks';

export const Form = () => {

   
    const initialState = {
        title: '',
        url: '',
        lyrics: ''
    }

    const { handleChange, formLayout, checked, handleChecked, handleSubmitForm, errorMessage } = useForm({ initialState });

    return (
        <form className='form' onSubmit={ handleSubmitForm }>
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