function Footer() {

    return (
        <div className="card text-center">
            <div className="card-header">
                <a href="/" className="btn btn-footer"><i className="bi bi-house"></i> INÍCIO</a>
                <a className="btn btn-footer dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-bookmark"></i> CATEGORIAS
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/brinquedos">BRINQUEDOS</a></li>
                    <li><a className="dropdown-item" href="/artigos-de-escritorio">ARTIGOS DE ESCRITÓRIO</a></li>
                    <li><a className="dropdown-item" href="/personalizados">PERSONALIZADOS</a></li>
                </ul>
                <a href="/sobre-nos" className="btn btn-footer"><i className="bi bi-person-circle"></i> SOBRE NÓS</a>
            </div>
            <div className="card-body">
                <h2 className="text-center">izzi.paper</h2>
            </div>
            <div className="card-footer">
                © 2024 izzi.paper, Todos os direitos reservados.
            </div>
        </div>
    )
}

export default Footer
