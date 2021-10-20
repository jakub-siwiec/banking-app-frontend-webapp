import fetchRequest from './fetchRequest'


export default async function fetchRequestWithAuth(address, method='GET', bearerToken) {
    console.log("fetchRequestWithAuth")
    const response = await fetchRequest(address, {
        method: method,
        headers: {
            'Authorization': bearerToken,
        },
    })

    return response
}  