import { useRouter } from 'next/router'

import Navbar from '../../components/Navbar'

import TransactionsTable from '../../components/account/TransactionsTable'

import BalanceBox from '../../components/account/BalanceBox'


const accountsId = () => {
    const router = useRouter()
    const { accountId } = router.query


    return (
        <>
            <Navbar />
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
