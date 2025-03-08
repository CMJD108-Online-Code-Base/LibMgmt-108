import { createContext, ReactNode, useEffect, useState } from "react";

interface AuthContextType {
    isAuthenticated:boolean;
    login:(token:string) => void;
    logout:() => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider = ({children} :{ children:ReactNode}) =>{
   
    const [ isAuthenticated , setisAuthenticated ] = useState(false)

    useEffect( ()=>{
        //get the token from local strage and validate
    },[])

    const login = ()=>{
        //set token from localstorage
        setisAuthenticated(true)
    }
    const logout = ()=>{
        //remove token from localstorage 
        setisAuthenticated(false)
    }

   return(
      <AuthContext.Provider value = {{isAuthenticated, login, logout}}>
            {children}
      </AuthContext.Provider>
   );
}