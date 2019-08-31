import React from "react";
import "./resultContainer.css";
// import Result from "../Result";

function ResultContainer({children}){
    return(
        <div id="resultContainerDiv">
            <h2>Results</h2>
            {children}
        </div>

    );
}

export default ResultContainer;
