import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import SingleProduct from "./pages/SingleProduct";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage />} />
          {/* Products Routes */}
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:category" element={<ProductPage />} />{" "}
          {/* Category-based products */}
          <Route
            path="/products/:category/:id"
            element={<SingleProduct />}
          />{" "}
          {/* Single product based on id */}
          {/* Authentication Routes */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {/* Cart Route */}
          <Route path="/cart" element={<CartPage />} />
          {/* Not found Route */}
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
