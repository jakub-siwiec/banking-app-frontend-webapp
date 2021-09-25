import { useEffect, useState } from 'react'

import FullSiteCentered from '../FullSiteCentered'
import LinkPlaid from './LinkPlaid'
import Loader from '../loader/Loader'

import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())


function LoginPlaid() {
    const [linkToken, setLinkToken] = useState(null)

    const { data: institution, error } = useSWR('/api/get-institution', fetcher)


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
        <FullSiteCentered>
            {linkToken != null ? <LinkPlaid linkToken={linkToken} /> : <Loader/>}
        </FullSiteCentered>
    )
}

export default LoginPlaid