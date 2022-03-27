import React from "react";
import "./invoiceItemStatus.css";
function InvoiceItemStatus({ status }) {
  return (
    <div className={`invoice-item-status h3-text-2 capitalize flex ${status}`}>
      <p
        className={`invoice-status-indicator itemIndicator-status-${status}`}
      ></p>
      <p className="invoice-status-text">{status}</p>
    </div>
  );
}

export default InvoiceItemStatus;
