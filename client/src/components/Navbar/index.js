import React from "react";


function Navbar() {
  return (
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">
        Google Seach Book
      </a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/serch">
              Seach 
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/saved">
              Saved
            </a>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}

export default Navbar;
