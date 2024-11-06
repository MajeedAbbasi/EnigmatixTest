import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Optional: Create a CSS file to style the navbar

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/" className="navbar-link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/app" className="navbar-link">
            App
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
