import fetchRequest from './fetchRequest'
import fetchRequestWithAuth from './fetchRequestWithAuth'
import fetchRequestWithSettingHttpOnlyCookie from './fetchRequestWithSettingHttpOnlyCookie'
import fetchRequestWithDeleteToken from './fetchRequestWithDeleteToken'

import nestedObjectCheck from './nestedObjectCheck'


const backendRequest = async (req, res, address, method='GET') => {
    let response;

    if (address === 'http://localhost:8002') {
        response = await fetchRequest(address, {
            method: 'GET'
        })
    } else if (address === 'http://localhost:8002/access-token') {
        if (method === 'GET') {
            if (nestedObjectCheck(req, 'body.publicToken')) {
                response = await fetchRequestWithSettingHttpOnlyCookie(res, address, req.body.publicToken)
            } else {
                return false
            }    
        } else if (method === 'DELETE') {
            response = await fetchRequestWithDeleteToken(res, address, 'GET', res.locals.bearerToken)
        } else {
            return false
        }
    } else if (address === 'http://localhost:8002/auth') {
        response = await fetchRequestWithAuth(address, 'GET', res.locals.bearerToken)
    } else if (address === 'http://localhost:8002/institution') {
        response = await fetchRequestWithAuth(address, 'GET', res.locals.bearerToken)
    } else if (address === 'http://localhost:8002/accounts') {
        response = await fetchRequestWithAuth(address, 'GET', res.locals.bearerToken)
    } else if (address.startsWith('http://localhost:8002/balance/')) {
        response = await fetchRequestWithAuth(address, 'GET', res.locals.bearerToken)
    } else if (address.startsWith('http://localhost:8002/transactions/')) {
        response = await fetchRequestWithAuth(address, 'GET', res.locals.bearerToken)
    } else {
        return false
    }

    console.log("after ifs backendrequest")
    console.log(address)
    console.log(response)

    res.status(response.status_code ? response.status_code : 500).json(response)
}


export default backendRequest
