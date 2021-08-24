import { useState, useEffect } from 'react'

import { getCookies } from '../utils/getCookies'

const Navbar = () => {

    const [burgerActive, setBurger] = useState(false)

    const burgerToggle = () => {
        burgerActive ? setBurger(false) : setBurger(true) 
    }

    const isActiveClass = burgerActive ? "is-active" : ""
    const navbarBurgerClasses = `navbar-burger ${isActiveClass}`
    const navbarMenuClasses = `navbar-menu ${isActiveClass}`

    

    useEffect(() => {
        const cookies = getCookies()
        console.log(cookies)
        document.cookie = "test=testCookie;"
    }, [])


    return (
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a>
                    <a onClick={burgerToggle} role="button" className={navbarBurgerClasses} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true">{burgerActive}</span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className={navbarMenuClasses}>
                    <div className="navbar-start">
                        <a className="navbar-item">
                        Home
                        </a>

                        <a className="navbar-item">
                        Documentation
                        </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                More
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    About
                                </a>
                                <a className="navbar-item">
                                    Jobs
                                </a>
                                <a className="navbar-item">
                                    Contact
                                </a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">
                                    Report an issue
                                </a>
                            </div>
                        </div>
                    </div>
                </div>    
            </nav>
        </>
    )
}

export default Navbar
