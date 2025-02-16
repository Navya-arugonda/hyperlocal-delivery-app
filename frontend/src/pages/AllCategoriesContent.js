import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../Context/ProductsContext";
import ProductCard from "../components/ProductCard";
const AllCategoriesContent = () => {
  const { products } = useContext(ProductsContext);

  useEffect(() => {
    console.log("Updated Products Context:", products); // Ensure data updates correctly
  }, [products]);

  return (
    <div
      className="grid grid-cols-3 gap-2" // Reduced gap from 4 to 2 for closeness
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "8px", // Reduced gap to make cards closer
        marginTop: "20px",
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>

  );
};

export default AllCategoriesContent;
