import React from "react";

import cargandoGif from "../../assets/home/cargandoGif.gif";

import s from "./LoadingForPages.module.css";

const LoadingForPages = () => {
  return (
    <div className={s.background}>
      <div className={s.container}>
        <img
          src={cargandoGif}
          className={s.gif}
          alt="loading"
        ></img>

        <h2 className={s.text}>LOADING...</h2>
      </div>
    </div>
  );
};

export default LoadingForPages;
