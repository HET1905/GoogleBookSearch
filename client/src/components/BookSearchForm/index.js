import React from "react";
import "./bookSerach.css";

function BookSerchForm(props){
    return(
        <div id="serachDiv">

            <h1>BookSerach</h1>
            <form>
                <input type="text" name="search" id="search" onChange={(e) => props.handleInputChange(e)} ></input>
                <button className="btn btn-primary btnSearch" onClick={(e)=>props.handleSearchClick(e)}>search</button>
            </form>
        </div>
        
    );
}

export default BookSerchForm;