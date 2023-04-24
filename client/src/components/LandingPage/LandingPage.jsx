import React from "react";
import { Link } from "react-router-dom";

import pokebola from "../../assets/landing/pokebolaGif.gif";
import s from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={s.background}>
      
      <div className={s.container}>
        <div className={s.divTitle}>
          <h1 className={s.title}>PokeDex</h1>
        </div>

        <div className={s.divTocar}>
          <h2 className={s.tocar}>Toca la pokebola para acceder</h2>

          <Link to="/home">
            <img src={pokebola} className={s.pokebola} alt="PokeBola" />
          </Link>
        </div>

        <div className={s.footer}>
          <h2>
            By{" "}
            <Link to="https://www.linkedin.com/in/valentin-morardo/"
             target="_blank"
             rel="noreferrer"
             aria-label="Linkedin">
              Valentin Morardo{" "}
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
