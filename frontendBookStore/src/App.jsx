import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import BookList from "./components/BookList";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Footer from "./components/Footer"; // ✅ Import Footer
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser).username);
    }
  }, []);

  const addToCart = (book) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === book.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...book, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <Router>
      <div className="app-container">
        <Header cart={cart} user={user} onLogout={handleLogout} />

        <nav style={{ padding: "10px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/cart" style={{ marginRight: "10px" }}>Cart</Link>
          {!user && <Link to="/login">Login</Link>}
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<BookList onAddToCart={addToCart} />} />
            <Route
              path="/cart"
              element={user ? <Cart cart={cart} onRemoveFromCart={removeFromCart} /> : <Navigate to="/login" />}
            />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
          </Routes>
        </div>

        <Footer /> {/* ✅ Footer always at bottom */}
      </div>
    </Router>
  );
}
