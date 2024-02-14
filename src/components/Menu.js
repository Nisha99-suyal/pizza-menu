import React from "react";
import Pizza from "./Pizza";
export default function Menu({ pizzaData }) {
  return (
    <>
      <div className="menu">
        <h2>Our Menu</h2>
        {pizzaData.length > 0 ? (
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delicious.
            </p>
            <ul className="pizzas">
              {pizzaData.map((pizzas) => (
                <Pizza pizzas={pizzas} />
              ))}
            </ul>
          </>
        ) : (
          <p>We're still working on our menu. Please come back later :)</p>
        )}
      </div>
    </>
  );
}
