import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { arrowRight } from "../../assets";
import { InvoiceItemStatus } from "..";
import "./invoiceItem.css";

function InvoiceItem({ id, paymentDue, total, clientName, status }) {
  const invoiceData = { id, paymentDue, total, clientName, status };
  return (
    <Link
      to={`/invoices/${id}`}
      className="invoice-item grid"
      state={invoiceData}
    >
      <div className="invoice-item-id h3-text-2">
        <span className="invoice-item-id-hashtag">#</span>
        {id}
      </div>

      <div className="invoice-item-name body-1-text">{clientName}</div>

      <div className="invoice-item-payment-due body-1-text">
        Due {moment(paymentDue).format("DD MMM YYYY")}
      </div>

      <div className="invoice-item-total h3-text-1">${total.toFixed(2)}</div>

      <div className="invoice-status-container">
        <InvoiceItemStatus status={status} />
      </div>

      <img className="invoice-item-arrow" src={arrowRight} alt="arrow-right" />
    </Link>
  );
}

export default InvoiceItem;
