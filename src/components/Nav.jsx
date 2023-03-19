import { NavLink } from "react-router-dom"

export const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__container">
                <NavLink to='/home/to-rehearse' className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link "} >
                    Para ensayar
                </NavLink>

                <NavLink to='/home/rehearsed' className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link "}>
                    Ensayadas
                </NavLink>
            </ul>
        </nav>
    )
}
