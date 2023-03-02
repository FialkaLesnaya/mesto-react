import logoPath from '../images/logo.svg';

function Header() {
    return (
        <header class="header">
            <a class="header__logo-link" href="#" target="_self">
                <img class="header__logo" src={logoPath} alt="Логотип сайта Место" />
            </a>
        </header>
    )
}

export default Header;