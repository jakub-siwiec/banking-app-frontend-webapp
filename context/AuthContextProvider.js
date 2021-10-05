import { useEffect, useState } from 'react'

import fetchRequest from '../libs/fetchRequest'

import AuthContext from './AuthContext'

// To refresh provider so that once logged out login pops in (isAuthenticated should be false and auth should be checked when changing the site)
// When token invalid should logout as well
// Figure out what to do when product not ready
// Figure out what with other errors https://plaid.com/docs/errors/

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
