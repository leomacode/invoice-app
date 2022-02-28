import React from "react";
import "./actionBar.css";
import { useTextTitle } from "../../hooks";
import { FilterDropDown } from "../";
import { plus } from "../../assets";
import useStore from "../../store";

function ActionBar() {
  const invoices = useStore((state) => state.invoices);
  return (
    <div className="action-bar flex">
      <div className="action-bar-title capitalize">
        <h1 className="action-bar-title-text h1-text">invoices</h1>
        <p className="body-1-text">There are {invoices.length} invoices</p>
      </div>

      <FilterDropDown />

      <button className="action-bar-btn btn flex">
        <img className="action-bar-btn-img" src={plus} alt="btn plus" />
        <p className="action-bar-btn-text body-1-text capitalize">
          {useTextTitle("new", "new invoice")}
        </p>
      </button>
    </div>
  );
}

export default ActionBar;
