import { useContext } from 'react'

import { useRouter } from 'next/router'

import fetchRequest from '../../libs/fetchRequest'

import AuthContext from '../../context/AuthContext'


const NavbarMenuLogout = () => {
    const router = useRouter()
    const authContext = useContext(AuthContext)
    const { revalidateAuth } = authContext

    const clickLogout = async (e) => {
        await fetchRequest('/api/delete-access-token')
        await revalidateAuth()
        router.push('/')
    }

    return (
        <a className="navbar-item" onClick={(e) => clickLogout(e)}>
            Logout
        </a>
    )
}

export default NavbarMenuLogout
