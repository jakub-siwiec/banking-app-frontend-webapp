import Navbar from '../components/Navbar'

const test = ({ msg }) => {
    return (
        <>
            <Navbar />
            <div className="columns is-centered">
                <div className="column is-half">
                    <div className="container">
                        <div className="level">
                            <div className="level-item">
                                <a className="button is-primary">
                                    {msg}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default test
