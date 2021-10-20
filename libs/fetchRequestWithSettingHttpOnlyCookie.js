import fetchRequest from './fetchRequest'
import addAccessToken from './addAccessToken'


export default async function fetchRequestWithSettingHttpOnlyCookie(res, address, publicToken) {
    const response = await fetchRequest(address, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ publicToken: publicToken })
    }) 

    addAccessToken(res, response.data.access_token)

    return response
}  