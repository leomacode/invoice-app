import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GoBack, InvoiceItemStatus, Button } from "..";
import "./invoiceDetails.css";
function InvoiceDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    id,
    paymentDue,
    total,
    clientName,
    status,
    senderAddress,
    clientAddress,
    description,
    clientEmail,
  } = location.state;

  const { senderStreet, senderCity, senderCountry } = senderAddress;
  console.log(senderAddress);
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

      <div className="invoice-details-info">
        <div className="invoiceDetails-info-header">
          <div className="invoiceDetails-info-idDes">
            <div className="invoiceDetails-info-id h3-text-1">
              <span className="invoiceDetails-info-hash">#</span>
              {id}
            </div>
            <div className="invoiceDetails-info-description h3-text-2">
              {description}
            </div>
          </div>

          <div className="invoiceDetails-info-senderAddress"></div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceDetails;
