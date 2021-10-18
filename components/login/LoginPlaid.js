import { useEffect, useState } from 'react'

import fetchRequest from '../../libs/fetchRequest'

import LinkPlaid from './LinkPlaid'
import Loader from '../loader/Loader'


function LoginPlaid() {
    const [linkToken, setLinkToken] = useState(null)

    const generateToken = async () => {
        try {
            console.log("Hello, it's me")
            const linkTokenData = await fetchRequest('/api/link-token', 'GET', 'same-origin')
            console.log(linkTokenData)
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