import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context";
import { Container } from "../../components";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export function Login () {

    const initialState = { username: '', password: '' }

    const [ dataForm, setDataForm ] = useState( initialState );

    const { addUser } = useAppContext();

    const handleChange = ( e )=> {
        setDataForm({
            ...dataForm,
            [ e.target.name ]: e.target.value
        })
    }

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();
        if( dataForm.username !== 'admin' || dataForm.password !== '@dabar2023' ) {
            return toast.error('El nombre de usuario o la contraseña son incorrectos.')
        }
        addUser( dataForm )
        navigate('/')
    }


    return (
        <Container title='Iniciar Sesión'>
            <form onSubmit={ handleSubmit } className="pt-10 flex flex-col">
                <div className="flex flex-col gap-1 my-2">
                    <label htmlFor='username' className="text-gray-900 dark:text-neutral-200"> Usuario </label>
                    <input 
                        type="text"
                        name='username' 
                        placeholder='Ingrese el nombre de usuario'
                        value={dataForm.username}
                        onChange={ handleChange } 
                        className="p-2 border-2 border-gray-100 rounded-lg dark:bg-neutral-800 dark:border-neutral-900"
                    />
                </div>

                <div className="flex flex-col gap-1 my-2">
                    <label htmlFor='password' className="text-gray-900 dark:text-neutral-200" >Contraseña</label>
                    <input 
                        type="password" 
                        name='password' 
                        placeholder='Ingrese la contraseña'
                        value={dataForm.password}
                        onChange={ handleChange } 
                        className="p-2 border-2 border-gray-100 rounded-lg dark:bg-neutral-800 dark:border-neutral-900"
                    />
                </div>
                <div className="mt-4 self-end flex ">
                    <button type='submit' className='bg-blue-500 text-white place h-8 px-3 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 active:scale-95 flex gap-2 justify-center items-center'>
                        Acceder
                        <i className="ri-login-box-line"/>
                    </button>
                </div>
            </form>
        </Container>
    )
}