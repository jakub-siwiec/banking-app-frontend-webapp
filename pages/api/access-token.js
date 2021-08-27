import { setCookie } from 'nookies'

export default async function handler(req, res) {
    const response = await fetch('http://localhost:8002/access-token', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ publicToken: req.body.publicToken })
    })
    const data = await response.json()
    setCookie( {res}, 'accesstoken', data.access_token, { httpOnly: true })
    res.status(200).json({ message: 'success' })
}  