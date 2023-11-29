import React, { useState, createContext } from 'react';

export const AppContext = createContext({});

export default function AppProvider( props: any ) {
    const [user, setUser] = useState({});

    function signIn(email: string, password: string) {
        if (email !== '' && password !== '') {
            setUser({
                isLogged: true,
                email: email,
                userName: 'Test User'
            })
        }
    }

    return (
        <AppContext.Provider value={{ signIn, user }}>
            {props.children}
        </AppContext.Provider>
    )
}