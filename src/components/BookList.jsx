import React, { useState } from "react";
import BookCard from "./BookCard";
import books from "../bookData";
import SearchBar from "./SearchBar";
import FilterSection from "./FilterSection";
import "../styles/catalogue.css";

const BookList = ({ onAddToCart }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = [...new Set(books.map((book) => book.genre))];

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesGenre =
      selectedGenre === "All" || book.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FilterSection
        genres={genres}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
          ))
        ) : (
          <p style={{ padding: "20px" }}>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BookList;
