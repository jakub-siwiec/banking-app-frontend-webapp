import { useEffect, useState } from 'react'

import { useSWRConfig } from 'swr'

import swrRequest from '../libs/swrRequest'

import AuthContext from './AuthContext'

// To refresh provider so that once logged out login pops in (isAuthenticated should be false and auth should be checked when changing the site)
// To delete the token once logging out 
// When token invalid should logout as well
// Figure out what to do when product not ready
// Figure out what with other errors https://plaid.com/docs/errors/

const AuthContextProvider = ({ children }) => {

    const { mutate } = useSWRConfig()

    const [auth, setAuth] = useState({ isAuthenticated: false, loadingAuthentication: true })

    const { data: dataAuth, loading: loadingAuth } = swrRequest('/api/auth')

    const checkAuth = async () => {
        if (dataAuth && dataAuth.status_code >= 200 && dataAuth.status_code < 300) {
            setAuth({ isAuthenticated: true, loadingAuthentication: loadingAuth })
        } else {
            setAuth({ isAuthenticated: false, loadingAuthentication: loadingAuth })
        }
        console.log("HAHAHAHA----")
        console.log(auth)
    }

    const revalidateAuth = async () => {
        console.log("Hi")
        await mutate('/api/auth')
        await checkAuth()
    }

    useEffect(() => {
        checkAuth()
    }, [dataAuth, loadingAuth])

    return (
        <AuthContext.Provider value={ { revalidateAuth, ...auth } }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
