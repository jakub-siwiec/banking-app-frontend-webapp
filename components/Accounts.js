import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Accounts = () => {

    const config = {
        credentials: 'include'
    }

    const { data, error } = useSWR('/api/get-accounts', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <div>
            Accounts {JSON.stringify(data)}
        </div>
    )
}

export default Accounts
