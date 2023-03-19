export function Admin () {
    return (
        <div className="login animate__animated animate__fadeIn">
            <h3 className="login__title">Iniciar Sesión</h3>
            <form className="form">
                <div className="form--input">
                    <label>Usuario</label>
                    <input type="text" placeholder="Ingrese el nombre de usuario"/>
                </div>
                <div className="form--input">
                    <label>Contraseña</label>
                    <input type="password" placeholder="Ingrese la contraseña"/>
                </div>

                <button type='submit' className='add'>
                    Iniciar Sesión
                </button>
            </form>
        </div>
    )
}