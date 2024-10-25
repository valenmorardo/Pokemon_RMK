import React from "react";
import { Link } from "react-router-dom";

import s from "./Card.module.css";

const Card = ({ _id, Name, Image }) => {
  return (
    <div className={s.card}>
      <Link to={`/home/pokemon/${_id}`}>
        <h3 className={s.name}>{Name.toUpperCase()}</h3>
        <img className={s.image} src={Image} alt={Name + "Img"} width="75%" />
      </Link>
    </div>
  );
};

export default Card;
