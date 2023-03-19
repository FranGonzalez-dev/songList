import { Link } from "react-router-dom"

export function Login () {
    return (
        <div className="login">
            <h3 className="login__title">Iniciar Sesión</h3>
            <Link to='/login'>
                <button className="login__button">Admin</button>
            </Link>
            <Link to='/home/to-rehearse' >
                <button className="login__button">Usuario</button>
            </Link>
        </div>
    )
}