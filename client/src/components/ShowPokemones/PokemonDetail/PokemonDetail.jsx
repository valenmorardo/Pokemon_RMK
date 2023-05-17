import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPokemonByIDAction } from "../../../redux/actions";
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
    dispatch(getPokemonByIDAction(params.id));
  }, [dispatch]);

  console.log(pokemon);

  return (
    <div>
      {!Object.keys(pokemon).length ? (
        <LoadingForPages />
      ) : pokemon.response === false ? (
        <h1> no se encontro el pokemon con ese ID</h1>
      ) : (
        <div className={s.background}>
          <div className={s.divBtn}>
            <Link to="/home/pokemones">
              <button>GO BACK</button>
            </Link>
          </div>

          <div className={s.container}>
            <h1 className={s.title}>{pokemon.pokemon.Name.toUpperCase()}</h1>

            <img
              src={pokemon.pokemon.Images}
              alt="img not found"
              className={s.image}
            />

            <div className={s.stats}>
              <h4>
                ATTACK: <span>{pokemon.pokemon.Attack}</span>
              </h4>
              <h4>
                DEFENSE: <span>{pokemon.pokemon.Defense}</span>
              </h4>
              <h4>
                SPEED: <span>{pokemon.pokemon.Speed}</span>
              </h4>
              <h4>
                LIFE: <span>{pokemon.pokemon.Life}</span>
              </h4>
              <h4>
                HEIGHT: <span>{pokemon.pokemon.Height}</span>
              </h4>
              <h4>
                WEIGHT: <span>{pokemon.pokemon.Weight}</span>
              </h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetail;


