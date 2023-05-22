const { deleteAllSchema } = require("../utils/mongoUtils.js");
const Pokemon = require("../models/Pokemones.js");

const axios = require("axios");


module.exports = async function getAllPokemonesAPI() {
  await deleteAllSchema(Pokemon);

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20';

  let pokemonesAPI = await axios(url);
  pokemonesAPI = pokemonesAPI.data.results;

  try {
    await Promise.all(
      pokemonesAPI.map(async (el) => {
        let pokemonDetail = await axios(el.url);
        let pokemon = new Pokemon({
          Name: pokemonDetail.data.name.toLowerCase(),
          Height: pokemonDetail.data.height,
          Weight: pokemonDetail.data.weight,
          Life: pokemonDetail.data.stats[0].base_stat,
          Attack: pokemonDetail.data.stats[1].base_stat,
          Defense: pokemonDetail.data.stats[2].base_stat,
          Speed: pokemonDetail.data.stats[3].base_stat,
          Types: pokemonDetail.data.types.map((el) => {
            return el.type.name;
          }),
          Image: pokemonDetail.data.sprites.other.home.front_default
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
