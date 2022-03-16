import React from "react";
import "./invoices.css";
import { ActionBar, InvoiceItem } from "../../compoents";
import useStore from "../../store";

function Invoices() {
  const invoices = useStore((state) => state.invoices);

  return (
    <div className="invoices container">
      <ActionBar />
      <div className="invoice-items-cantainer flex">
        {invoices.map(({ id, paymentDue, total, clientName, status }) => (
          <InvoiceItem
            key={id}
            id={id}
            paymentDue={paymentDue}
            total={total}
            clientName={clientName}
            status={status}
          />
        ))}
      </div>
    </div>
  );
}
export default Invoices;
