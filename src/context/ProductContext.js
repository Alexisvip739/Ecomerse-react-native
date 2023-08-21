import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export function useProductContext() {
  return useContext(ProductContext);
}


export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => total + product.price, 0);
  };

  const contextValue = {
    products,
    addProduct,
    calculateTotal,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}
