import React from "react";
import "../styles/bookCard.css";

const BookCard = ({ book, onAddToCart }) => {
  return (
    <div className="book-card">
      <img src={`/img/${book.image}`} alt={book.title} />
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Price:</strong> {book.price}</p>
      <p className="genre">{book.genre}</p>
      <div className="btn-group">
        <button onClick={() => onAddToCart(book)}>Add to Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default BookCard;
