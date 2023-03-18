import { useState } from "react"
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../services";

export const SongItem = ({ title, url, rehearsed, handleDelete, id }) => {
    
    const [ isChecked, setIsChecked ] = useState( rehearsed );

    const handleToggle = async () => {
        const ref = doc( db, 'canciones', id );
        await updateDoc(ref, { rehearsed: !isChecked })
        setIsChecked(!isChecked);
    }

    return (
        <article className='song animate__animated animate__fadeInUp'>
            <div className="song--info">
                <p>{ title }</p>
                <a href={ url }>Link</a>
            </div>
            <div className="song--buttons">
                <input type="checkbox" checked={ isChecked } onChange={ handleToggle }/>
                <i className="ri-delete-bin-fill" onClick={ () => handleDelete(id) }></i>
            </div>
        </article>
    )
}