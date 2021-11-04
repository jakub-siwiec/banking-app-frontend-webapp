import fetchRequest from './fetchRequest'

import generateErrorObject from '../generateErrorObject'
import nestedObjectCheck from '../nestedObjectCheck'


const apiRequest = async (address, values) => {
    let response;

    if (address === '/api/auth') {
        response = await fetchRequest(address, {
            method: 'GET',
            credentials: 'include'
        })
    } else if (address === '/api/link') {
        response = await fetchRequest(address, {
            method: 'GET'
        })
    } else if (address === 'api/login') {
        if (nestedObjectCheck(values, 'publicToken')) {
            response = await fetchRequest(address, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ publicToken: values.publicToken })
            })
        } else {
            throw generateErrorObject({
                statusCode: 400, 
                message: 'No public token', 
                name: 'BadRequest',
                code: 'ERR_NO_PUBLIC_TOKEN',
                type: 'BadRequest'
            })
            }
    } else if (address === '/api/logout') {
        response = await fetchRequest(address, {
            method: 'GET',
            credentials: 'include'
        })
    } else {
        throw generateErrorObject({
            statusCode: 404, 
            message: 'No backend endpoint available', 
            name: 'BadRequest',
            code: 'ERR_BAD_REQUEST',
            type: 'BadRequest'
        })
    }

    return response
}


export default apiRequest
