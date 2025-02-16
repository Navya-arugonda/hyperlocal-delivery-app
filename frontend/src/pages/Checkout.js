// frontend/src/pages/Checkout.js
import React, { useState } from "react";
import axios from "axios";

const Checkout = () => {
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const handleCheckout = () => {
    const orderData = {
      userId: "user-id", // This should be dynamically passed
      products: ["product-id-1", "product-id-2"], // Example product IDs
      totalPrice: 100, // Example total price
      deliveryAddress,
    };

    axios
      .post("http://localhost:5001/api/orders", orderData)
      .then((response) => alert("Order placed successfully!"))
      .catch((err) => console.error("Error placing order", err));
  };

  return (
    <div>
      <h1>Checkout</h1>
      <input
        type="text"
        placeholder="Delivery Address"
        value={deliveryAddress}
        onChange={(e) => setDeliveryAddress(e.target.value)}
      />
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
};

export default Checkout;
