import React from "react";
import { Link } from "react-router-dom";

const Card = ({ _id, name, hp, attack, types, images, defense, speed }) => {
  return (
    <div>
      <Link to={`/home/pokemon/${_id}`}>
        <h3>{name.toUpperCase()}</h3>
        <img src={images[0]} alt="img not found" width="200px" height="250px" />
      </Link>
        <h5>VIDA: {hp}</h5>
        <h5>ATAQUE: {attack}</h5>
        <h5>DEFENSA: {defense}</h5>
        <h5>VELOCIDAD: {speed}</h5>
        <h4>
          TIPOS:{" "}
          {types.map((el) => (
            <label>{el + " "}</label>
          ))}
        </h4>
      
    </div>
  );
};

export default Card;
