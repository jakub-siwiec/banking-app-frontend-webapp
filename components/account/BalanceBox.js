import nestedObjectCheck from '../../libs/nestedObjectCheck'
import swrRequest from '../../libs/swrRequest'

import BalanceBoxContent from './BalanceBoxContent'
import ErrorItem from '../ErrorItem'
import Loader from '../loader/Loader'


const BalanceBox = ({ accountId }) => {
    const { data: dataBalance, error: errorBalance, loading: loadingBalance } = swrRequest(`/api/balance/${accountId}`)

    if (errorBalance) return <ErrorItem errorStatus={errorBalance.status} errorText={errorBalance.statusText} />
    if (loadingBalance) return <Loader />

    return (
        <div className="box">
            { nestedObjectCheck(dataBalance, 'accounts[0].balances') && <BalanceBoxContent balanceAccounts={dataBalance.accounts[0]} />}
        </div>
    )
}


export default BalanceBox
