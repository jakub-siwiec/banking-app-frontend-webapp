import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import swrRequest from '../../libs/swrRequest'

import FullSiteCentered from '../FullSiteCentered'
import LoginPlaid from './LoginPlaid'

import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const BankBox = () => {

    const { data: institution, error } = swrRequest('/api/get-institution')

    const nameExists = institution && institution.institution

    console.log(institution)

    return nameExists ? (
        <FullSiteCentered>
            <Link href='/accounts'>
                <div className="card">
                    <header className="card-header">
                        <p class="card-header-title">
                            {institution.institution.name}
                        </p>
                        <button class="card-header-icon">
                            <span class="icon">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </span>
                        </button>
                    </header>   
                </div>
            </Link>
        </FullSiteCentered>
    ) : <LoginPlaid />
}

export default BankBox
