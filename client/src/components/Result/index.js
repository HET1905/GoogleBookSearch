import React from "react";
import "./result.css";

function Result(props) {
  console.log(props);
  return (
    <div id="resultItem">
      <h3>{props.title}Title</h3>
      <h4>Author</h4>
      <div className="btnGroup">
        <button className="btn btn-primary">View</button>
        <button className="btn btn-primary">Save</button>
      </div>
      <section>
        <p>Img Holder Div</p>
        <p>Text about book</p>
      </section>
    </div>
  );
}

export default Result;
