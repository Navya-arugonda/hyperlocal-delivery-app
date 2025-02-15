import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      {/* Navbar Section */}
      <header>
        <div>
          {/* Welcome heading */}
          <h1>Welcome to Hyperlocal Delivery</h1>
          {/* Main Content Section */}
          <div>
            <h2>Browse our products and shop now!</h2>
            <Link to="/products">View Products</Link>
          </div>

          {/* Search Bar */}
          <div>
            <input type="text" placeholder="Search products..." />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.742a6 6 0 1 0-1.416 1.416l3.779 3.779a1 1 0 1 0 1.416-1.416l-3.779-3.779zM12 6a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
            </svg>
          </div>

          {/* Select Location Dropdown */}
          <select>
            <option>Select Location</option>
            <option>Location 1</option>
            <option>Location 2</option>
            <option>Location 3</option>
          </select>

          {/* Login Button */}
          <Link to="/login">Login</Link>

          {/* Cart Icon */}
          <div>
            <Link to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V1h1a1 1 0 0 1 .979 1.208l-1.356 7.979a1 1 0 0 1-.98.791H5.832a1 1 0 0 1-.98-.791L3.497 2.208A1 1 0 0 1 4.476 1H5.5V.5a.5.5 0 0 1 .5-.5zM4.5 2h7V1h-7v1zm-1.12 5h9.24L12.603 3H3.396l.98 4z" />
              </svg>
            </Link>
            {/* Cart Count */}
            <span>3</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
