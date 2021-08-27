import { useCallback } from 'react'

import { usePlaidLink } from 'react-plaid-link'


const LinkPlaid = ({ linkToken }) => {
    const onSuccess = useCallback( async (publicToken, metadata) => {
        console.log(publicToken)
        console.log(metadata)
        const response = await fetch('api/access-token', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ publicToken: publicToken })
        })
        const data = await response.json()
        console.log(data)
    }, [])

    const config = {
        token: linkToken,
        onSuccess
    }

    const { open, ready } = usePlaidLink(config)

    return (
        <button onClick={() => open()} disabled={!ready}>
            Link account
        </button>
    )
}

export default LinkPlaid