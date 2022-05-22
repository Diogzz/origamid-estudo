import React from 'react';
import { ProductContext } from './ProductContext';

const Product = () => {
  const products = React.useContext(ProductContext);
  const productsReturn = products.productData;

  console.log(productsReturn);

  return (
    <div>
      {productsReturn && (
        <ul>
          {productsReturn.map((productIten) => (
            <li key={productIten.id}>{productIten.nome}</li>
          ))}
        </ul>
      )}

      <button onClick={products.handleClearProduct}>Limpar Lista</button>
    </div>
  );
};

export default Product;
