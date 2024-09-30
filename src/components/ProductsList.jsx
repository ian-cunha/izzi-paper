import React, { useEffect, useState } from 'react';
import { db } from '../services/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useCart } from './CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, 'products');
      const productSnapshot = await getDocs(productsCollection);
      const productList = productSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productList);
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <div key={product.id} className="product-card">
            {product.image && <img src={product.image} alt={product.name} className="product-image" />}
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Preço: R$ {product.price.toFixed(2)}</p>
            <div className='buttons-product'>
              <button className="button add-to-cart" onClick={() => addToCart(product)}>
                Adicionar ao Carrinho
              </button>
              <button className="button buy" onClick={() => alert(`Comprando ${product.name}`)}>
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
