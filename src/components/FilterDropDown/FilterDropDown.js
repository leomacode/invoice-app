import React from "react";
import { DropDownOption } from "..";
import { useTextTitle } from "../../hooks";
import { arrowDown } from "../../assets";
import "./filterDropDown.css";
const dropDownOptions = ["draft", "pending", "paid"];
function FilterDropDown({ dropdownOpen, setDropdownOpen }) {
  return (
    <div className="filter-drop-down flex">
      <div
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="filter-drop-down-menu flex"
        data-visible={dropdownOpen}
      >
        <span className="filter-drop-down-text h3-text-2 capitalize">
          {useTextTitle("filter", "filter by status")}
        </span>
        <img
          className="filter-drop-down-icon"
          src={arrowDown}
          alt="filter arrow"
        />
      </div>

      {dropdownOpen && (
        <div className="filter-drop-down-selection flex">
          {dropDownOptions.map((option) => (
            <DropDownOption key={option} name={option} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterDropDown;
