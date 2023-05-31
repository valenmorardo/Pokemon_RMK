const Database = require("./src/config/database.js");
const CONFIG = require("./src/config/config.js");
const app = require("./src/app.js");

const axios = require("axios");
const _ = require("underscore");
const Pokemon = require("./src/models/Pokemones.js");
const Type = require("./src/models/Pokemones.js");
const getAllPokemonesAPI = require("./src/services/getAllPokemonsAPI.js");
const getAllTypesAPI = require("./src/services/getAllTypesAPI.js")

Database.connect();

app.listen(CONFIG.PORT  || 3001, async (err) => {
  if (err) return console.log(err);
  console.log(`Servidor corriendo en el puerto: ${CONFIG.PORT}`);

   await getAllPokemonesAPI();
   await getAllTypesAPI();
});
