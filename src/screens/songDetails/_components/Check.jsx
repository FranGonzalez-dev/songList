import { useState } from "react";
import { useAppContext } from "../../../context";
import { doc, updateDoc } from "firebase/firestore";
import { collectionRef } from "../../../services";

export const Check = ({ rehearsed, id }) => {

    const [ isChecked, setIsChecked ] = useState( rehearsed );

    const { user } = useAppContext();
    
    const handleChecked = async ( songID ) => {
        const ref = doc( collectionRef, songID );
        await updateDoc( ref, { rehearsed: !isChecked })
        setIsChecked(!isChecked)
    }

    if( user.isLoggedIn ) {
        return (
            <div className="flex items-center justify-center gap-2">
                <h3 className="text-sm text-center text-gray-700 dark:text-gray-200">
                    { isChecked ? 'Ensayada': 'Para ensayar' }
                </h3>    
                <input 
                    type="checkbox" 
                    name="check" 
                    className='accent-blue-500'
                    checked={ isChecked }
                    onChange={ () => handleChecked( id )}
                />
            </div>
        )
    } else { return null }
}