import { NavLink } from "react-router-dom"
import { activeLink, normalLink, navData } from "./navData"

export function Links () {
    return (
        <ul className="flex flex-row items-center gap-4">
            { navData.map( data  => (
                <NavLink 
                    key={ data.id }
                    className={({isActive}) => isActive ? activeLink : normalLink }
                    to={ data.link }
                >
                    { data.text }
                </NavLink>
            ))}
        </ul>
    )
}