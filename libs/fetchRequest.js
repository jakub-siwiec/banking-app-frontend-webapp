export default async function fetchRequest(address, method='GET', credentials='include') {
    const response = await fetch(address, {
        method: method,
        credentials: credentials
    })
    const data = await response.json()
    
    return data
}  