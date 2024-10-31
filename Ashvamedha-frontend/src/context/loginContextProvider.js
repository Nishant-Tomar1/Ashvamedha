import { useContext, useState } from "react"
import {useCookies} from "react-cookie"
import { createContext } from "react";

export const loginContext = createContext({
    isLoggedIn : false,
    sport :"",
    login : () => {},
    logout : () => {},
})

function LoginContextProvider({children}){
    const [, setCookie] = useCookies(["accessToken : nothing", "refreshToken :  nothing"])
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [sport, setSport] = useState("");


    const loginHandler = ( accessToken, refreshToken, sport) => {
        
        setIsLoggedIn(true);
        setSport(sport);
        setCookie(
            "accessToken",
            accessToken,
            {
                path:"/",
                maxAge: 60 * 60 * 24 
            }
        );
        setCookie(
            "refreshToken",
            refreshToken,
            {
                path:"/",
                maxAge: 60 * 60 * 24 * 15 
            }
        );
    }

    const logoutHandler = () => {
        setIsLoggedIn(false);
        setSport("");
        setCookie(
            "accessToken",
            null,
            {
                path:"/",
                maxAge:0
            }
        );
        setCookie(
            "refreshToken",
            null,
            {
                path:"/",
                maxAge:0
            }
        );

    }

    const context = {
        isLoggedIn : isLoggedIn,
        sport : sport,
        login : loginHandler,
        logout : logoutHandler,
    }

    return (
    <loginContext.Provider value = {context}>
        {children}
    </loginContext.Provider>
    )
}

const useLogin = () => useContext(loginContext)

export {
    useLogin,
    LoginContextProvider
}