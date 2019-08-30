import React from "react";
import "./result.css"

function Result(){
    return(
        <div id="resultDiv">
            <h2>Results</h2>
        
        <div id="resultItem">
            <h2>Book Name</h2>
            <h3>Author Name</h3>
            <div className="btnGroup" >
                <button className="btn btn-primary">View</button>
                <button className="btn btn-primary">Save</button>
            </div>
            <section>
                <p>Img Holder Div</p>
                <p>Text about book</p>
            </section>
        </div>

        </div>
    );

}

export default Result;


