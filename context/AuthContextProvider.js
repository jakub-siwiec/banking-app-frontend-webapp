import { useEffect, useState } from 'react'

import swrRequest from '../libs/swrRequest'

import AuthContext from './AuthContext'

const AuthContextProvider = ({ children }) => {

    const [auth, setAuth] = useState({ isAuthenticated: false, loadingAuthentication: true })

    const { data: dataAuth, loading: loadingAuth } = swrRequest('/api/auth')

    const checkAuth = () => {
        console.log("loadingAuth in Provider")
        console.log(loadingAuth)
        if (dataAuth && dataAuth.status_code >= 200 && dataAuth.status_code < 300) {
            setAuth({ isAuthenticated: true, loadingAuthentication: loadingAuth })
        } else {
            setAuth({ isAuthenticated: false, loadingAuthentication: loadingAuth })
        }
    }

    useEffect(() => {
        checkAuth()
    }, [dataAuth, loadingAuth])

    return (
        <AuthContext.Provider value={ auth }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
