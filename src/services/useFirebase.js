import { collectionRef } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";


export const getSingleSong = async ( id ) => {
    const ref = doc( collectionRef, id );
    const snapshot = await getDoc( ref );
    return { ...snapshot.data(), id: snapshot.id }
}

