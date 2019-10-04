import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Link className="navbar-brand" to="/">
        Google Search Book
      </Link>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/search">
            Search<span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/saved">
            Saved
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
