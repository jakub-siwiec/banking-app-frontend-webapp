import { parseCookies } from 'nookies'

export default async function cookiesRequest(req, res, address, method='GET') {
    const cookies = parseCookies({req})

    if (cookies.accesstoken) {
        const response = await fetch(address, {
            method: method,
            headers: {
                'Authorization': 'Bearer ' + cookies.accesstoken,
            },
        })
        const data = await response.json()
        res.status(200).json(data)
    } else {
        res.status(401).json({msg: "No token"})
    }

}  