import { useEffect } from 'react'

import useSWR from 'swr'

import TransactionRecord from './TransactionRecord'


const TransactionsTable = ({accountId}) => {

    const fetcher = (...args) => fetch(...args).then(res => res.json())

    const { data: transactionList, error } = useSWR(`/api/transactions/${accountId}`, fetcher)

    useEffect(() => {
        console.log(transactionList)       
    }, [transactionList])


    if (error) return <div>failed to load</div>
    if (!transactionList) return <div>loading...</div>
    if (!Array.isArray(transactionList)) return <div>try again later</div>


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
                {transactionList && transactionList.map(transaction => <TransactionRecord 
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
