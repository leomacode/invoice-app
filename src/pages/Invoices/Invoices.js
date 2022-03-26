import React, { useState, useEffect } from "react";
import "./invoices.css";
import { ActionBar, InvoiceItem } from "../../components";
import useStore from "../../store";
import { SearchTermsContext } from "../../Contexts";

function Invoices() {
  const [invoices, setInvoices] = useState(useStore((state) => state.invoices));
  const [displayItems, setDisplayItems] = useState(invoices);
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    if (terms.length) {
      const items = invoices.filter(({ status }) => terms.includes(status));
      setDisplayItems(items);
    } else {
      setDisplayItems(invoices);
    }
  }, [terms]);

  return (
    <div className="invoices container">
      <SearchTermsContext.Provider value={{ invoices, terms, setTerms }}>
        <ActionBar invoices={invoices} />
      </SearchTermsContext.Provider>
      <div className="invoice-items-cantainer flex">
        {displayItems.map(({ id, paymentDue, total, clientName, status }) => (
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
