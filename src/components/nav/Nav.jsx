import { Links } from "./Links"
import { Button } from "../buttons/Button"

import { useAppContext } from "../../context"

export function Nav () {
    const { user } = useAppContext()

    return (
        <nav className="py-4 px-2 mt-12 flex items-center justify-between top-0 sticky z-10">
            <Links />
            { user.isLoggedIn && <Button text='Añadir' bg='bg-blue-500' hoverBg='hover:bg-blue-600' icon='add-line' textColor="text-white" link="/add"/> }
        </nav>
    )
}