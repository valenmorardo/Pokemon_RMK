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
            This application is a remake of my individual project completed and
            evaluated during the SoyHenry Bootcamp. I decided to redo it because
            I wasn't satisfied with my previous result at that time. Now that I
            have better knowledge, I am recreating it with more functionalities,
            improved structure, and design.
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
              <img src={portfolio} className={s.icon} alt="portfolio"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
