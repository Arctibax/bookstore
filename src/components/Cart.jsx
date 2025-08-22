import React from "react";
import "../styles/cart.css";

const Cart = ({ cart, onRemoveFromCart }) => {
  if (cart.length === 0) {
    return <div style={{ padding: "20px" }}>🛒 Your cart is empty</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
          <span>{item.title} (x{item.quantity})</span>
          <span>{item.price}</span>
          <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
