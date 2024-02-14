import React from "react";

export default function Pizza({ pizzas }) {
  return (
    <li className={`pizza ${pizzas.soldOut ? "sold-out" : ""}`}>
      <img src={pizzas.photoName} alt={pizzas.name} />
      <div>
        <h3>{pizzas.name}</h3>
        <p>{pizzas.ingredients}</p>
        <span>{`${pizzas.soldOut == true ? "SOLD OUT" : pizzas.price}`}</span>
      </div>
    </li>
  );
}
