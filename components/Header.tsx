import Link from 'next/link'
export default function Header(){
    return (
        <header className="header">
            <Link href="/">
                <img src="/static/logo.svg" alt="Logo Icon" className="header__logo"/>
            </Link>
            <Link href="/">
                <h1 className="header__title">FishCastle</h1>
            </Link>
            <a href="#" className="header__summary snipcart-checkout snipcart-summary" style={{textDecoration: "none"}}>
                <span className="header__price snipcart-total-price"></span>
            </a>
        </header>
    )
}