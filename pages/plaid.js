import { useEffect, useState } from 'react'

import LinkPlaid from '../components/LinkPlaid'

function Plaid() {
    const [linkToken, setLinkToken] = useState(null)

    const generateToken = async () => {
        const response = await fetch('http://localhost:8002', {
            method: 'GET',
        })
        const data = await response.json()
        console.log(data)
        setLinkToken(data.link_token)
    };
    useEffect(() => {
        generateToken()
    }, []);

    return linkToken != null ? (
        <div>
            <LinkPlaid linkToken={linkToken} />
        </div>
    ) : <>No link token</>
}

export default Plaid