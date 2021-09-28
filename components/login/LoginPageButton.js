import swrRequest from '../../libs/swrRequest'

import BankBox from './BankBox'
import LoginPlaid from './LoginPlaid'

const LoginPageButton = () => {

    const { data: dataInstitution, error: errorInstitution, loading: loadingInstitution } = swrRequest('/api/get-institution')

    const nameExists = dataInstitution && dataInstitution.institution

    return nameExists ? (
        <BankBox 
            institution={dataInstitution}
        />
    ) : <LoginPlaid />
}

export default LoginPageButton
