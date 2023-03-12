const {deleteAllSchema} = require('../utils/mongoUtils.js')
const Pokemon = require('../models/Pokemones.js')

const axios = require('axios')

module.exports = async function getAllPokemones() {
    await deleteAllSchema(Pokemon);

    const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100";
    
    let pokemonesAPI = await axios(url);
    pokemonesAPI = pokemonesAPI.data.results;
    
    /*   const pokemonesQueVoyALlamarAPI = await Pokemon.find({}).then(
      async (pokemones) => {
        const namesPokemonesINDB = [];
        pokemones.map((pokemon) => {
          namesPokemonesINDB.push(pokemon.name);
        });
    
        const namesPokemonesAPI = pokemonesAPI.map((el) => {
          return el.name;
        });
    
        const pokemonesQueVoyALlamarAPI = _.difference(
          namesPokemonesAPI,
          namesPokemonesINDB
        );
    
        return pokemonesQueVoyALlamarAPI;
      }
    ); */
    
    /*   const result = pokemonesAPI.filter((el) => {
      return pokemonesQueVoyALlamarAPI.includes(el.name);
    }); */
    
    try {
        await Promise.all(
          pokemonesAPI.map(async (el) => {
            let pokemonDetail = await axios(el.url);
            let pokemon = new Pokemon({
              name: pokemonDetail.data.name,
              height: pokemonDetail.data.height,
              weight: pokemonDetail.data.weight,
              abilities: pokemonDetail.data.abilities,
              hp: pokemonDetail.data.stats[0].base_stat,
              attack: pokemonDetail.data.stats[1].base_stat,
              defense: pokemonDetail.data.stats[2].base_stat,
              speed: pokemonDetail.data.stats[3].base_stat,
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
}









