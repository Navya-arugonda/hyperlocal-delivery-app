import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SingleProduct() {
  const { id, products } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(`https://zeptojson.onrender.com/${products}/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product?.title} to cart.`);
  };

  return (
    <div style={styles.page}>
      {product ? (
        <div style={styles.productSection}>
          {/* Left Side - Product Image */}
          <div style={styles.imageContainer}>
            <img src={product.img} alt={product.title} style={styles.image} />
          </div>

          {/* Right Side - Product Details */}
          <div style={styles.details}>
            <h1 style={styles.title}>{product.title}</h1>
            <p style={styles.price}>
              <strong style={styles.priceValue}>${product.price}</strong>
              {product.discount && (
                <span style={styles.discount}> -{product.discount}% OFF</span>
              )}
            </p>
            <p style={styles.weight}>Weight: {product.weight}g</p>

            {/* Quantity Selector */}
            <div style={styles.quantityContainer}>
              <label style={styles.quantityLabel}>Quantity:</label>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={styles.button}
              >
                -
              </button>
              <span style={styles.quantity}>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={styles.button}
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button onClick={handleAddToCart} style={styles.addToCartButton}>
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <h1>Loading product...</h1>
      )}
    </div>
  );
}

const styles = {
  page: {
    width: "50%",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: "20px",
  },
  productSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "50px",
    padding: "40px",
  },
  imageContainer: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "500px",
    height: "500px",
    objectFit: "contain",
  },
  details: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "400px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  price: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#e63946",
  },
  priceValue: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  discount: {
    marginLeft: "10px",
    color: "#2a9d8f",
    fontWeight: "bold",
  },
  weight: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "15px",
  },
  quantityContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  quantityLabel: {
    fontSize: "18px",
  },
  button: {
    fontSize: "18px",
    padding: "5px 10px",
    cursor: "pointer",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
  },
  quantity: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  addToCartButton: {
    backgroundColor: "#ff9900",
    color: "#fff",
    padding: "12px 20px",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    fontWeight: "bold",
  },
};

export default SingleProduct;
