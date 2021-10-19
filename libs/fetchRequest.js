export default async function fetchRequest(address, method='GET', credentials='include') {
    const response = await fetch(address, {
        method: method,
        credentials: credentials
    })

    const status = response.status
    const data = await response.json()
    
    return {
        ...data, 
        status_code: status
    }
}  