const express = require("express");
const Book = require("../models/Book");
const router = express.Router();

// GET all books
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// POST add a new book
router.post("/", async (req, res) => {
  const newBook = new Book(req.body);
  await newBook.save();
  res.json(newBook);
});

module.exports = router;
