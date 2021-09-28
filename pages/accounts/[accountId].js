import { useRouter } from 'next/router'

import DefaultLayout from '../../components/DefaultLayout'

import TransactionsTable from '../../components/account/TransactionsTable'

import BalanceBox from '../../components/account/BalanceBox'


const accountsId = () => {
    const router = useRouter()
    const { accountId } = router.query


    return (
        <DefaultLayout>
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
        </DefaultLayout>
    )
}

export default accountsId
