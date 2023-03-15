import React from "react";
import Card from "./Card";

const Cards = ({ pokemones }) => {
  return (
    <div>
      {pokemones.map((el) => (
        <Card {...el} />
      ))}
    </div>
  );
};

export default Cards;
