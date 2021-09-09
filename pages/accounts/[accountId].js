import { useEffect } from 'react'

import { useRouter } from 'next/router'

import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const accountsId = () => {
    const router = useRouter()
    const { accountId } = router.query

    const { data, error } = useSWR(`/api/transactions/${accountId}`, fetcher)

    useEffect(() => {
        console.log(data)
    }, [data])


    return (
        <div>
            {accountId}
        </div>
    )
}

export default accountsId
