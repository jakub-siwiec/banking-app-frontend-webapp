import fetchRequestWithAuth from './fetchRequestWithAuth'
import destroyAccessToken from './destroyAccessToken'


export default async function fetchRequestWithDeleteToken(res, address, method='GET', bearerToken) {
    const response = await fetchRequestWithAuth(address, method='GET', bearerToken)

    destroyAccessToken(res)

    return response
}  