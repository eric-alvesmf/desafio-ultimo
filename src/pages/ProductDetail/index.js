import './styles.css';
import Header from '../../components/Header';

import ProductImage from '../../components/ProductImage';  //ok!
import { products } from '../../data';  // Está mocado TROCAR

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [allProducts, setAllProducts] = useState([...products]);
  const [currentProduct, setCurrentProduct] = useState({});


  useEffect(() => {
    const findProduct = allProducts.find((product) => product.id === parseInt(id, 10));

    if (!findProduct) {
      return;
    }

    setCurrentProduct(findProduct);
  }, []);

  return (
    <div className='container container-product-detail'>
      <Header showBack />

      <div className='product-detail'>
        <ProductImage image={currentProduct.productimage} />
        <h1>{currentProduct.name}</h1>
        <span>{currentProduct.stack}</span>

        <div className='horizontal-line'></div>

        <h3>Bio</h3>
        <p>{currentProduct.bio}</p>
      </div>
    </div>
  );
}

export default ProductDetail;