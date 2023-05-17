import React from "react";
import Card from "./Card";

const Cards = ({ pokemones }) => {

  console.log(pokemones)
  
  return (
    <>
      {pokemones?.map((el) => (
        <Card {...el} />
      ))}
    </>
  );
};

export default Cards;
