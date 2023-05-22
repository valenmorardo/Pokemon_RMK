import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPokemonByIDAction } from "../../../redux/actions";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

import LoadingForPages from "../../Loading/LoadingForPages";

const PokemonDetail = (props) => {
  const dispatch = useDispatch();
  const params = useParams();

  const pokemonDetailDATA = useSelector((state) => state.pokemonDetail);
  const pokemon = pokemonDetailDATA.pokemon;

  useEffect(() => {
    dispatch(getPokemonByIDAction(params.id));
  }, [dispatch]);

  return (
    <div>
      {pokemonDetailDATA && !Object.keys(pokemonDetailDATA).length ? (
        <LoadingForPages />
      ) : pokemonDetailDATA &&
        !pokemonDetailDATA.pokemon?.length &&
        !pokemonDetailDATA.response ? (
        <h1> no se encontro el pokemon con ese ID</h1>
      ) : (
        <div>
          <div>
            <Link to="/home/pokemones">
              <button>GO BACK</button>
            </Link>
          </div>

          <div>
            <h1>{pokemon.Name.toUpperCase()}</h1>

            <img src={pokemon.Image} alt="img not found" />

            <div>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetail;
