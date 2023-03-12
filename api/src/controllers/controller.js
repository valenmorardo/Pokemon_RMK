const axios = require("axios");

const Pokemon = require("../models/Pokemones.js");
const Type = require("../models/Pokemones.js");


const endpoints = {
  pokemonesDeAPI: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=3",
  pokemonByID: "https://pokeapi.co/api/v2/pokemon/:id",
  pokemonByNAME: "https://pokeapi.co/api/v2/pokemon/:name",
  typesPokemon: "https://pokeapi.co/api/v2/type",
  typesByName: "https://pokeapi.co/api/v2/type/name",
};

async function getAll(req, res) {
  Pokemon.find({})
    .then((pokemones) => {
      if (pokemones.length) return res.status(200).send({ pokemones });
      return res.status(204).send({ message: "NO CONTENT" });
    })
    .catch((err) => res.status(500).send({ err }));
}

function create(req, res) {
  let pokemon = new Pokemon(req.body);

  pokemon
    .save()
    .then(() => {
      res.status(200).send({ status: "success", pokemon });
      console.log("$$$$$$$$$$$$$$$$$$ ARTICLE SAVE :)");
      console.log(pokemon);
    })
    .catch((err) => {
      res.status(404).send({ status: "ERROR" });
      console.log(err);
    });
}

module.exports = {
  getAll,
  create,
};
