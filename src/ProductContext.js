import React from 'react';

export const ProductContext = React.createContext();

export const ProductStorage = ({ children }) => {
  let [productData, setproductData] = React.useState('');

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setproductData(json));
  }, []);

  function handleClearProduct() {
    setproductData(null); 
  }

  return (
    <ProductContext.Provider value={{ productData, handleClearProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
