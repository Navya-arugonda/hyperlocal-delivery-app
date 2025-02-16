import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children, data }) => {
  const [products, setProducts] = useState(data || []);

  useEffect(() => {
    setProducts(data);
  }, [data]); // Update context when data changes

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
