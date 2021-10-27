import { startsWith } from 'lodash'
import useSWR from 'swr'


export default function swrRequest(url) {
    const fetcher = (...args) => fetch(...args).then(async res => {
        const response = await res.json()
        if (!res.ok) {
            const error = new Error(`There was an error: ${response.status_code} ${response.message}`)
            error.info = response
            error.status = response.status_code
            error.message = response.message
            error.code = response.code
            error.type = response.type
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