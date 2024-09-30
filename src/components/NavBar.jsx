import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { useCart } from './CartContext';

function NavBar() {
    const { cart, clearCart, removeFromCart } = useCart();
    const [showModal, setShowModal] = useState(false);

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
    };

    const groupedCart = cart.reduce((acc, product) => {
        const existing = acc.find(item => item.name === product.name);
        if (existing) {
            existing.quantity += 1;
        } else {
            acc.push({ ...product, quantity: 1 });
        }
        return acc;
    }, []);

    const handleCheckout = () => {
        const total = calculateTotal();
        const productList = groupedCart.map(product => `${product.name} (x${product.quantity}) - R$ ${product.price.toFixed(2)}`).join('\n'); // Trocar '%0A' por '\n'
        const message = `Seu carrinho:\n${productList}\n\nTotal: R$ ${total}`;
        const whatsappUrl = `https://wa.me/5581993964043?text=${encodeURIComponent(message)}`;
    
        window.open(whatsappUrl, '_blank');
        setShowModal(false);
    };    

    return (
        <nav className="navbar fixed-top navbar-expand-lg bg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-three-dots text-light fs-1"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/"><i className="bi bi-house"></i> Início</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/produtos"><i className="bi bi-shop-window"></i> Produtos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sobre-nos"><i className="bi bi-person-circle"></i> Sobre mim</a>
                        </li>
                    </ul>
                </div>

                {/* Cart icon with badge */}
                <div className="d-flex align-items-center">
                    <div onClick={() => setShowModal(true)} style={{ cursor: 'pointer', position: 'relative' }}>
                        <i className="bi bi-cart cart-icon"></i>
                        {cart.length > 0 && (
                            <span className="cart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cart.length}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={!showModal}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Carrinho de Compras</h5>
                            <button type="button" className="btn btn-danger" onClick={() => setShowModal(false)}><i className="bi bi-x"></i></button>
                        </div>
                        <div className="modal-body">
                            {groupedCart.length === 0 ? (
                                <p>Seu carrinho está vazio.</p>
                            ) : (
                                <>
                                    <ul className="list-group">
                                        {groupedCart.map((product, index) => (
                                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                                {`${product.name} (x${product.quantity})`}
                                                <div>
                                                    <span className="badge bg-buttons rounded-pill">R$ {(product.price * product.quantity).toFixed(2)}</span>
                                                    <button className="btn btn-danger btn-sm ms-2" onClick={() => removeFromCart(cart.findIndex(item => item.name === product.name))}><i className="bi bi-x"></i></button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-3">
                                        <strong>Total: R$ {calculateTotal()}</strong>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="modal-footer">
                            {groupedCart.length > 0 && (
                                <>
                                    <button type="button" className="btn btn-secondary" onClick={clearCart}>Limpar Carrinho</button>
                                    <button type="button" className="btn btn-success" onClick={handleCheckout}>Finalizar Compra</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
