import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { cleanStatePostAction, getPokemonesAction,getTypesAction } from "../../redux/actions";

import s from "./Home.module.css"

const Home = () => {

  const dispatch = useDispatch();





  useEffect(() => {
    dispatch(cleanStatePostAction()); 
    dispatch(getPokemonesAction());
    dispatch(getTypesAction());
  },[])

  return (
    <div className={s.background}>

      <div className={s.container}>
        <Link to="/home/pokemones">
          <button className={s.verPokemones}><span className={s.textButton}>VER POKEMONES </span></button>
        </Link>

        <Link to="/home/creation">
          <button className={s.create}><span className={s.textButton}>CREATE POKEMON</span></button>
        </Link>

        <Link to="/home/donation">
          <button className={s.donate}><span className={s.textButton}>DONAR</span></button>
        </Link>

        <Link to="/home/about">
          <button className={s.about}> <span className={s.textButton}>ABOUT</span></button>
        </Link>

      </div>

    </div>
  );
};

export default Home;
