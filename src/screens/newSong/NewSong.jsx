import { Container } from "../../components"
import { useForm } from "../../hooks"


export function NewSong () {

    const initialState = {
        title: '',
        url: '',
        lyrics: '',
        author: ''
    }

    const { errorMessage, formLayout, checked, handleChange, handleChecked, handleSubmitForm } = useForm({ initialState });

    return (
        <Container title='Nueva canción'>
            
            <form 
                className=' my-2 flex flex-col'
                onSubmit={ handleSubmitForm }
            >
                { formLayout.map(( item, id ) => (
                    <div className="flex flex-col gap-1 my-2"  key={ id }>
                        <label htmlFor={item.inputName} className="text-gray-900 dark:text-neutral-200">
                            { item.label }
                        </label>
                        <input 
                            type="text" 
                            name={item.inputName} 
                            placeholder={item.placeholder} 
                            value={item.value} 
                            onChange={ handleChange } 
                            className="p-2 border-2 border-gray-100 rounded-lg dark:bg-neutral-800 dark:border-neutral-900"
                        />
                    </div>
                ))}

                { errorMessage && <p style={{color:'#f00'}}>{ errorMessage }</p> }

                <div className='mt-2'>
                    <label htmlFor='input' className="text-gray-900 dark:text-neutral-200">¿Ya la ensayamos?</label>
                    <div className='flex flex-row gap-2 accent-blue-500'>
                        <input name='input' type='checkbox' onChange={ handleChecked } checked={ checked }/>
                        <span className="text-gray-900 dark:text-neutral-200">{ checked ? 'Si' : 'No'}</span>
                    </div>
                </div>
                <button type='submit' className='bg-blue-500 text-white place h-8 px-3 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 active:scale-95 self-end flex gap-2 justify-center items-center'>
                    Añadir
                    <i className="ri-add-line"/>
                </button>
                
            </form>
            
        </Container>
    )
}