import React from "react";
import "./button.css";

function Button({ btnText, theme }) {
  return (
    <button className={`btn capitalize body-1-text ${theme}`}>{btnText}</button>
  );
}

export default Button;
