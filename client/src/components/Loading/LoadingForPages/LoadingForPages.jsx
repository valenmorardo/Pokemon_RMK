import React from "react";

import s from './LoadingForPages.module.css'
import cargandoGif from "../../../assets/home/cargandoGif.gif";

const LoadingForPages = () => {
  return (
    <div className={s.background}>

      <div className={s.container}>

        <img
          src={cargandoGif}
          className={s.gif}
          alt="no encontre la imagen"
        ></img>

        <h2 className={s.text}>LOADING...</h2>

      </div>

    </div>
  );
};

export default LoadingForPages;
