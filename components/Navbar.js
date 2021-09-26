import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {

    const [burgerActive, setBurger] = useState(false)

    const burgerToggle = () => {
        burgerActive ? setBurger(false) : setBurger(true) 
    }

    const isActiveClass = burgerActive ? "is-active" : ""
    const navbarBurgerClasses = `navbar-burger ${isActiveClass}`
    const navbarMenuClasses = `navbar-menu ${isActiveClass}`


    return (
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> */}
                        <Image src="/logo.png" width="60" height="60" />
                    </a>
                    <a onClick={burgerToggle} role="button" className={navbarBurgerClasses} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true">{burgerActive}</span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className={navbarMenuClasses}>
                    <div className="navbar-start">
                        <Link href="/">
                            <a className="navbar-item">
                                Home
                            </a>
                        </Link>
                        <Link href="/accounts">
                            <a className="navbar-item">
                                Accounts
                            </a>
                        </Link>
                    </div>
                </div>    
            </nav>
        </>
    )
}

export default Navbar
