import Link from 'next/link'

import nestedObjectCheck from '../../libs/nestedObjectCheck'
import swrRequest from '../../libs/swrRequest'
import apiRequest from '../../libs/apiRequest'

import ErrorItem from '../ErrorItem'
import Loader from '../loader/Loader'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


const BankBox = () => {
    const exmpl = apiRequest('/api/get-institution')
    console.log("BankBox")
    console.log(exmpl)
    const { data: dataInstitution, error: errorInstitution, loading: loadingInstitution } = exmpl

    // const { data: dataInstitution, error: errorInstitution, loading: loadingInstitution } = apiRequest('/api/get-institution')

    if (errorInstitution && errorInstitution.status !== 401) return <ErrorItem errorStatus={errorInstitution.status} errorText={errorInstitution.statusText}/>
    if (loadingInstitution) return <Loader />

    return (
        <Link href='/accounts' passHref>
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        {nestedObjectCheck(dataInstitution, 'institution.name') && dataInstitution.institution.name}
                    </p>
                    <button className="card-header-icon">
                        <span className="icon">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                    </button>
                </header>   
            </div>
        </Link>
    )
}


export default BankBox
