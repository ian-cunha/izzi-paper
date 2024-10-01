import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Importa o PropTypes

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Tenta recuperar o carrinho do localStorage
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        // Salva o carrinho no localStorage sempre que ele muda
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prev) => [...prev, product]);
    };

    const removeFromCart = (index) => {
        setCart((prev) => prev.filter((_, i) => i !== index));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Adiciona a validação de propTypes
CartProvider.propTypes = {
    children: PropTypes.node.isRequired, // Valida que 'children' é obrigatório e do tipo 'node'
};

export const useCart = () => useContext(CartContext);
