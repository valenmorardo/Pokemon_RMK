const axios = require("axios");

const Pokemon = require("../models/Pokemones.js");
const Type = require("../models/Types.js");

require("dotenv").config();

//--------------GET POKEMONES----------------
async function getPokemones(req, res, next) {
  const name = req.query.name;

  let todosLosPokemones = await Pokemon.find({});

  if (name) {
    let pokemonName = todosLosPokemones.filter((el) =>
      el.Name.toLowerCase().includes(name.toLowerCase())
    );
    if (pokemonName.length) {
      return res.status(200).send(pokemonName);
    } else {
      console.log;
      return res
        .status(404)
        .send({ status: 404, message: "no existe el pokemon buscado" });
    }
  } else {
    return res.status(200).send(todosLosPokemones);
  }

  /*   Pokemon.find({})
    .then((pokemones) => {
      if (pokemones.length) return res.status(200).send(pokemones);
      return res.status(204).send({ message: "NO CONTENT" });
    })
    .catch((err) => res.status(500).send({ err })); */
}

//--------------GET TYPES----------------
async function getTypes(req, res) {
  Type.find({})
    .then((tipos) => {
      if (tipos.length) return res.status(200).send(tipos);
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
        res.status(500).send({
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


  pokemon.Name.toLowerCase();

  pokemon
    .save()
    .then(() => {
      res.status(200).send({
        created: true,
        message: "El pokemon ha sido guardado correctamente.",
      });

      console.log(`$$$$$$$$$$ POKEMON SAVE :)`);
    })
    .catch((err) => {
      res.status(400).send({
        created: false,
        message: "Error en el registro de Pokemon. Por favor, verifica los datos ingresados.",
        errores: err.errors,
      });
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
      res.status(404).send({
        status: "ERROR",
        message: "comprobar los parametros a llenar",
      });
      console.log(err);
    });
};

const mercadopago = require("mercadopago");
mercadopago.configure({ access_token: process.env.MERCADOPAGO_KEY });

const postPayment = async (req, res) => {
  const donation = req.body;
  console.log(donation);

  let preference = {
    items: [
      {
        id: 1,
        title: donation.title,
        currency_id: "ARS",
        description: donation.title,
        category_id: donation.title,
        quantity: 1,
        unit_price: donation.amount,
      },
    ],
    back_urls: {
      success: "http://localhost:3000/home",
      failure: "",
      pending: "",
    },
    auto_return: "approved",
    binary_mode: true,
  };

  mercadopago.preferences
    .create(preference)
    .then((response) => res.status(200).send({ response }))
    .catch((err) => {
      res.status(404).send({
        status: "ERROR",
        message: "algo anda mal",
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
  postPayment,
};
