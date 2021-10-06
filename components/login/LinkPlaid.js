import { useCallback, useContext } from 'react'

import { usePlaidLink } from 'react-plaid-link'

import AuthContext from '../../context/AuthContext'


const LinkPlaid = ({ linkToken }) => {
    const authContext = useContext(AuthContext)
    const { checkAuth } = authContext

    const onSuccess = useCallback( async (publicToken, metadata) => {
        const response = await fetch('api/access-token', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ publicToken: publicToken })
        })
        await response.json()
        checkAuth()
    }, [])

    const config = {
        token: linkToken,
        onSuccess
    }

    const { open, ready } = usePlaidLink(config)

    return (
        <button className="button is-link" onClick={() => open()} disabled={!ready}>
            Link account
        </button>
    )
}


export default LinkPlaid