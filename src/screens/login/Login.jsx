import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function Login () {





    const initialState = { username: '', password: '' }

    const [ dataForm, setDataForm ] = useState(initialState);


    const { addUser } = useAppContext();


    const handleChange = ( e ) => {
        setDataForm({
            ...dataForm,
            [ e.target.name ]: e.target.value
        })
    }

    const navigate = useNavigate();

    const handleSubmit = ( e ) => {
        e.preventDefault()
        if( dataForm.username !== 'admin' || dataForm.password !== '@dabar2023') {
            return toast.error('El nombre de usuario o la contraseña son incorrectos.');
             
        }
        addUser( dataForm )
        navigate('/')
        toast.success(`Bienvenido ${ dataForm.username }`)
        
    }





    return (
        <div className="login animate__animated animate__fadeIn" onSubmit={handleSubmit}>
            <h3 className="login__title">Iniciar Sesión</h3>
            <form className="form">
                <div className="form--input">
                    <label htmlFor="username">Usuario</label>
                    <input type="text" name="username" placeholder="Ingrese el nombre de usuario" value={dataForm.username} onChange={handleChange}/>
                </div>
                <div className="form--input">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" placeholder="Ingrese la contraseña" value={dataForm.password} onChange={handleChange}/>
                </div>

                <button type='submit' className='add'>
                    Acceder
                </button>
            </form>
        </div>        
    )
}