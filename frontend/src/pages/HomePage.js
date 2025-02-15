import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Hyperlocal Delivery</h1>
      <p>Browse our products and shop now!</p>
      <Link to="/products">View Products</Link>
    </div>
  );
};

export default HomePage;
