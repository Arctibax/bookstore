const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  items: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
      quantity: Number
    }
  ]
});

module.exports = mongoose.model("Cart", cartSchema);
