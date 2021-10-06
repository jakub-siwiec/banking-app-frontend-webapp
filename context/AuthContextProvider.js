import { useEffect, useState } from 'react'

import fetchRequest from '../libs/fetchRequest'

import AuthContext from './AuthContext'


const AuthContextProvider = ({ children }) => {

    const [auth, setAuth] = useState({ isAuthenticated: false, loadingAuthentication: true })    

    const checkAuth = async () => {
        const dataAuth = await fetchRequest('/api/auth')
        if (dataAuth && dataAuth.status_code >= 200 && dataAuth.status_code < 300) {
            setAuth({ isAuthenticated: true, loadingAuthentication: false })
        } else {
            setAuth({ isAuthenticated: false, loadingAuthentication: false })
        }
    }

    useEffect(() => {
        checkAuth()
    }, [])

    return (
        <AuthContext.Provider value={ { checkAuth, ...auth } }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
