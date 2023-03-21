import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPokemonByID } from "../../../redux/actions";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const PokemonDetail = (props) => {
  const dispatch = useDispatch();
  const params = useParams();

  const pokemon = useSelector((state) => state.pokemonDetail);

  useEffect(() => {
    dispatch(getPokemonByID(params.id));
  }, [dispatch]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 900);
  }, [pokemon]);

  console.log(pokemon);

  return (
    <div>
      {!loading ? (
        <div>
          <Link to='/home/pokemones'>
            <button>Volver</button>
          </Link>
          
          <h1>Nombre: {pokemon.Name}</h1>
          {pokemon.Images.map((e) => (
            <img src={e} alt="img not found" width="200px" height="250px" />
          ))}
          <h2>Habilidades:</h2>
          {pokemon.Abilities.map((e) => (
            <h3>{e}</h3>
          ))}
          <h4>Ataque: {pokemon.Attack}</h4>
          <h4>Defensa: {pokemon.Defense}</h4>
          <h4>Velocidad: {pokemon.Speed}</h4>
          <h4>Vida: {pokemon.Life}</h4>
          <h4>Altura: {pokemon.Height}</h4>
          <h4>Peso: {pokemon.Weight}</h4>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default PokemonDetail;
