import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/products/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-3">Categories</h2>
      <div className="flex gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => navigate(`/products/${category}`)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
