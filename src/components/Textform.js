import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("uppercase wase clicked "  + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Convert to Uppercase", "success");
  };

  const handleOnClick = (event) => {
    //  console.log("on change")
    setText(event.target.value);
  };

  const handleLoClick = () => {
    let va = text.toLowerCase();
    setText(va);
    props.showAlert("Convert to Lowercase", "success");
  };

  const clear = () => {
    let remove = "";
    setText(remove);
    props.showAlert(" Remove text", "success");
  };

  const trimmm = () => {
    let tr = text.trim();
    setText(tr);
    props.showAlert(" Trim text", "success");
  };

  const copy = () => {
    let text = document.getElementById("box");
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Copy text", "success");
  };

  const removeSpace = () => {
    let newtext = text.split(/[  ]+/);
    setText(newtext.join(" "));
    props.showAlert(" Remove ExtraSpaces ", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        style={{
          color: props.navMode === "light" ? "black" : "orange",
          margin: "0 auto",
          width: "90%",
        }}
      >
        <h1 className="mb-2 mx-3 text-center underline">{props.heading} </h1>
        <div className="my-3 mx-3 card-body">
          <textarea
            id="box"
            rows="5"
            cols="50"
            className="form-control"
            value={text}
            onChange={handleOnClick}
            style={{
              backgroundColor:
                props.navMode === "light" ? "white" : "#a4a78e99",
              color: props.navMode === "dark" ? "orange" : "blue",
              border:
                props.navMode === "dark"
                  ? "1px solid orange"
                  : "1px solid blue",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-red m-2 "
          onClick={handleUpClick}
        >
          covert to uppercase{" "}
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary m-2 "
          onClick={handleLoClick}
        >
          covert to lowercase{" "}
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary m-2"
          onClick={clear}
        >
          remove text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success m-2"
          onClick={trimmm}
        >
          trim text
        </button>
        <button className="btn btn-info m-2" onClick={copy}>
          copy text
        </button>
        <button className="btn btn-dark m-2" onClick={removeSpace}>
          remove extra spaces
        </button>
        <div
          className="my-3"
          style={{ color: props.navMode === "dark" ? "white" : "black" }}
        >
          <h1 style={{ color: props.navMode === "dark" ? "orange" : "black" }}>
            Your text summary
          </h1>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          <p>
            {0.008 *
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            Minutes read
          </p>
          <h2 style={{ color: props.navMode === "dark" ? "orange" : "black" }}>
            Preview
          </h2>
          <p className="text-break" width="100px">
            {text.length > 0 ? text : "Enter Something To Preview It Here"}
          </p>
        </div>
      </div>
    </>
  );
}
