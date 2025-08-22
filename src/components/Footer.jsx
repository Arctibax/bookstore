import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} My Bookstore. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
