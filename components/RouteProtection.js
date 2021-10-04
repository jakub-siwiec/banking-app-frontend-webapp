import { useContext } from 'react'

import AuthContext from '../context/AuthContext'

import LoginPage from './login/LoginPage'
import LoaderSite from './loader/LoaderSite'

const RouteProtection = ({children}) => {
    const authContext = useContext(AuthContext)
    const { isAuthenticated, loadingAuthentication } = authContext

    console.log(authContext)

    if (loadingAuthentication) return <LoaderSite />
    if (loadingAuthentication === false && isAuthenticated !== true) return <LoginPage />

    return children
}

export default RouteProtection
