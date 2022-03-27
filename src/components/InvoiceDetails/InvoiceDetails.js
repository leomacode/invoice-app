import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GoBack, InvoiceItemStatus, Button } from "..";
import "./invoiceDetails.css";
function InvoiceDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, paymentDue, total, clientName, status } = location.state;
  return (
    <div className="invoice-details container">
      <GoBack handleInvoice={() => navigate(-1)} />

      <div className="invoice-details-head">
        <div className="invoiceDetails-status">
          <p className="body-1-text capitalize">status</p>
          <InvoiceItemStatus status={status} />
        </div>

        <div className="invoiceStatus-buttons">
          <Button btnText="edit" theme="edit" />
          <Button btnText="delete" theme="delete" />
          <Button btnText="Mark as Paid" theme="mark-as-paid" />
        </div>
      </div>

      <div className="invoice-details-info"></div>
    </div>
  );
}

export default InvoiceDetails;
