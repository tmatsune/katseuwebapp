
import React from 'react';
import {createContext, useState, useEffect} from "react"

type UserContextProviderProps = {
    children: React.ReactNode;
}
type AuthUser = {
    name: string;
    username: string;
    email: string;
    password: string;
}

type UserType = {
    currentUser:  AuthUser | null
    setCurrentUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext({} as UserType)

export const UserProvider = ( {children}:UserContextProviderProps  ) => {  //{children}:UserContextProviderProps 
    const [currentUser, setCurrentUser] = useState < AuthUser | null > (null);
    
    //const value = {currentUser, setCurrentUser};
    useEffect(() => {
        const data = localStorage.getItem("currUser");
        if(data !== null){
            setCurrentUser(JSON.parse(data));
        }
    },[])
    useEffect(() => {
        localStorage.setItem("currUser", JSON.stringify(currentUser));   
    })

    return <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
            </UserContext.Provider>
}