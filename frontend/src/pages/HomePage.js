import React from "react";
import { Link } from "react-router-dom";
import ExploreByCategories from "../components/ExploreByCategories";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Hero Section */}
      <header className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Hyperlocal Delivery</h1>
        <p className="text-lg text-gray-600 mb-6">Browse our exclusive products and shop with ease!</p>
      </header>
      
      {/* Product Showcase */}
      <section className="w-full max-w-4xl mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Example Product */}
          <div className="bg-white p-6 shadow-md rounded-2xl">
            <img
              src="https://via.placeholder.com/300"
              alt="Product"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">Product Name</h2>
            <p className="text-gray-600 mt-2">Brief description of the product.</p>
            <Link
              to="/product-details"
              className="inline-block mt-4 px-6 py-2 text-white bg-blue-600 rounded-xl hover:bg-blue-700"
            >
              View Details
            </Link>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="w-full max-w-4xl mt-8">
        <ExploreByCategories />
      </section>
    </div>
  );
};

export default HomePage;
