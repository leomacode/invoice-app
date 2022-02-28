import React from "react";
import "./dropDownOption.css";

function DropDownOption({ name }) {
  const handleClick = (e) => {
    console.log(e.target.checked);
  };

  return (
    <div className="drop-down-option flex">
      <input
        onClick={handleClick}
        className="drop-down-option-checkbox"
        type="checkbox"
        name={name}
        id={name}
      />
      <label
        className="drop-down-option-label h3-text-2 capitalize flex"
        htmlFor={name}
      >
        {name}
      </label>
    </div>
  );
}

export default DropDownOption;
