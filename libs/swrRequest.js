import useSWR from 'swr'

export default function swrRequest(url) {
    console.log("swrRequest")
    const fetcher = (...args) => fetch(...args).then(async res => {
        const response = await res.json()
        if (response.status_code < 200 || response.status_code >= 300) {
            const error = new Error(`There was an error: ${response.status_code} ${response.error_code}`)
            error.info = response
            error.status = response.status_code
            error.statusText = response.error_code
            console.log(error)
            throw error
        }
        return response
    })
    const { data, error } = useSWR(url, fetcher)

    return {
        data: data,
        loading: !data && !error,
        error: error
    }
}