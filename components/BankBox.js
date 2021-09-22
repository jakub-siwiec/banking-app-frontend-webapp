import useSWR from 'swr'

import LoginPlaid from './LoginPlaid'

const fetcher = (...args) => fetch(...args).then(res => res.json())


const BankBox = () => {

    const { data: institution, error } = useSWR('/api/get-institution', fetcher)

    const nameExists = institution && institution.institution

    return nameExists ? (
        <div>
            {institution.institution.name}
        </div>
    ) : <LoginPlaid />
}

export default BankBox
