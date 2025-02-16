import { createContext, useState, useEffect } from "react";
import Categories from "../components/Categories";

// Create the context with default values
export const ProductsContext = createContext();

export const ProductsProvider = ({ children, product,  category  }) => {
  const [products, setProducts] = useState(product || []);
  const [categories, setCategories] = useState(category || "");
  useEffect(() => {
    setProducts(product);
  }, [product]);

  useEffect(() => {
    setCategories(categories);
  }, [category]);


  return (
    <ProductsContext.Provider
      value={{
        products,
        categories,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
