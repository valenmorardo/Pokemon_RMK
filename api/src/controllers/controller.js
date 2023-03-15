const axios = require("axios");

const Pokemon = require("../models/Pokemones.js");
const Type = require("../models/Types.js");

//--------------GET POKEMONES----------------
async function getPokemones(req, res, next) {

  const name = req.query.name;

  let todosLosPokemones = await Pokemon.find({});


  if(name) {
    let pokemonName = todosLosPokemones.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
    if(pokemonName.length) {
      return res.status(200).send(pokemonName)
    } else{
      console.log
      res.status(404).send({status: 404, message: 'no existe ese pokemon'});
    }
  } else{
    return res.status(200).send( todosLosPokemones )
  }

/*   Pokemon.find({})
    .then((pokemones) => {
      if (pokemones.length) return res.status(200).send({ pokemones });
      return res.status(204).send({ message: "NO CONTENT" });
    })
    .catch((err) => res.status(500).send({ err })); */
}

//--------------GET TYPES----------------
async function getTypes(req, res) {
  Type.find({})
    .then((tipos) => {
      if (tipos.length) return res.status(200).send({ tipos });
      return res.status(204).send({ message: "NO CONTENT" });
    })
    .catch((err) => res.status(500).send({ err }));
}

//--------------GET POKEMON by ID----------------
const getPokemonByID = async (req, res) => {
  const idPokemon = req.params.id;

  if (idPokemon) {
    let pokemon;

    if (idPokemon.length === 24) {
      pokemon = await Pokemon.findById(idPokemon);
      if (pokemon) {
        res.status(200).send(pokemon);
      } else {
        res
          .status(500)
          .send({
            status: "error",
            message: "no existe pokemon con esa ID :(",
          });
      }
    } else {
      res.status(500).send({ message: "no existe pokemon con esa ID :(" });
    }
  }
};

//--------------POST newPOKEMON----------------
function postPokemon(req, res) {
  let pokemon = new Pokemon(req.body);

  pokemon
    .save()
    .then(() => {
      res.status(200).send({ status: "success", pokemon });

      console.log(pokemon);
      console.log("$$$$$$$$$$$$$$$$$$ POKEMON SAVE :)");
    })
    .catch((err) => {
      res
        .status(404)
        .send({
          status: "ERROR",
          message: "comprobar los parametros a llenar",
        });
      console.log(err);
    });
}

//--------------POST newTYPE----------------
const postType = async (req, res) => {
  let type = new Type(req.body);

  type
    .save()
    .then(() => {
      res.status(200).send({ status: "success", type });
      console.log(type);
      console.log("$$$$$$$$$$$$$$$$$$ TYPE SAVE :)");
    })
    .catch((err) => {
      res
        .status(404)
        .send({
          status: "ERROR",
          message: "comprobar los parametros a llenar",
        });
      console.log(err);
    });
};

module.exports = {
  getPokemones,
  postPokemon,
  getTypes,
  getPokemonByID,
  postType,
};
