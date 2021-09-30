import useSWR from 'swr'

export default function swrRequest(url) {
    const fetcher = (...args) => fetch(...args).then(async res => {
        if (res.status < 200 || res.status >= 300) {
            const error = new Error(`There was an error: ${res.status} ${res.statusText}`)
            error.info = await res.json()
            error.status = res.status
            error.statusText = res.statusText
            throw error
        }
        if (res.status_code < 200 || res.status_code >= 300) {
            const error = new Error(`There was a Plaid error: ${res.status_code} ${res.error_code}`)
            error.info = await res.json()
            error.status = res.status_code
            error.statusText = res.error_code
            throw error
        }
        return res.json()
    })
    const { data, error } = useSWR(url, fetcher)

    return {
        data: data,
        loading: !data && !error,
        error: error
    }
}