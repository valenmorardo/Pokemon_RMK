const Database = require("../config/database.js");
const CONFIG = require("../config/config.js");
const app = require("../app.js");

const axios = require("axios");
const _ = require("underscore");
const Pokemon = require("../models/Pokemones.js");
const Type = require("../models/Pokemones.js");
const getAllPokemones = require("../services/getAllPokemons.js");
const getAllTypes = require("../services/getAllTypes.js")

Database.connect();

app.listen(CONFIG.PORT, async (err) => {
  if (err) return console.log(err);
  console.log(`Servidor corriendo en el puerto: ${CONFIG.PORT}`);

   await getAllPokemones();
   await getAllTypes();
});
