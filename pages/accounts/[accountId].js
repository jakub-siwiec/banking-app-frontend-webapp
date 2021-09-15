import { useRouter } from 'next/router'

import TransactionsTable from '../../components/TransactionsTable'

import BalanceBox from '../../components/BalanceBox'


const accountsId = () => {
    const router = useRouter()
    const { accountId } = router.query


    return (
        <>
            <BalanceBox accountId={accountId} />
            <TransactionsTable accountId={accountId} />
        </>
    )
}

export default accountsId
