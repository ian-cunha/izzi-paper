function Footer() {

    return (
        <div className="card text-center">
            <div className="card-header">
                <a href="/" className="btn btn-footer"><i className="bi bi-house"></i> Início</a>
                <a href="/produtos" className="btn btn-footer"><i className="bi bi-shop-window"></i> Produtos</a>
                <a href="/sobre-nos" className="btn btn-footer"><i className="bi bi-person-circle"></i> Sobre mim</a>
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
