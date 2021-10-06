import { parseCookies, destroyCookie } from 'nookies'


export default async function cookiesRequest(req, res, address, method='GET', deleteCookie=false) {
    const cookies = parseCookies({req})

    if (cookies.accesstoken) {
        const response = await fetch(address, {
            method: method,
            headers: {
                'Authorization': 'Bearer ' + cookies.accesstoken,
            },
        })
        const data = await response.json()
        deleteCookie && destroyCookie({ res }, 'accesstoken')
        res.status(200).json(data)
    } else {
        res.status(401).json({
            status_code: 401,
            error_code: "NO_ACCESS_TOKEN"
        })
    }
}  