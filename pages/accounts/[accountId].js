import { useRouter } from 'next/router'

import TransactionsTable from '../../components/TransactionsTable'

import BalanceBox from '../../components/BalanceBox'


const accountsId = () => {
    const router = useRouter()
    const { accountId } = router.query


    return (
        <>
            <div className="level">
                <div className="level-item">
                    <BalanceBox accountId={accountId} />
                </div>
            </div>
            <div className="level">
                <div className="level-item">
                    <TransactionsTable accountId={accountId} />
                </div>
            </div>
        </>
    )
}

export default accountsId
