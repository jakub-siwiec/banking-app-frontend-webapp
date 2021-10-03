import { parseCookies, destroyCookie } from 'nookies'

import cookiesRequest from '../../libs/cookiesRequest'

export default async function handler(req, res) {
    // await cookiesRequest(
    //     req,
    //     res,
    //     'http://localhost:8002/access-token',
    //     'DELETE'
    // )

    const cookies = parseCookies({req})
    const address = 'http://localhost:8002/access-token'
    const method = 'DELETE'

    if (cookies.accesstoken) {
        console.log(cookies.accesstoken)
        const response = await fetch(address, {
            method: method,
            headers: {
                'Authorization': 'Bearer ' + cookies.accesstoken,
            },
        })
        const data = await response.json()
        destroyCookie({ res }, 'accesstoken')
        res.status(200).json(data)
    } else {
        res.status(401).json({
            status_code: 401,
            error_code: "No token received"
        })
    }


    
}  