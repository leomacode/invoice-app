import React from "react";
import "./button.css";

function Button({ btnText, theme }) {
  return (
    <button className={`btn-2 capitalize body-1-text ${theme}`}>
      {btnText}
    </button>
  );
}

export default Button;
