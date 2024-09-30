import React, { useEffect, useState } from 'react';
import { db } from '../services/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useCart } from './CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cartMessage, setCartMessage] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, 'products');
      const productSnapshot = await getDocs(productsCollection);
      const productList = productSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log(productList); // Para verificar a estrutura dos dados
      setProducts(productList);
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product && product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openPopup = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
    setQuantity(1);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProduct(null);
    setQuantity(1);
  };

  const handleAddToCart = (product) => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setCartMessage(`"${product.name}" adicionado ao carrinho! Quantidade: ${quantity}`);
    setTimeout(() => setCartMessage(''), 3000);
  };

  const handleBuy = (product) => {
    const message = `Estou interessado em comprar ${product.name} por R$ ${product.price.toFixed(2)}.`;
    const whatsappUrl = `https://wa.me/5581993964043?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    closePopup();
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Pesquisar produtos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card" onClick={() => openPopup(product)} style={{ cursor: 'pointer' }}>
            {product.image && <img src={product.image} alt={product.name} className="product-image" />}
            <h2 className='p-name'>{product.name || 'Produto sem nome'}</h2>
            <p className='price'>R$ {product.price.toFixed(2)}</p>
            <div className='buttons-product'>
              <button className="button add-to-cart" onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}>
                Adicionar ao Carrinho
              </button>
              <button className="button buy" onClick={(e) => { e.stopPropagation(); handleBuy(product); }}>
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>

      {isPopupOpen && selectedProduct && (
        <div className="popup">
          <div className="popup-content">
            <div className="popup-inner">
              {selectedProduct.image && (
                <img src={selectedProduct.image} alt={selectedProduct.name} className="popup-image" />
              )}
              <div className="popup-info">
                <h2 className='popup-title'>{selectedProduct.name}</h2>
                <p className='popup-price'>R$ {selectedProduct.price.toFixed(2)}</p>
                <p className='popup-description'>{selectedProduct.description}</p>
                <div className='quantity-controls'>
                  <button className="button" onClick={decreaseQuantity}>-</button>
                  <span>{quantity}</span>
                  <button className="button" onClick={increaseQuantity}>+</button>
                </div>
                <div className='popup-buttons'>
                  <button className="button add-to-cart" onClick={() => { handleAddToCart(selectedProduct); closePopup(); }}>
                    Adicionar ao Carrinho
                  </button>
                  <button className="button buy" onClick={() => handleBuy(selectedProduct)}>
                    Comprar
                  </button>
                </div>
                <button className="button close" onClick={closePopup}>
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {cartMessage && (
        <div className="cart-popup">
          {cartMessage}
        </div>
      )}
    </div>
  );
};

export default ProductList;
