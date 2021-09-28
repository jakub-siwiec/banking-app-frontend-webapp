import swrRequest from '../../libs/swrRequest'

import BankBox from './BankBox'
import LoginPlaid from './LoginPlaid'

const LoginPageButton = () => {

    const { data: institution, error } = swrRequest('/api/get-institution')

    const nameExists = institution && institution.institution

    return nameExists ? (
        <BankBox 
            institution={institution}
        />
    ) : <LoginPlaid />
}

export default LoginPageButton
