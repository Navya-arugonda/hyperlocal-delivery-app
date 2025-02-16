import React, { useEffect, useState } from "react";
import AllCategories from "../components/AllCategories";
import { useParams, useSearchParams } from "react-router-dom";
import { ProductsProvider } from "../Context/ProductsContext";
import axios from "axios";
import AllCategoriesContent from "./AllCategoriesContent";

function AllProducts() {
  const { products: category } = useParams(); 
  const [productsData, setProductsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://zeptojson.onrender.com/${category}`);
        setProductsData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);
  if (loading) return <p>Loading products...</p>;
  return (
    <ProductsProvider data={productsData}>
      <AllCategories></AllCategories>
      <AllCategoriesContent></AllCategoriesContent>
    </ProductsProvider>
  );
}

export default AllProducts;
