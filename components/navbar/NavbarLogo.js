import Image from 'next/image'
import Link from 'next/link'

const NavbarLogo = () => {
    return (
        <Link href='/'>
            <a className="navbar-item" href="https://bulma.io">
            {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> */}
                <Image src="/logo.png" width="60" height="60" />
            </a>
        </Link>
)
}

export default NavbarLogo
