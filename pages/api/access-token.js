import cookie from 'cookie'

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
    const accessTokenCookie = cookie.serialize('accesstoken', data.access_token)
    const cookieOptions = {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7 // 1 week
    }
    res.setHeader('Set-Cookie', accessTokenCookie, cookieOptions)
    res.end(res.getHeader('Set-Cookie'))
}  