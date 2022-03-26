import React from "react";
import "./actionBar.css";
import { FilterDropDown, AddNewButton } from "..";

function ActionBar({ invoices }) {
  return (
    <div className="action-bar flex">
      <div className="action-bar-title capitalize">
        <h1 className="action-bar-title-text h1-text">invoices</h1>
        <p className="body-1-text">{invoices.length} invoices</p>
      </div>
      <FilterDropDown />
      <AddNewButton />
    </div>
  );
}

export default ActionBar;
