import React from "react";


function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Google Seach Book
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/serch">
              Seach 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/saved">
              Saved
            </a>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}

export default Navbar;
