import React from "react";
import Card from "./Card";

import s from "./Cards.module.css";

const Cards = ({ pokemones }) => {
  return (
    <div className={s.container} id="cards">
      {pokemones?.map((el) => (
        <Card {...el} />
      ))}
    </div>
  );
};

export default Cards;
