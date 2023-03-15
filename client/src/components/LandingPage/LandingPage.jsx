import React from "react";
import { Link } from "react-router-dom";
/* import styles from './LandingPage.module.css' */

const LandingPage = () => {
  return (
    <div>
      <h3>Toca el boton para ver los pokemones</h3>
      <Link to="/home">
        <button>HOME</button>
      </Link>
    </div>
  );
};

export default LandingPage;
