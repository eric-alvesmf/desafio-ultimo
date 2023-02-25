import './styles.css';
import Header from '../../components/Header';
import { useEffect } from 'react';
import { loadProdutos } from '../../utils/requisitions';
import ProductCard from '../../components/ProductCard';  //OLHAR
import { useState } from 'react';
import { products } from '../../data';

function MainCards() {
  const [allProducts, setAllProducts] = useState([]);

  //---------------------------------------------------

  useEffect(() => {
    loadProdutos().then(response => {
      // arrayProducts.push(response)
      console.log(response)
      setAllProducts(response)
    });
  }, []);

  //----------------------------------------------------
  // 


  return (
    <div className='container main'>
      <Header />

      <div className='main-products'>
        {allProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
}

export default MainCards;

