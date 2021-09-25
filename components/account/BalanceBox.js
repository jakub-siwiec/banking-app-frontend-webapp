import swrRequest from '../../libs/swrRequest'

import BalanceBoxContent from './BalanceBoxContent'



const BalanceBox = ({ accountId }) => {

    const { data: balanceInfo, error } = swrRequest(`/api/balance/${accountId}`)

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
