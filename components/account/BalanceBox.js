import swrRequest from '../../libs/swrRequest'

import BalanceBoxContent from './BalanceBoxContent'
import Loader from '../loader/Loader'
import ErrorItem from '../ErrorItem'



const BalanceBox = ({ accountId }) => {

    const { data: dataBalance, error: errorBalance, loading: loadingBalance } = swrRequest(`/api/balance/${accountId}`)

    if (errorBalance) return <ErrorItem errorStatus={errorBalance.status} errorText={errorBalance.statusText} />
    if (loadingBalance) return <Loader />
    if (typeof(dataBalance.name) !== 'undefined' && dataBalance.name === 'PlaidError') return <div>{dataBalance.error_code}: {dataBalance.error_message}</div>


    return (
        <div className="box">
            { dataBalance.accounts[0].balances && <BalanceBoxContent balanceAccounts={dataBalance.accounts[0]} />}
        </div>
    )
}

export default BalanceBox
