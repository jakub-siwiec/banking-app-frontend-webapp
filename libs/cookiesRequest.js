import { parseCookies } from 'nookies'

export default async function cookiesRequest(req, res, address, method='GET') {
    const cookies = parseCookies({req})

    if (cookies.accesstoken) {
        console.log(cookies.accesstoken)
        const response = await fetch(address, {
            method: method,
            headers: {
                'Authorization': 'Bearer ' + cookies.accesstoken,
            },
        })
        const data = await response.json()
        res.status(200).json(data)
    } else {
        res.status(401).json({
            status_code: 401,
            error_code: "No token received"
        })
    }

}  