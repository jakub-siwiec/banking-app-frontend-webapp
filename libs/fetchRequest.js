export default async function fetchRequest(address, config) {
    console.log("fetchRequest")
    console.log(address)
    console.log(config)
    const response = await fetch(address, config)

    console.log(response)
    console.log(typeof response)

    const status = response.status
    const data = await response.json()
    
    console.log(status)
    console.log(data)

    return {
        ...data, 
        status_code: status
    }
}  