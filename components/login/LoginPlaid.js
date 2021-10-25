import { useEffect, useState } from 'react'

import apiRequest from '../../libs/requests/apiRequest'

import LinkPlaid from './LinkPlaid'
import Loader from '../loader/Loader'


function LoginPlaid() {
    const [linkToken, setLinkToken] = useState(null)

    const generateToken = async () => {
        try {
            const linkTokenData = await apiRequest('/api/link-token')
            setLinkToken(linkTokenData.link_token)
        } catch (error) {
            setLinkToken(null)
            console.error(error)
        }
    }

    useEffect(() => {
        if (linkToken === null) {
            generateToken()
        }
    }, [])

    return (
        linkToken != null ? <LinkPlaid linkToken={linkToken} /> : <Loader/>
    )
}


export default LoginPlaid