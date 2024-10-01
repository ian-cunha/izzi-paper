import { useEffect, useState } from 'react';
import { db } from '../services/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productRef = doc(db, 'products', id);
      const productSnap = await getDoc(productRef);

      if (productSnap.exists()) {
        setProduct(productSnap.data());
      } else {
        console.log('Produto não encontrado!');
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Preço: R$ {product.price.toFixed(2)}</p>
      {product.image && <img src={product.image} alt={product.name} className="product-image" />}
    </div>
  );
};

export default ProductDetail;
