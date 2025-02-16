import React, { useState, useEffect } from "react";
import { logo } from "../assets";
import { BsBag, BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const TopNav = () => {
  const [userData, setUserData] = useState(null);
  const [cartItem, setCartItem] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const cart = JSON.parse(localStorage.getItem("cart"));

    setUserData(user);
    setCartItem(cart || []);

    const fetchProducts = async () => {
      const fetchedProducts = [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" },
      ];
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  let value = 0;
  let offerValue = 0;
  cartItem.forEach((el) => {
    offerValue += Number(el.price);
    value += Number(el.price2);
  });
  const finalAmount = offerValue;
  offerValue = value - offerValue;

  const id = userData?.uid;

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserData(null);
  };

  const handleProductSelect = (productID) => {
    setSelectedProduct(productID);
    navigate(`/products/${productID}`);
  };

  return (
    <div className="flex items-center justify-between space-x-4 bg-gray-800 text-white p-3 rounded-md">
      {/* Logo & Location */}
      <div className="flex items-center">
        <Link to="/">
          <h3>Logo</h3>
        </Link>
        <div className="h-6 w-[2px] bg-gray-500 rounded-xl mx-3"></div>
        <h2 className="text-sm md:text-base font-semibold">Location</h2>
      </div>

      {/* Home Link */}
      <Link to="/" className="text-sm md:text-base font-semibold">Home</Link>

      {/* Search Bar */}
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          className="w-full h-10 rounded-md px-10 bg-gray-700 text-white placeholder-gray-400 text-sm focus:outline-none"
          placeholder="Search..."
        />
        <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[18px]" />
      </div>

      {/* Product Selector */}
      <select
        className="bg-gray-700 text-white text-sm p-2 rounded-md"
        onChange={(e) => handleProductSelect(e.target.value)}
        value={selectedProduct || ""}
      >
        <option value="" disabled>Select Product</option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </select>

      {/* User & Cart Links */}
      <div className="flex items-center space-x-4">
        {!id ? (
          <>
            <Link to="/login" className="flex items-center text-sm font-semibold">
              <BiUser className="text-[16px] mr-1" /> Login
            </Link>
            <Link to="/signup" className="flex items-center text-sm font-semibold">
              <BiUser className="text-[16px] mr-1" /> Sign Up
            </Link>
          </>
        ) : (
          <Link to="/login" onClick={handleLogout} className="flex items-center text-sm font-semibold">
            <BiUser className="text-[16px] mr-1" /> Logout
          </Link>
        )}

        <Link to="/cart" className="flex items-center text-sm font-semibold">
          <BsBag className="text-[20px] mr-1" />
          {cartItem.length === 0 ? "Cart" : `${cartItem.length} - ₹${finalAmount}`}
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
