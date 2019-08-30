import React from "react";
import "./result.css";

function Result(props) {
  return (
    <div id="resultDiv">
      <h2>Results</h2>

      <div id="resultItem">
            {console.log( props.bookData)}
           
          {/* {props.bookData.map(book => (
            <li key={book} className="list-group-item">
              <h2>{book.volumeInfo}</h2>
              <img alt="Dog" src={result} className="img-fluid" />
            </li>
          ))} */}
      
        {/* let listItem = {props.bookData.map(book=>{
          return(
         <h1>{book.volumeInfo.title}</h1>
          );
        })} */}

        <h3>Author Name</h3>
        <div className="btnGroup">
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
