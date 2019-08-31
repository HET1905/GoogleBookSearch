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
      <p className="clear"></p>
      <div className="row">
        <div className="col-sm-2 text-center">
          <img src={props.imgLink} className="bookImg" alt={props.title}></img>
        </div>
        <div className="col-sm-10">
        <p className="desc">{props.description}</p>
          <a href={props.link} className="clear">
            See the book
          </a>
        </div>
      </div>
      {/* <section>
        <img src={props.imgLink} className="bookImg" alt={props.title}></img>
        <p className="desc">{props.description}</p>
        <a href={props.link} className="clear">See the book</a>
      </section> */}
    </div>
  );
}

export default Result;
