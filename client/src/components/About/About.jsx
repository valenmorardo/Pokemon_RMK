import React from "react";
import { Link } from "react-router-dom";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import portfolio from "../../assets/about/portfolio.png";

import s from "./About.module.css";

const About = () => {
  return (
    <div className={s.background}>
      <div className={s.divBtn}>
        <Link to="/home">
          <button>GO BACK</button>
        </Link>
      </div>

      <div className={s.mainContainer}>
        <div className={s.title}>
          <h1>ABOUT...</h1>
        </div>

        <div className={s.text}>
          <p>
            Esta aplicacion es un remake de mi proyecto individual realizado y
            evaluado en SoyHenry Bootcamp. Decidi rehacerlo porque no estaba
            conforme con mi resultado en aquel momento. Ahora que tengo mejores
            conocimientos lo hago de vuelta con mas funcionalidades y mejor
            estructura y diseño.
          </p>
        </div>

        <div className={s.card}>
          <h1>Valentin Morardo</h1>
          <h3>Full Stack Developer</h3>
          <div className={s.divIcons}>
            <Link
              to="https://www.linkedin.com/in/valentin-morardo/"
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin"
            >
              <BsLinkedin className={s.icon} />
            </Link>
            <Link
              to="https://github.com/valenmorardo"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <BsGithub className={s.icon} />
            </Link>
            <Link to="mailto:valentin.morardo@gmail.com" aria-label="Email">
              <GrMail className={s.icon} />
            </Link>

            <Link
              to="https://valentin-morardo.vercel.app/"
              target="_blank"
              rel="noreferrer"
              aria-label="Portfolio"
            >
              <img src={portfolio} className={s.icon} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
