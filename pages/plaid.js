import { useEffect, useState } from 'react'

import LinkPlaid from '../components/LinkPlaid'

function Plaid() {
    const [linkToken, setLinkToken] = useState(null)

    const generateToken = async () => {
        try {
            const response = await fetch('/api/link-token', {
                method: 'GET',
            })
            const data = await response.json()
            setLinkToken(data.link_token)
        } catch (error) {
            setLinkToken(null)
            console.error(error)
        }
    }

    useEffect(() => {
        generateToken()
    }, [])

    return linkToken != null ? (
        <div>
            <LinkPlaid linkToken={linkToken} />
        </div>
    ) : <>No link token</>
}

export default Plaid