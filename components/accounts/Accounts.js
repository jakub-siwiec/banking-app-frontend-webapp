import swrRequest from '../../libs/swrRequest'

import Account from './Account'
import LoaderSite from '../loader/LoaderSite'

const Accounts = () => {

    const { data: dataAccounts, error: errorAccounts, loading: loadingAccounts } = swrRequest('/api/get-accounts')


    if (errorAccounts) return <div>failed to load</div>
    if (loadingAccounts) return <LoaderSite />

    return (
        <div className="columns is-multiline is-variable">
                {dataAccounts.accounts && dataAccounts.accounts.map(account => 
                    <Account 
                        key={account.account_id}
                        id={account.account_id} 
                        name={account.name} 
                        official_name={account.official_name} 
                        type={account.type}
                        subtype={account.subtype}
                        available_balance={account.balances.available}
                        current_balance={account.balances.current}
                        currency={account.balances.iso_currency_code}
                        limit={account.balances.limit}
                    />
                )}
        </div>
    )
}

export default Accounts
