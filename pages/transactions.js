import { useEffect } from 'react'

import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const transactions = () => {

    const { data, error } = useSWR('/api/get-transactions-all', fetcher)

    useEffect(() => {
        console.log(data)       
    }, [data])


    return (
        <div>
            
        </div>
    )
}

export default transactions
