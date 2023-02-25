import './styles.css';
import { useEffect } from 'react';
import { useState } from 'react';

import ProductImage from '../ProductImage';

import { useNavigate } from 'react-router-dom';
// import api from '../../services/api';
import React from 'react';
import { loadProdutos } from '../../utils/requisitions';



function ProductCard({ product }) {
  // const navigate = useNavigate();


  // function handleDetailproduct() {
  //   navigate(`/product/${product.id}`)
  // }

  return (
    <div
      className='product-card'
    // onClick={handleDetailproduct}
    >
      <ProductImage image={"https://desafiocuboseric.s3.us-east-005.backblazeb2.com/" + product.imagem} />

      <div className="product-text">
        <h1 className='product-name'>{product.nome}</h1>
        <h1 className='product-value'>R${product.preco}</h1>
      </div>

    </div>
  )
}

export default ProductCard;

// "https://desafiocuboseric.s3.us-east-005.backblazeb2.com/produtos/4/camisa-polo.jpg"