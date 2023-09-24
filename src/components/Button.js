import React from "react";

export default function Button(props) {
  return (
    <button className="btn btn-primary m-2" onClick={props.clickHandler}>
      {props.text}
    </button>
  );
}
