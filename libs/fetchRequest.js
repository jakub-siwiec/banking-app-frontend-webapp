export default async function fetchRequest(address, method='GET') {
    const response = await fetch(address, {
        method: method,
        credentials: 'include'
    })
    const data = await response.json()
    
    return data
}  