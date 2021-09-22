import { useEffect } from 'react'

import useSWR from 'swr'

import BalanceBoxContent from './BalanceBoxContent'

const fetcher = (...args) => fetch(...args).then(res => res.json())


const BalanceBox = ({ accountId }) => {

    const { data: balanceInfo, error } = useSWR(`/api/balance/${accountId}`, fetcher)

    useEffect(() => {
        console.log(balanceInfo)       
    }, [balanceInfo])

    if (error) return <div>failed to load</div>
    if (!balanceInfo) return <div>loading...</div>
    if (typeof(balanceInfo.name) !== 'undefined' && balanceInfo.name === 'PlaidError') return <div>{balanceInfo.error_code}: {balanceInfo.error_message}</div>


    return (
        <div className="box">
            { balanceInfo.accounts[0].balances && <BalanceBoxContent balanceAccounts={balanceInfo.accounts[0]} />}
        </div>
    )
}

export default BalanceBox
