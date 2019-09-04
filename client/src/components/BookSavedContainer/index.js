import React from "react";
import "./bookSavedContainer.css";
// import Result from "../Result";

function BookSavedContainer({children}){
    return(
        <div id="resultContainerDiv">
            <h2>Book Saved</h2>
            {children}
        </div>

    );
}

export default BookSavedContainer;
