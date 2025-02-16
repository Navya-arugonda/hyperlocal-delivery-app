import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductCategoryPage = () => {
  const [categories, setCategories] = useState([
    "Fruits",
    "Vegetables",
    "Snacks",
    "Dairy",
  ]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (selectedCategory) {
      console.log("Fetching products for category:", selectedCategory); // Debug log
      axios
        .get(`/api/products/category/${selectedCategory}`)
        .then((response) => {
          console.log("Received products:", response.data); // Debug log
          setProducts(response.data);
          console.log("Products state updated:", response.data);
        })
        .catch((error) => {
          console.error("❌ Error fetching products:", error);
        });
    }
  }, [selectedCategory]);

  return (
    <div>
      <h1>Product Categories</h1>
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className="p-2 m-2 bg-blue-500 text-white rounded"
          >
            {category}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div>
          <h2>{selectedCategory} Products</h2>
          <div className="products">
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product._id} className="product-item">
                  <img src={product.imageUrl} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                </div>
              ))
            ) : (
              <p>No products available in this category</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCategoryPage;
