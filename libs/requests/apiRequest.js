import fetchRequest from './fetchRequest'

import nestedObjectCheck from '../nestedObjectCheck'


const apiRequest = async (address, values) => {
    let response;

    if (address === '/api/auth') {
        response = await fetchRequest(address, {
            method: 'GET',
            credentials: 'include'
        })
    } else if (address === '/api/link-token') {
        response = await fetchRequest(address, {
            method: 'GET'
        })
    } else if (address === 'api/access-token') {
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
            return false
        }
    } else if (address === '/api/delete-access-token') {
        response = await fetchRequest(address, {
            method: 'GET',
            credentials: 'include'
        })
    } else {
        return false
    }

    return response
}


export default apiRequest