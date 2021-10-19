export default async function fetchRequestWithAuth(address, method='GET') {
    const response = await fetch(address, config)

    const status = response.status
    const data = await response.json()
    
    return {
        ...data, 
        status_code: status
    }
}  