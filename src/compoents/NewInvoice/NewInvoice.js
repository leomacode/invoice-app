import React from "react";
import { GoBack } from "..";
import "./newInvoice.css";
function NewInvoice({ visible, handleInvoice }) {
  return (
    <>
      <div data-visible={visible} className="new-invoice">
        <GoBack handleInvoice={handleInvoice} />
      </div>
      <div
        data-visible={visible}
        onClick={handleInvoice}
        className="new-invoice-overlay"
      ></div>
    </>
  );
}

export default NewInvoice;
