const express = require("express");
const Cart = require("../models/Cart");
const router = express.Router();

// GET cart for user
router.get("/:userId", async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId }).populate("items.bookId");
  res.json(cart || { items: [] });
});

// POST add item to cart
router.post("/:userId", async (req, res) => {
  let cart = await Cart.findOne({ userId: req.params.userId });
  if (!cart) {
    cart = new Cart({ userId: req.params.userId, items: [] });
  }
  cart.items.push(req.body);
  await cart.save();
  res.json(cart);
});

module.exports = router;
