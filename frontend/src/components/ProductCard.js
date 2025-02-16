import React, { useEffect, useStatem, useContext } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { ProductsContext } from "../Context/ProductsContext";

const ProductCard = ({ product, category }) => {

  const styles = {
    card: {
      width: "250px",
      border: "1px solid #e0e0e0",
      borderRadius: "12px",
      overflow: "hidden",
      background: "#fff",
      boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s ease-in-out",
      position: "relative",
      textAlign: "center",
      textDecoration: "none", // Ensure the card doesn't have default link styling
    },
    cardHover: {
      transform: "scale(1.05)",
    },
    imageContainer: {
      width: "100%",
      height: "200px",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f8f8f8",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    discountBadge: {
      position: "absolute",
      top: "10px",
      left: "10px",
      background: "red",
      color: "white",
      padding: "5px 10px",
      fontSize: "12px",
      fontWeight: "bold",
      borderRadius: "5px",
    },
    info: {
      padding: "15px",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333",
      margin: "5px 0",
    },
    weight: {
      fontSize: "14px",
      color: "#777",
      marginBottom: "5px",
    },
    price: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#27ae60",
      marginBottom: "10px",
    },
    button: {
      background: "#ff6f00",
      color: "white",
      border: "none",
      padding: "10px 15px",
      fontSize: "14px",
      fontWeight: "bold",
      borderRadius: "5px",
      cursor: "pointer",
      width: "100%",
    },
    buttonHover: {
      background: "#e65100",
    },
  };

  return (
    <Link
      to={`/allproducts/${category}/${product.id}`} // Define the path including product ID
      style={{ textDecoration: "none" }} // Remove default link styling for the whole card
    >
      <div
        className="product-card"
        style={styles.card}
        onMouseOver={(e) => (e.currentTarget.style.transform = styles.cardHover.transform)}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {product.discount && <span style={styles.discountBadge}>{product.discount}% OFF</span>}
        <div style={styles.imageContainer}>
          <img src={product.img} alt={product.title} style={styles.image} />
        </div>
        <div style={styles.info}>
          <h3 style={styles.title}>{product.title}</h3>
          <p style={styles.weight}>{product.weight}g</p>
          <p style={styles.price}>${product.price}</p>
          <button
            style={styles.button}
            onMouseOver={(e) => (e.currentTarget.style.background = styles.buttonHover.background)}
            onMouseOut={(e) => (e.currentTarget.style.background = styles.button.background)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
