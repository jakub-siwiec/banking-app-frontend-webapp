import swrRequest from '../../libs/swrRequest'

import TransactionRecord from './TransactionRecord'
import Loader from '../loader/Loader'
import ErrorItem from '../ErrorItem'


const TransactionsTable = ({accountId}) => {

    const { data: dataTransactions, error: errorTransactions, loading: loadingTransactions } = swrRequest(`/api/transactions/${accountId}`)

    if (errorTransactions) return <ErrorItem errorStatus={errorTransactions.status} errorText={errorTransactions.statusText} address={`/api/transactions/${accountId}`} />
    if (loadingTransactions) return <Loader />

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Name</th>
                    <th>Categories</th>
                    <th>Transaction ID</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {dataTransactions && dataTransactions.map(transaction => <TransactionRecord 
                    key={transaction.transaction_id}
                    date={transaction.date}
                    amount={transaction.amount}
                    currency={transaction.iso_currency_code}
                    name={transaction.name}
                    categories={transaction.category}
                    transactionId={transaction.transaction_id}
                    type={transaction.transaction_type}
                />)}
            </tbody>
        </table>
    )
}

export default TransactionsTable
