import destroyAccessToken from './destroyAccessToken'

// The role of cookies request would change from checking cookies to just a fetch request with bearer token
// If we use middleware

export default async function cookiesRequest(req, res, address, method='GET', deleteCookie=false) {

    const response = await fetch(address, {
        method: method,
        headers: {
            'Authorization': res.locals.bearerToken,
        },
    })
    const status = await response.status
    const data = await response.json()
    deleteCookie && destroyAccessToken(res)
    res.status(status ? status : 500).json(data)
}  