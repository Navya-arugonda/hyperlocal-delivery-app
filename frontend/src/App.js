import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import AllProducts from "./pages/AllProducts"
import SingleProduct from "./pages/SingleProduct";
function App() {
  return (
    
    <div className="App">
      
    <Router>
      <Routes>
      <Route path='/allproducts/:products' element={<AllProducts/>} />
      <Route path='/allproducts/:products/:id' element={
              <SingleProduct/>
            } />
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
