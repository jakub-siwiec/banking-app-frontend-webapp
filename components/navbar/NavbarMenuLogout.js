import { useContext } from 'react'

import { useRouter } from 'next/router'

import fetchRequest from '../../libs/fetchRequest'

import AuthContext from '../../context/AuthContext'


const NavbarMenuLogout = () => {
    const router = useRouter()
    const authContext = useContext(AuthContext)
    const { checkAuth } = authContext
    console.log(authContext)

    const clickLogout = async (e) => {
        const data = await fetchRequest('/api/delete-access-token')
        checkAuth()
        router.push('/')
    }

    return (
        <a className="navbar-item" onClick={(e) => clickLogout(e)}>
            Logout
        </a>
    )
}

export default NavbarMenuLogout
