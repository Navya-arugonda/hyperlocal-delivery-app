const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
  try {
    let filter = {};

    if (req.query.category) {
      filter.category = req.query.category; // Filter by category if provided
    }

    const products = await Product.find(filter);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products", error: err });
  }
});

// GET all unique product categories
router.get("/categories", async (req, res) => {
  try {
    const categories = await Product.distinct("category");
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: "Error fetching categories", error: err });
  }
});

// POST a new product
router.post("/", async (req, res) => {
  const { name, description, price, imageUrl, category } = req.body;

  try {
    const newProduct = new Product({
      name,
      description,
      price,
      imageUrl,
      category,
    });

    await newProduct.save();
    res.status(201).json({ message: "Product added successfully", newProduct });
  } catch (err) {
    res.status(500).json({ message: "Error adding product", error: err });
  }
});

module.exports = router;
