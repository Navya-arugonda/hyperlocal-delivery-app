const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const products = [
  {
    name: "Apple",
    description: "Fresh red apples",
    price: 1.5,
    imageUrl: "https://example.com/apple.jpg",
    category: "Fruits",
  },
  {
    name: "Milk",
    description: "Organic full-cream milk",
    price: 2.0,
    imageUrl: "https://example.com/milk.jpg",
    category: "Dairy",
  },
];

const seedProducts = async () => {
  try {
    console.log("🟡 Deleting existing products...");
    await Product.deleteMany({});

    console.log("🟢 Inserting new products...");
    await Product.insertMany(products);

    console.log("✅ Products added successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error seeding products:", error);
    mongoose.connection.close();
  }
};

// Run the function
seedProducts();
