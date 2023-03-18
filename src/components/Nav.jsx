import { NavLink } from "react-router-dom"

export const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__container">
                <NavLink to='/' className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link "} >
                    Para ensayar
                </NavLink>

                <NavLink to='/ensayadas' className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link "}>
                    Ensayadas
                </NavLink>
            </ul>
        </nav>
    )
}
