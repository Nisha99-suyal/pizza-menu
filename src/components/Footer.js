import React from "react";
import Order from "./Order";

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closedHour = 24;
  const IsOpen = hour >= openHour && hour <= closedHour;
  return (
    <div className="footer">
      {IsOpen ? (
        <Order closedHour={closedHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closedHour}:00.
        </p>
      )}
    </div>
  );
}
