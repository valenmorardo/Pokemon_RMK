const Database = require("./config/database.js");
const CONFIG = require("./config/config.js");
const app = require("./app.js");

const axios = require("axios");
const _ = require("underscore");
const Pokemon = require("./models/Pokemones.js");
const Type = require("./models/Pokemones.js");
const getAllPokemonesAPI = require("./services/getAllPokemonsAPI.js");
const getAllTypesAPI = require("./services/getAllTypesAPI.js")

Database.connect();

app.listen(CONFIG.PORT, async (err) => {
  if (err) return console.log(err);
  console.log(`Servidor corriendo en el puerto:`);

   await getAllPokemonesAPI();
   await getAllTypesAPI();
});
