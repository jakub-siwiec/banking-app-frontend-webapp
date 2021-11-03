import fetchRequest from './fetchRequest'
import fetchRequestWithAuth from './fetchRequestWithAuth'
import fetchRequestWithSettingHttpOnlyCookie from './fetchRequestWithSettingHttpOnlyCookie'
import fetchRequestWithDeleteToken from './fetchRequestWithDeleteToken'

import generateErrorObject from '../generateErrorObject'
import nestedObjectCheck from '../nestedObjectCheck'


const backendRequest = async (req, res, address, method='GET') => {
    let response;

    const wrongMethodError = () => generateErrorObject({
        statusCode: 405, 
        message: 'Method not allowed', 
        name: 'TypeError',
        code: 'ERR_METHOD_NOT_ALLOWED',
        type: 'MethodNotAllowed'
    })

    if (address === 'http://localhost:8002') {
        if (method === 'GET') {
            response = await fetchRequest(address, {
                method: method
            })
        } else {
            throw wrongMethodError()
        }
    } else if (address === 'http://localhost:8002/access-token') {
        if (method === 'GET') {
            if (nestedObjectCheck(req, 'body.publicToken')) {
                response = await fetchRequestWithSettingHttpOnlyCookie(res, address, req.body.publicToken)
            } else {
                throw generateErrorObject(400, 'No public token included')
            }    
        } else if (method === 'DELETE') {
            response = await fetchRequestWithDeleteToken(res, address, method, res.locals.bearerToken)
        } else {
            throw wrongMethodError()
        }
    } else if (
        address === 'http://localhost:8002/auth'
        || address === 'http://localhost:8002/institution'
        || address === 'http://localhost:8002/accounts'
        || address.startsWith('http://localhost:8002/balance')
        || address.startsWith('http://localhost:8002/transactions')
    ) {
        if (method === 'GET') {
            response = await fetchRequestWithAuth(address, method, res.locals.bearerToken)
        } else {
            throw wrongMethodError()            
        }
    } else {
        throw generateErrorObject({
            statusCode: 404, 
            message: 'No backend endpoint available', 
            name: 'NOT_FOUND',
            code: 'ERR_INVALID_REQUEST',
            type: 'NotFound'
        })
    }

    if (!response.status_code || response.status_code >= 400) throw response

    res.status(response.status_code).json(response)
}


export default backendRequest
