import React, { useState } from "react";
import "./addNewButton.css";
import { useTextTitle } from "../../hooks";
import { plus } from "../../assets";
import { NewInvoice } from "..";

function AddNewButton() {
  const [addNew, setAddNew] = useState(false);
  return (
    <>
      <button
        onClick={() => setAddNew(!addNew)}
        data-add={addNew}
        className="action-bar-btn btn flex"
      >
        <img className="action-bar-btn-img" src={plus} alt="btn plus" />
        <p className="action-bar-btn-text body-1-text capitalize">
          {useTextTitle("new", "new invoice")}
        </p>
      </button>

      <NewInvoice visible={addNew} handleInvoice={() => setAddNew(!addNew)} />
    </>
  );
}

export default AddNewButton;
