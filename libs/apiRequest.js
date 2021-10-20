import fetchRequest from './fetchRequest'
import swrRequest from './swrRequest'

import nestedObjectCheck from './nestedObjectCheck'


const apiRequest = async (address, values) => {
    let response;

    console.log("apiRequest")
    console.log(address)
    console.log(values)

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
    } else if (address === '/api/get-institution') {
        response = swrRequest(address)
    } else if (address === '/api/get-accounts') {
        response = swrRequest(address)
    } else if (address.startsWith('/api/balance/')) {
        response = swrRequest(address)
    } else if (address.startsWith('/api/transactions/')) {
        response = swrRequest(address)
    } else {
        return false
    }

    console.log("after ifs apiRequest")
    console.log(address)
    console.log(response)

    return response
}


export default apiRequest
