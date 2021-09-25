import { useEffect } from 'react'

import useSWR from 'swr'

import Account from './Account'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Accounts = () => {

    const config = {
        credentials: 'include'
    }

    const { data, error } = useSWR('/api/get-accounts', fetcher)

    useEffect(() => {
        console.log(data)       
    }, [data])


    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <div className="columns is-multiline is-variable">
                {data.accounts && data.accounts.map(account => 
                    <Account 
                        key={account.account_id}
                        id={account.account_id} 
                        name={account.name} 
                        official_name={account.official_name} 
                        type={account.type}
                        subtype={account.subtype}
                        available_balance={account.balances.available}
                        current_balance={account.balances.current}
                        currency={account.balances.iso_currency_code}
                        limit={account.balances.limit}
                    />
                )}
        </div>
    )
}

export default Accounts
