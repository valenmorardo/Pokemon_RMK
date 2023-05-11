import React from "react";
import { Link } from "react-router-dom";

import s from "./Card.module.css";

const Card = ({ _id, Name, Life, Attack, Types, Images, Defense, Speed }) => {
  return (
    <div className={s.card}>
      <Link to={`/home/pokemon/${_id}`}>
        <h3 className={s.name}>{Name.toUpperCase()}</h3>
        <img src={Images} alt="img not found" className={s.image} />
        {/* <h4 className={s.statTitle}>
          DEFENSE: <span>{Defense}</span>
        </h4>
        <h4 className={s.statTitle}>
          ATTACK: <span>{Attack}</span>
        </h4>
        <h4 className={s.statTitle}>
          SPEED: <span>{Speed}</span>
        </h4>
        <h4 className={s.statTitle}>
          LIFE: <span>{Life}</span>
        </h4>

        <h4 className={s.types}>TYPES: </h4>

        <h4 className={s.types}>
          {Types.map((el) => (
            <span>{el.toUpperCase() + " "}</span>
          ))}
        </h4> */}
      </Link>
    </div>
  );
};

export default Card;
