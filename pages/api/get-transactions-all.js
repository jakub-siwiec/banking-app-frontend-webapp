import { parseCookies } from 'nookies'

export default async function handler(req, res) {
    const cookies = parseCookies({req})

    if (cookies.accesstoken) {
        const response = await fetch('http://localhost:8002/transactions', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + cookies.accesstoken,
            },
        })
        const data = await response.json()
        res.status(200).json(data)
    }
}  