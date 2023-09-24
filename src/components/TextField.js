import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Alert from "./Alert";

export default function TextField(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUppercaseOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if (text.trim().length === 0) props.showAlert("No text entered", "danger");
    else props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowercaseOnClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if (text.trim().length === 0) props.showAlert("No text entered", "danger");
    else props.showAlert("Converted to lowercase", "success");
  };

  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    if (text.trim().length === 0) {
      props.showAlert("No text entered", "danger");
    } else props.showAlert("Speaking...", "success");
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    if (text.length === 0) props.showAlert("Nothing to clear", "danger");
    else props.showAlert("Text cleared", "success");
  };

  const handleTitleCase = () => {
    if (text.trim().length === 0) {
      props.showAlert("No text entered", "danger");
      return;
    }
    let words = text.split(" ");
    for (let i = 0; i < words.length; ++i) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    setText(words.join(" "));

    props.showAlert("Converted to Titlecase", "success");
  };

  let words =
    text.charAt(0) === "" ? text.split(" ").length - 1 : text.split(" ").length;

  return (
    <>
      <div className="container my-3">
        <div>
          <h1
            style={{
              color: props.mode === "dark" ? "white" : "#181818",
            }}
          >
            {props.heading}
          </h1>
          <textarea
            style={{
              color: props.mode === "dark" ? "white" : "#181818",
              background: props.mode === "dark" ? "#181818" : "white",
            }}
            type="text"
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          />
        </div>
        <Button
          text="Convert to Uppercase"
          clickHandler={handleUppercaseOnClick}
        />
        <Button
          text="Convert to Lowercase"
          clickHandler={handleLowercaseOnClick}
        />
        <Button text="Clear Text" clickHandler={handleClearText} />
        <Button text="Title Case" clickHandler={handleTitleCase} />
        <Button text="Speak" clickHandler={handleSpeak} />
      </div>

      <div className="container my-1">
        <h2
          style={{
            color: props.mode === "dark" ? "white" : "#181818",
          }}
        >
          Your text summary
        </h2>
        <p
          style={{
            color: props.mode === "dark" ? "white" : "#181818",
          }}
        >
          {words} words and {text.length} characters
        </p>
        <h2
          style={{
            color: props.mode === "dark" ? "white" : "#181818",
          }}
        >
          Preview
        </h2>
        <p
          style={{
            color: props.mode === "dark" ? "white" : "#181818",
          }}
        >
          {text.length === 0 ? "Type some text to start previewing!" : text}
        </p>
      </div>
    </>
  );
}
