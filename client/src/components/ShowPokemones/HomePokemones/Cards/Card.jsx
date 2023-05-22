import React from "react";
import { Link } from "react-router-dom";


const Card = ({ _id, Name, Image,}) => {
  return (
    <div >
      <Link to={`/home/pokemon/${_id}`}>
        <h3 >{Name.toUpperCase()}</h3>
        <img src={Image} alt="img not found"/>
      </Link>
    </div>
  );
};

export default Card;
