const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

// Get all orders (Admin only)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Place an order
router.post("/", async (req, res) => {
  const { userId, products, total } = req.body;
  try {
    const order = new Order({ userId, products, total });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
