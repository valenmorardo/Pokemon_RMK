import React from "react";
import { Link } from "react-router-dom";

const Card = ({ _id, Name, Life, Attack, Types, Images, Defense, Speed }) => {
  return (
    <div>
      <Link to={`/home/pokemon/${_id}`}>
        <h3>{Name.toUpperCase()}</h3>
        <img src={Images[0]} alt="img not found" width="200px" height="250px" />
      </Link>
        <h5>VIDA: {Life}</h5>
        <h5>ATAQUE: {Attack}</h5>
        <h5>DEFENSA: {Defense}</h5>
        <h5>VELOCIDAD: {Speed}</h5>
        <h4>
          TIPOS:{" "}
          {Types.map((el) => (
            <label>{el + " "}</label>
          ))}
        </h4>
      
    </div>
  );
};

export default Card;
