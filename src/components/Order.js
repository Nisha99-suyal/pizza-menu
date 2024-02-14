import React from "react";

export default function Order({ closedHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closedHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
