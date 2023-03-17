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
          
          <h1>Nombre: {pokemon.name}</h1>
          {pokemon.images.map((e) => (
            <img src={e} alt="img not found" width="200px" height="250px" />
          ))}
          <h2>Habilidades:</h2>
          {pokemon.abilities.map((e) => (
            <h3>{e}</h3>
          ))}
          <h4>Ataque: {pokemon.attack}</h4>
          <h4>Defensa: {pokemon.defense}</h4>
          <h4>Velocidad: {pokemon.speed}</h4>
          <h4>Vida: {pokemon.hp}</h4>
          <h4>Altura: {pokemon.height}</h4>
          <h4>Peso: {pokemon.weight}</h4>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default PokemonDetail;
