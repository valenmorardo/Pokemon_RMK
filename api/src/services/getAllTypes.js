const { deleteAllSchema } = require("../utils/mongoUtils.js");
const Type = require("../models/Pokemones.js");

const axios = require("axios");


const endpoints = {
    pokemonesDeAPI: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
    pokemonByID: "https://pokeapi.co/api/v2/pokemon/:id",
    pokemonByNAME: "https://pokeapi.co/api/v2/pokemon/:name",
    typesPokemon: "https://pokeapi.co/api/v2/type",
    typesByName: "https://pokeapi.co/api/v2/type/name",
  };
  
  
  module.exports = async function getAllTypes() {
    await deleteAllSchema(Type);

    let types = await axios(endpoints.typesPokemon);
    types = types.data.results

    try {
        types.map((el) => {
            let newType = new Type({
                name: el.name
            });
            newType.save().catch((err) => {
                console.log(err)
            })
        })
    } catch (error) {
         console.log(error);
    }
  
    
  };
  