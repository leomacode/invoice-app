import React from "react";
import "./noInvoice.css";
import { noInvoice } from "../../assets";

function NoInvoice() {
  return (
    <div className="no-invoice">
      <img src={noInvoice} alt="no-invoice" className="no-invoice-img" />

      <h2 className="no-invoice-title h2-text">There is nothing here</h2>

      <p className="no-invoice-text body-1-text">
        Create an invoice by clicking the
        <b> New </b>
        button and get started
      </p>
    </div>
  );
}

export default NoInvoice;
