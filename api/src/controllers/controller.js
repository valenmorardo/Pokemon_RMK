const axios = require("axios");

const Pokemon = require("../models/Pokemones.js");
const Type = require("../models/Types.js");

require("dotenv").config();

//--------------GET POKEMONES----------------
async function getPokemones(req, res, next) {
  await Pokemon.find({})
    .then((pokemones) => {

      if(pokemones) {
        res.status(200).send({
          response: true,
          pokemones: pokemones,
        });
      } else {
        res.status(404).send({
          response: false,
          message: "No content"
        })
      }
      
    })
    .catch((error) =>
      res.status(500).send({
        response: false,
        message: "ERROR",
        error,
      })
    );
}

//--------------GET TYPES----------------
async function getTypes(req, res) {
  await Type.find({})
    .then((types) => {

      if(types) {
        res.status(200).send({
          response: true,
          types,
        });
      } else {
        res.status(404).send({
          response: false,
          message: "No content",
        })
      }

    })
    .catch((error) =>
      res.status(500).send({
        response: false,
        message: "ERROR",
        error,
      })
    );
}

//--------------GET POKEMON by ID----------------
const getPokemonByID = async (req, res) => {
  const idPokemon = req.params.id;

  await Pokemon.findById(idPokemon)
    .then((pokemon) => {
      if (pokemon) {
        res.status(200).send({
          response: true,
          message: "Pokemon founded",
          pokemon,
        });
      } else {
        res.status(404).send({
          response: false,
          message: "Pokemon no encontrado",
        });
      }
    })
    .catch((error) =>
      res.status(500).send({
        response: false,
        message: "Error, ID no valida",
        error,
      })
    );
};

//--------------GET POKEMON by NAME (SearchBar)----------------

const getPokemonByName = async (req, res) => {
  const nameSearch = req.query.name;

  await Pokemon.find({ Name: new RegExp(nameSearch, "i") })
    .then((pokemon) => {
      if (pokemon.length > 0) {
        res.status(200).send({
          response: true,
          pokemon,
        });
      } else {
        res.status(404).send({
          response: false,
          message: "No se encontraron pokemones con ese nombre",
        });
      }
    })
    .catch((error) =>
      res.status(404).send({
        response: false,
        message: "Error al buscar.",
        error,
      })
    );
};

//--------------POST NEW POKEMON----------------
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
        message:
          "Error en el registro de Pokemon. Por favor, verifica los datos ingresados.",
        errores: err.errors,
      });
    });
}

//--------------MERCADO PAGO----------------
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
  getPokemonByName,
  getPokemonByID,
  postPayment,
};
