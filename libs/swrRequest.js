import useSWR from 'swr'

export default function swrRequest(url) {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR(url, fetcher)

    return {
        data: data,
        loading: !data && !error,
        error: error
    }
}