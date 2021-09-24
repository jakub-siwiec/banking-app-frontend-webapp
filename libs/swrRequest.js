import useSWR from 'swr'

export default function swrRequest(url) {
    const fetcher = (...args) => fetch(...args).then(res => {
        if (res.status < 200 || res.status >= 300) {
            throw new Error(`There was an error: ${res.status} ${res.statusText}`)
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