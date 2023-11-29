import React, { useState, createContext } from 'react';

export const AppContext = createContext({});

export default function AppProvider(props: any) {
    const [user, setUser] = useState({});

    function signIn(email: string, password: string) {
        if (email !== '' && password !== '') {
            setUser({
                isLogged: true,
                email: email,
                userName: 'Test User',
                birthDate: '24/07/1992',
                core: 'Rio Grande do Sul',
                group: 'Harmonia',
                symbol: false,
                frequency: true,
                phone: '(51) 91122-3344',
                resPhone: '(51) 98877-6655'
            })
        }
    }

    function editUser(newUser: any) {
        setUser(newUser)
    }

    return (
        <AppContext.Provider value={{ signIn, editUser, user }}>
            {props.children}
        </AppContext.Provider>
    )
}