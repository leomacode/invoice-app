import React from "react";
import { arrowLeft } from "../../assets";
import "./goBack.css";

function GoBack({ handleInvoice }) {
  return (
    <div onClick={handleInvoice} className="go-back-btn flex">
      <img src={arrowLeft} alt="arrow left" />
      <span className="go-back-btn-text h3-text-2 capitalize ">go back</span>
    </div>
  );
}

export default GoBack;
