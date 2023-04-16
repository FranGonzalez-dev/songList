import { useState } from "react";
import { Context } from "./Context";

export function Provider ({ children }) {

    const [ user, setUser ] = useState({ isLoggedIn: false });

    const addUser = ( userData ) => {
        const { username, password } = userData;
        setUser({ username, password, isLoggedIn: true });
    }

    const removeUser = () => setUser({ isLoggedIn: false })

    return (
        <Context.Provider value={{ user, addUser, removeUser }}>
            { children }
        </Context.Provider>
    )
    
}