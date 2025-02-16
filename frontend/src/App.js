import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import SingleProduct from "./pages/SingleProduct";
import Dashboard from "./pages/Dashboard";
import TopNav from "./components/Topnav";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <TopNav /> {/* TopNav will stay fixed at the top */}

        {/* Page content will be below the top navigation bar */}
        <main className="mt-4"> {/* Margin-top to avoid overlap */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:category" element={<ProductPage />} />
            <Route path="/products/:category/:id" element={<SingleProduct />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
