import { useAppContext } from "../../../context";
import { useSongs } from "../../../hooks";
import { useLocation } from "react-router-dom";


export const AdminButtons = ({ id }) => {

    const { user } = useAppContext()

    let location = useLocation() 
    const { handleDelete } = useSongs({ location })

    if ( user.isLoggedIn ) {
        return (
            <div className="absolut bottom-0 mt-4 right-0 min-w-full flex gap-2 justify-end">
                <button 
                    onClick={ () => handleDelete( id )}
                    className="flex gap-2 bg-red-500 text-white duration-300 active:scale-90 hover:scale-95 hover:bg-red-600 flex-row items-center  h-8 px-3 rounded-lg transition  ease-in-out "
                >
                    <i className="ri-delete-bin-line"></i>
                    Eliminar
                </button>
            </div>
        )
    } else {
        return null;
    }
}