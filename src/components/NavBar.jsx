import Logo from '../assets/logo.png'

function NavBar() {

    return (
        <nav className="navbar fixed-top navbar-expand-lg bg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="Logo" width="80" height="80" className="d-inline-block align-text-top logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/"><i className="bi bi-house"></i> INÍCIO</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-bookmark"></i> CATEGORIAS
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/brinquedos">BRINQUEDOS</a></li>
                                <li><a className="dropdown-item" href="/artigos-de-escritorio">ARTIGOS DE ESCRITÓRIO</a></li>
                                <li><a className="dropdown-item" href="/personalizados">PERSONALIZADOS</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sobre-nos"><i className="bi bi-person-circle"></i> SOBRE NÓS</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
