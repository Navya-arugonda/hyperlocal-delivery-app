import React, { useEffect, useState } from "react";
import AllCategories from "../components/AllCategories";
import { useParams, useSearchParams } from "react-router-dom";
import { ProductsProvider } from "../Context/ProductsContext";
import axios from "axios";
import CategoriesContent from "./CategoriesContent";

function AllProducts() {
  const { products: category } = useParams(); 
  const [productsData, setProductsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Make sure loading is set to true when switching categories
      try {
        const response = await axios.get(`https://zeptojson.onrender.com/${category}`);
        setProductsData(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
  
    if (category) {
      fetchProducts();
    }
  }, [category]);
  if (loading) return <p>Loading products...</p>;
  return (
    <ProductsProvider product={productsData} category = {category}>
      <AllCategories/>
      <CategoriesContent/>
    </ProductsProvider>
  );
}

export default AllProducts;
