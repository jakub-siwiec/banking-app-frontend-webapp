const BalanceBoxContent = ({ balanceAccounts }) => {
    
    const { balances, name, official_name, subtype, type } = balanceAccounts

    const currentValue = ({ current, iso_currency_code }) => current.toString() + " " + iso_currency_code.toString()

    return (
        <>
            <div className="title">
                {name}
            </div>
            <div className="subtitle">
                {official_name}
            </div>
            <div>
                {currentValue(balances)}
            </div>
            <div>
                {subtype}
            </div>
            <div>
                {type}
            </div>
        </>
    )
}

export default BalanceBoxContent
