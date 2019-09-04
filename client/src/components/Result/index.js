import React from "react";
import "./result.css";

function Result(props) {
  // console.log(props);
  return (
    <div id="resultItem">
      <h3>Title : {props.title}</h3>
      <h4>Author : {props.author}</h4>
      <div className="btnGroup">
        <a href={props.link}>
          <button
            className="btn btn-primary"
           
          >
            View
          </button>
        </a>
        <button
          className="btn btn-primary"
          onClick={() =>
            props.onSaveClick(
              props.title,
              props.author,
              props.imgLink,
              props.description,
              props.link
            )
          }
        >
          Save
        </button>
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
    </div>
  );
}

export default Result;
