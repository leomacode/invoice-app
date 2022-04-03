import React, { useState, useEffect } from "react";
import "./invoices.css";
import { ActionBar, InvoiceItem, NoInvoice } from "../../components";
import useStore from "../../store";
import { SearchTermsContext } from "../../Contexts";

function Invoices() {
  const [invoices, setInvoices] = useState(useStore((state) => state.invoices));
  const [displayItems, setDisplayItems] = useState(invoices);
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    let items = [...invoices];
    if (terms.length) {
      items = items.filter(({ status }) => terms.includes(status));
      setDisplayItems(items);
    } else {
      setDisplayItems(items);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [terms]);

  return (
    <div className="invoices container">
      <SearchTermsContext.Provider value={{ invoices, terms, setTerms }}>
        <ActionBar invoices={invoices} />
      </SearchTermsContext.Provider>
      <div className="invoice-items-cantainer flex">
        {invoices.length ? (
          displayItems.map(
            ({
              id,
              paymentDue,
              total,
              clientName,
              status,
              senderAddress,
              clientAddress,
              description,
              clientEmail,
            }) => (
              <InvoiceItem
                key={id}
                id={id}
                paymentDue={paymentDue}
                total={total}
                clientName={clientName}
                status={status}
                senderAddress={senderAddress}
                clientAddress={clientAddress}
                description={description}
                clientEmail={clientEmail}
              />
            )
          )
        ) : (
          <NoInvoice />
        )}
      </div>
    </div>
  );
}
export default Invoices;
