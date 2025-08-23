import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = ({ cart, user, onLogout }) => {
  return (
    <header className="header">
      <h1>STORY VERSE</h1>
      <div className="header-info">
        {user ? (
          <>
            <span>👤 {user}</span>
            <Link to="/cart" style={{ marginLeft: "15px" }}>
              🛒 Cart ({cart.length})
            </Link>
            <button onClick={onLogout} style={{ marginLeft: "10px" }}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
