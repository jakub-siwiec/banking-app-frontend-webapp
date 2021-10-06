import Link from 'next/link'

import swrRequest from '../../libs/swrRequest'

import Loader from '../loader/Loader'
import ErrorItem from '../ErrorItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const BankBox = () => {

    const { data: dataInstitution, error: errorInstitution, loading: loadingInstitution } = swrRequest('/api/get-institution')

    if (errorInstitution && errorInstitution.status !== 401) return <ErrorItem errorStatus={errorInstitution.status} errorText={errorInstitution.statusText}/>
    if (loadingInstitution) return <Loader />

    const nameExists = dataInstitution && dataInstitution.institution


    return (
        <Link href='/accounts'>
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        {nameExists && dataInstitution.institution.name}
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
