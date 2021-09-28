import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const BankBox = ({ institution }) => {

    return (
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
    )
}

export default BankBox
