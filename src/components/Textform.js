import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("uppercase wase clicked "  + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("this is uppercase", "success");
  };

  const handleOnClick = (event) => {
    //  console.log("on change")
    setText(event.target.value);
  };

  const handleLoClick = () => {
    let va = text.toLowerCase();
    setText(va);
  };

  const clear = () => {
    let remove = "";
    setText(remove);
  };

  const trimmm = () => {
    let tr = text.trim();
    setText(tr);
  };

  const copy = () => {
    let text = document.getElementById("box");
    navigator.clipboard.writeText(text.value);
  };

  const removeSpace = () => {
    let newtext = text.split(/[  ]+/);
    setText(newtext.join(" "));
  };

  const [text, setText] = useState("");
  return (
    <>
      <div style={{ color: props.navMode === "dark" ? "white" : "black" }}>
        <h1>{props.heading} </h1>
        <div className="my-3 card-body">
          <textarea
            id="box"
            rows="6"
            cols="145"
            value={text}
            onChange={handleOnClick}
            style={{
              backgroundColor: props.navMode === "dark" ? "#dad9e1" : "white",
              color: props.navMode === "dark" ? "black" : "blue",
              justifyContent: "center",
              
            }}
          ></textarea>
        </div>
        <button className="btn btn-light mx-2 " onClick={handleUpClick}>
          covert to uppercase{" "}
        </button>
        <button className="btn btn-primary mx-2 " onClick={handleLoClick}>
          covert to lowercase{" "}
        </button>
        <button className="btn btn-secondary mx-2" onClick={clear}>
          remove text
        </button>
        <button className="btn btn-success mx-2" onClick={trimmm}>
          trim text
        </button>
        <button className="btn btn-info mx-2" onClick={copy}>
          copy text
        </button>
        <button className="btn btn-dark mx-2" onClick={removeSpace}>
          remove extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.navMode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} min read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "enter something to preview it here"}</p>
      </div>
    </>
  );
}
