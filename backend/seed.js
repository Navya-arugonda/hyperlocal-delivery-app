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

const fruits = [
  {
    name: "Apple",
    description: "Fresh red apples",
    price: 1.5,
    imageUrl: "https://unsplash.com/photos/one-red-apple-CoqJGsFVJtM",
    category: "Fruits",
  },
  {
    name: "Banana",
    description: "Ripe yellow bananas",
    price: 0.5,
    imageUrl: "https://example.com/banana.jpg",
    category: "Fruits",
  },
  {
    name: "Orange",
    description: "Juicy orange citrus",
    price: 1.2,
    imageUrl: "https://example.com/orange.jpg",
    category: "Fruits",
  },
  {
    name: "Grapes",
    description: "Sweet and tangy grapes",
    price: 2.0,
    imageUrl: "https://example.com/grapes.jpg",
    category: "Fruits",
  },
  {
    name: "Pineapple",
    description: "Fresh tropical pineapples",
    price: 3.0,
    imageUrl: "https://example.com/pineapple.jpg",
    category: "Fruits",
  },
  {
    name: "Strawberry",
    description: "Fresh red strawberries",
    price: 2.5,
    imageUrl: "https://example.com/strawberry.jpg",
    category: "Fruits",
  },
  {
    name: "Watermelon",
    description: "Cool and refreshing watermelon",
    price: 4.0,
    imageUrl: "https://example.com/watermelon.jpg",
    category: "Fruits",
  },
  {
    name: "Blueberry",
    description: "Sweet blueberries for snacking",
    price: 3.5,
    imageUrl: "https://example.com/blueberry.jpg",
    category: "Fruits",
  },
  {
    name: "Peach",
    description: "Juicy and soft peaches",
    price: 2.2,
    imageUrl: "https://example.com/peach.jpg",
    category: "Fruits",
  },
  {
    name: "Mango",
    description: "Fresh tropical mangoes",
    price: 2.8,
    imageUrl: "https://example.com/mango.jpg",
    category: "Fruits",
  },
];

const vegetables = [
  {
    name: "Carrot",
    description: "Fresh crunchy carrots",
    price: 1.0,
    imageUrl: "https://example.com/carrot.jpg",
    category: "Vegetables",
  },
  {
    name: "Tomato",
    description: "Fresh red tomatoes",
    price: 1.2,
    imageUrl: "https://example.com/tomato.jpg",
    category: "Vegetables",
  },
  {
    name: "Lettuce",
    description: "Crisp green lettuce",
    price: 1.5,
    imageUrl: "https://example.com/lettuce.jpg",
    category: "Vegetables",
  },
  {
    name: "Cucumber",
    description: "Fresh and cool cucumbers",
    price: 0.8,
    imageUrl: "https://example.com/cucumber.jpg",
    category: "Vegetables",
  },
  {
    name: "Spinach",
    description: "Fresh green spinach leaves",
    price: 1.6,
    imageUrl: "https://example.com/spinach.jpg",
    category: "Vegetables",
  },
  {
    name: "Broccoli",
    description: "Fresh green broccoli",
    price: 2.0,
    imageUrl: "https://example.com/broccoli.jpg",
    category: "Vegetables",
  },
  {
    name: "Bell Pepper",
    description: "Fresh colorful bell peppers",
    price: 1.3,
    imageUrl: "https://example.com/bell-pepper.jpg",
    category: "Vegetables",
  },
  {
    name: "Potato",
    description: "Fresh brown potatoes",
    price: 1.0,
    imageUrl: "https://example.com/potato.jpg",
    category: "Vegetables",
  },
  {
    name: "Onion",
    description: "Fresh red onions",
    price: 0.7,
    imageUrl: "https://example.com/onion.jpg",
    category: "Vegetables",
  },
  {
    name: "Garlic",
    description: "Fresh garlic cloves",
    price: 0.5,
    imageUrl: "https://example.com/garlic.jpg",
    category: "Vegetables",
  },
];

const snacks = [
  {
    name: "Chips",
    description: "Crispy potato chips",
    price: 1.8,
    imageUrl: "https://example.com/chips.jpg",
    category: "Snacks",
  },
  {
    name: "Chocolate",
    description: "Smooth milk chocolate",
    price: 2.5,
    imageUrl: "https://example.com/chocolate.jpg",
    category: "Snacks",
  },
  {
    name: "Cookies",
    description: "Freshly baked chocolate chip cookies",
    price: 3.0,
    imageUrl: "https://example.com/cookies.jpg",
    category: "Snacks",
  },
  {
    name: "Pretzels",
    description: "Salty crunchy pretzels",
    price: 1.2,
    imageUrl: "https://example.com/pretzels.jpg",
    category: "Snacks",
  },
  {
    name: "Nuts",
    description: "Mixed nuts for snacking",
    price: 2.2,
    imageUrl: "https://example.com/nuts.jpg",
    category: "Snacks",
  },
  {
    name: "Granola Bar",
    description: "Healthy granola bars",
    price: 1.5,
    imageUrl: "https://example.com/granola-bar.jpg",
    category: "Snacks",
  },
  {
    name: "Popcorn",
    description: "Buttery popcorn",
    price: 1.0,
    imageUrl: "https://example.com/popcorn.jpg",
    category: "Snacks",
  },
  {
    name: "Fruit Snacks",
    description: "Healthy fruit snack packs",
    price: 2.0,
    imageUrl: "https://example.com/fruit-snacks.jpg",
    category: "Snacks",
  },
  {
    name: "Ice Cream",
    description: "Delicious ice cream in various flavors",
    price: 4.0,
    imageUrl: "https://example.com/ice-cream.jpg",
    category: "Snacks",
  },
  {
    name: "Cheese",
    description: "Assorted cheeses for snacking",
    price: 3.5,
    imageUrl: "https://example.com/cheese.jpg",
    category: "Snacks",
  },
];

const dairy = [
  {
    name: "Yogurt",
    description: "Smooth and creamy yogurt",
    price: 2.0,
    imageUrl: "https://example.com/yogurt.jpg",
    category: "Dairy",
  },
  {
    name: "Butter",
    description: "Fresh butter from cows",
    price: 1.5,
    imageUrl: "https://example.com/butter.jpg",
    category: "Dairy",
  },
  {
    name: "Cheese Slice",
    description: "Slices of cheese",
    price: 1.0,
    imageUrl: "https://example.com/cheese-slice.jpg",
    category: "Dairy",
  },
  {
    name: "Cottage Cheese",
    description: "Fresh cottage cheese",
    price: 2.8,
    imageUrl: "https://example.com/cottage-cheese.jpg",
    category: "Dairy",
  },
  {
    name: "Cream Cheese",
    description: "Soft and creamy cheese",
    price: 3.2,
    imageUrl: "https://example.com/cream-cheese.jpg",
    category: "Dairy",
  },
];

const seedProducts = async () => {
  try {
    console.log("🟡 Deleting existing products...");
    await Product.deleteMany({});

    console.log("🟢 Inserting fruits...");
    await Product.insertMany(fruits);

    console.log("🟢 Inserting vegetables...");
    await Product.insertMany(vegetables);

    console.log("🟢 Inserting snacks...");
    await Product.insertMany(snacks);

    console.log("🟢 Inserting dairy...");
    await Product.insertMany(dairy);

    console.log("✅ Products added successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error seeding products:", error);
    mongoose.connection.close();
  }
};

// Run the function
seedProducts();
