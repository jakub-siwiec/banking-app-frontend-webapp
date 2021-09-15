import { useRouter } from 'next/router'

import TransactionsTable from "../../components/TransactionsTable"


const accountsId = () => {
    const router = useRouter()
    const { accountId } = router.query


    return (
        <>
            <TransactionsTable accountId={accountId}/>
        </>
    )
}

export default accountsId
