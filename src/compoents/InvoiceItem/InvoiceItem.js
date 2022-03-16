import React from "react";
import moment from "moment";
import "./invoiceItem.css";
function InvoiceItem({ id, paymentDue, total, clientName, status }) {
  return (
    <div className="invoice-item grid">
      <div className="invoice-item-id h3-text-2">
        <span className="invoice-item-id-hashtag">#</span>
        {id}
      </div>

      <p className="invoice-item-name body-1-text">{clientName}</p>

      <div className="invoice-item-payment-due body-1-text">
        Due {moment(paymentDue).format("DD MMM YYYY")}
      </div>

      <div className="invoice-item-total h3-text-1">{total.toFixed(2)}</div>

      <div
        className={`invoice-item-status h3-text-2 capitalize flex ${status}`}
      >
        <p
          className={`invoice-status-indicator itemIndicator-status-${status}`}
        ></p>
        <p className="invoice-status-text">{status}</p>
      </div>
    </div>
  );
}

export default InvoiceItem;
