import React from "react";
import { cardsData } from "../../Utils/index.js";

import s from "./DataCards.module.css";

const DataCards = () => {
  
  return (
    <>
      {cardsData.map((e) => (
        <div className={s.card}>
          <h3>{e.name}</h3>
          <h4>
            Number: <span>{e.number}</span>
          </h4>
          <h4>
          Expiration date: <span>{e.caducity}</span>
          </h4>
          <h4>
            security code: <span>{e.secCode}</span>
          </h4>
        </div>
      ))}
    </>
  );
};

export default DataCards;
