/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPokemonByIDAction } from "../../../redux/actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import LoadingForPages from "../../Loading/LoadingForPages";

import s from "./PokemonDetail.module.css";


const PokemonDetail = (props) => {
  const dispatch = useDispatch();
  const params = useParams();

  const pokemonDetailDATA = useSelector((state) => state.pokemonDetail);
  const pokemon = pokemonDetailDATA.pokemon;

  useEffect(() => {
    dispatch(getPokemonByIDAction(params.id));
  }, [dispatch]);

  return (
    <div className={s.background}>
      <div className={s.divBtn}>
        <Link to="/home/pokemones">
          <button>GO BACK</button>
        </Link>
      </div>

      <div className={s.mainContainer}>
        {pokemonDetailDATA && !Object.keys(pokemonDetailDATA).length ? (
          <LoadingForPages />
        ) : (pokemonDetailDATA && pokemonDetailDATA.status === 404) ||
          (pokemonDetailDATA && pokemonDetailDATA.status === 500) ? (
          <div className={s.errorContainer}>
            <h1>No Pokémon was found with that ID.</h1>
          </div>
        ) : pokemonDetailDATA && pokemonDetailDATA.status === 200 ? (
          <div className={s.dataContainer}>
            <h1>{pokemon.Name.toUpperCase()}</h1>

            <img src={pokemon.Image} alt="img not found" />

            <div className={s.stats}>
              <h4>
                ATTACK: <span>{pokemon.Attack}</span>
              </h4>
              <h4>
                DEFENSE: <span>{pokemon.Defense}</span>
              </h4>
              <h4>
                SPEED: <span>{pokemon.Speed}</span>
              </h4>
              <h4>
                LIFE: <span>{pokemon.Life}</span>
              </h4>
              <h4>
                HEIGHT: <span>{pokemon.Height}</span>
              </h4>
              <h4>
                WEIGHT: <span>{pokemon.Weight}</span>
              </h4>
              <h4>
                TYPES:
                {pokemon?.Types.map((e) => (
                  <span className={s.typess}>{e.toUpperCase()}</span>
                ))}
              </h4>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PokemonDetail;
