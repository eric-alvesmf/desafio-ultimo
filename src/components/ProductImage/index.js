import './styles.css';

function ProductImage({ image, size }) {
  const sizeProductImage = size || 342;

  return (
    <img
      src={image}
      alt="productimage"
      className='product-image'
      style={{ width: `${sizeProductImage}px`, height: `${sizeProductImage}px` }}
    />
  )
}
export default ProductImage;