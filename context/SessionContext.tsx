import { createContext, useContext, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import { useStorageState } from "@/hooks/useStorageState";
import { router } from "expo-router";

const KEY_LOGIN = "testKeySession"

interface SessionProps{
    isLoading: boolean,
    session?: { token: string };
    register: (email: string, password: string) => Promise<any>;
    signIn : (email: string, password: string) => Promise<any>;
    signOut: () => Promise<any>;
}

const SessionContext = createContext<SessionProps>({
    isLoading: false,
    signIn: async (email: string, password: string) => {},
    register: async (email: string, password: string) => {},
    signOut: async () => {}
})


export const SessionProvider = ({ children }: any) => {

    const [isLoading, setIsLoading] = useState(false)
    const [session, setSession] = useStorageState<SessionProps["session"]>(KEY_LOGIN);

    async function register(email: string, password: string){

    }
    
    async function signIn (email: string, password: string){
        setIsLoading(false)
        setSession({ token: "Test" });
        router.replace('/');
    }
    
    async function signOut(){
        setIsLoading(false)
        setSession(undefined);    
    }

    return (
        <SessionContext.Provider 
            value={{
                isLoading,
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