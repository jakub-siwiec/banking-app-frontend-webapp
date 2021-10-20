import { useEffect, useState } from 'react'

import apiRequest from '../libs/apiRequest'

import AuthContext from './AuthContext'


const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({ isAuthenticated: false, loadingAuthentication: true })  
    console.log("context")  

    const checkAuth = async () => {
        console.log("checkAuth")
        const dataAuth = await apiRequest('/api/auth')
        console.log(dataAuth)
        if (dataAuth && dataAuth.status_code >= 200 && dataAuth.status_code < 300) {
            setAuth({ isAuthenticated: true, loadingAuthentication: false })
        } else {
            setAuth({ isAuthenticated: false, loadingAuthentication: false })
        }
    }

    useEffect(() => {
        console.log("context useeffect")
        checkAuth()
    }, [])

    return (
        <AuthContext.Provider value={ { checkAuth, ...auth } }>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider
