import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const BankBox = ({ institution }) => {

    return (
        <Link href='/accounts'>
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        {institution.institution.name}
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
