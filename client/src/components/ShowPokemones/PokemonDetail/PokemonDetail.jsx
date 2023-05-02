import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPokemonByID } from "../../../redux/actions";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

import LoadingForPages from "../../Loading/LoadingForPages";

import s from "./PokemonDetail.module.css";

const PokemonDetail = (props) => {
  const dispatch = useDispatch();
  const params = useParams();

  const pokemon = useSelector((state) => state.pokemonDetail);

  useEffect(() => {
    dispatch(getPokemonByID(params.id));
  }, [dispatch]);

  return (
    <div>
      {Object.keys(pokemon).length ? (
        <div className={s.background}>
          <div className={s.divBtn}>
            <Link to="/home/pokemones">
              <button>GO BACK</button>
            </Link>
          </div>

          <div className={s.container}>
            <h1 className={s.title}>{pokemon.Name.toUpperCase()}</h1>
            {pokemon.Images.map((e) => (
              <img src={e} alt="img not found"  className={s.image}/>
            ))}

            <div className={s.stats}> 
              <h4>ATTACK: <span>{pokemon.Attack}</span></h4>
              <h4>DEFENSE: <span>{pokemon.Defense}</span></h4>
              <h4>SPEED: <span>{pokemon.Speed}</span></h4>
              <h4>LIFE: <span>{pokemon.Life}</span></h4>
              <h4>HEIGHT: <span>{pokemon.Height}</span></h4>
              <h4>WEIGHT: <span>{pokemon.Weight}</span></h4>
            </div>
          </div>
        </div>
      ) : (
        <LoadingForPages />
      )}
    </div>
  );
};

export default PokemonDetail;
