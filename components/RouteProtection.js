import { useContext, useEffect } from 'react'

import { useRouter } from 'next/router'

import AuthContext from '../context/AuthContext'

const RouteProtection = ({children}) => {
    const router = useRouter()
    const authContext = useContext(AuthContext)
    const { isAuthenticated, loadingAuthentication } = authContext


    useEffect(() => {
        console.log("router.isReady")
        console.log(router.isReady)
        console.log("router.pathname")
        console.log(router.pathname)
        console.log("loadingAuth")
        console.log(loadingAuthentication)
        console.log("auth")
        console.log(isAuthenticated)
        
        // if (router.isReady && router.pathname !== '/' && loadingAuth === false && auth !== true) router.push('/')
        if (router.isReady && router.pathname !== '/' && loadingAuthentication === false && isAuthenticated !== true) console.log("ROUTER_PUSH")

    }, [router, loadingAuthentication, isAuthenticated])
    

    return children

    
}

export default RouteProtection
