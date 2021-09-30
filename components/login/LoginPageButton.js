import swrRequest from '../../libs/swrRequest'

import BankBox from './BankBox'
import Loader from '../loader/Loader'
import LoginPlaid from './LoginPlaid'
import ErrorItem from '../ErrorItem'

const LoginPageButton = () => {

    const { data: dataInstitution, error: errorInstitution, loading: loadingInstitution } = swrRequest('/api/get-institution')

    if (errorInstitution && errorInstitution.status !== 401) return <ErrorItem errorText={`${errorInstitution.status} ${errorInstitution.statusText}`}/>
    if (loadingInstitution) return <Loader />

    const nameExists = dataInstitution && dataInstitution.institution

    return nameExists ? (
        <BankBox 
            institution={dataInstitution}
        />
    ) : <LoginPlaid />
}

export default LoginPageButton
