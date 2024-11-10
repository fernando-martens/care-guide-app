import { createContext, useContext, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import { useStorageState } from "@/hooks/useStorageState";

const KEY_LOGIN = "testKeySession"

interface SessionProps{
    session?: { token: string };
    register: (email: string, password: string) => Promise<any>;
    signIn : (email: string, password: string) => Promise<any>;
    signOut: () => Promise<any>;
}

const SessionContext = createContext<SessionProps>({
    signIn: async (email: string, password: string) => {},
    register: async (email: string, password: string) => {},
    signOut: async () => {}
})


export const SessionProvider = ({ children }: any) => {

    const [session, setSession] = useStorageState<SessionProps["session"]>(KEY_LOGIN);

    async function register(email: string, password: string){

    }
    
    async function signIn (email: string, password: string){
        setSession({ token: "Test" });
    }
    
    async function signOut(){
        setSession(undefined);    
    }

    return (
        <SessionContext.Provider 
            value={{
                session,
                register,
                signIn ,
                signOut
            }}
        >
            {children}
        </SessionContext.Provider>
    )
}

export const useSession = () => {
    return useContext(SessionContext)
}