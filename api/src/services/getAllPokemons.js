const { deleteAllSchema } = require("../utils/mongoUtils.js");
const Pokemon = require("../models/Pokemones.js");

const axios = require("axios");


module.exports = async function getAllPokemones() {
  await deleteAllSchema(Pokemon);

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20';

  let pokemonesAPI = await axios(url);
  pokemonesAPI = pokemonesAPI.data.results;

  try {
    await Promise.all(
      pokemonesAPI.map(async (el) => {
        let pokemonDetail = await axios(el.url);
        let pokemon = new Pokemon({
          name: pokemonDetail.data.name,
          height: pokemonDetail.data.height,
          weight: pokemonDetail.data.weight,
          abilities: pokemonDetail.data.abilities.map((el) => {
            return el.ability.name;
          }),
          hp: pokemonDetail.data.stats[0].base_stat,
          attack: pokemonDetail.data.stats[1].base_stat,
          defense: pokemonDetail.data.stats[2].base_stat,
          speed: pokemonDetail.data.stats[3].base_stat,
          types: pokemonDetail.data.types.map((el) => {
            return el.type.name;
          }),
          images: [
            pokemonDetail.data.sprites.other.home.front_default,
            pokemonDetail.data.sprites.other.home.front_shiny,
          ],
        });
        pokemon.save().catch((err) => {
          console.log(err);
        });
      })
    );
    console.log("POKEMONES GUARDADOSS");
  } catch (error) {
    console.log(error);
  }
};
