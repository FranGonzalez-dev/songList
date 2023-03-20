import { useState } from "react"
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../services";
import { useAppContext } from "../context";

export const SongItem = ({ title, url, lyrics, rehearsed, handleDelete, id }) => {
    
    const [ isChecked, setIsChecked ] = useState( rehearsed );

    
    const handleToggle = async () => {
        const ref = doc( db, 'canciones', id );
        await updateDoc(ref, { rehearsed: !isChecked })
        setIsChecked(!isChecked);
    }
    
    const { user } = useAppContext()

    return (
        <article className='song animate__animated animate__fadeInUp'>
            <div className="song--info">
                <h3 className="song__title">{ title }</h3>
                <div className="song__links">
                    <a href={ url } target='_blank'>Escuchar canción</a>
                    <span></span>
                    <a href={ lyrics } target='_blank'>Ver letra</a>
                </div>
            </div>


            {
                user.isLoggedIn ? 
                <div className="song--buttons">
                    <input type="checkbox" checked={ isChecked } onChange={ handleToggle }/>
                    <i className="ri-delete-bin-fill" onClick={ () => handleDelete(id) }/>
                </div>
                : null
            }
        </article>
    )
}