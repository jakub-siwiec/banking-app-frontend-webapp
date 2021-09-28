import { useEffect, useState } from 'react'

import LinkPlaid from './LinkPlaid'
import Loader from '../loader/Loader'

import swrRequest from '../../libs/swrRequest'


function LoginPlaid() {
    const [linkToken, setLinkToken] = useState(null)

    const { data: institution, error } = swrRequest('/api/get-institution')


    const generateToken = async () => {
        try {
            const response = await fetch('/api/link-token', {
                method: 'GET',
            })
            const linkTokenData = await response.json()
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
    }, [institution])

    return (
        linkToken != null ? <LinkPlaid linkToken={linkToken} /> : <Loader/>
    )
}

export default LoginPlaid