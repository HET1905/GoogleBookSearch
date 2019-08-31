import React from "react";
import "./result.css";

function Result(props) {
  console.log(props);
  return (
    <div id="resultItem">
      <h3>Title : {props.title}</h3>
      <h4>Author : {props.author}</h4>
      <div className="btnGroup">
        <button className="btn btn-primary">View</button>
        <button className="btn btn-primary">Save</button>
      </div>
      <section>
        <p>Img Holder Div</p>
        <p>{props.description}</p>
        <p>{props.link}</p>
      </section>
    </div>
  );
}

export default Result;
