import './product.scss';

const Product = ({ products }) => {
  return (
    <div className='product-list'>
      {products.length === 0 ? (
        <p>Don't found!</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className='product'>
            <h2>{product.name}</h2>
            <p>Price: {product.price} USD</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Product;
