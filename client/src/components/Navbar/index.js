import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Google Seach Book
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/serch">
              Seach 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/saved">
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}

export default Navbar;
