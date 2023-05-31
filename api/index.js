const Database = require("./src/config/database.js");
const CONFIG = require("./src/config/config.js");


const axios = require("axios");
const _ = require("underscore");
const Pokemon = require("./src/models/Pokemones.js");
const Type = require("./src/models/Pokemones.js");
const getAllPokemonesAPI = require("./src/services/getAllPokemonsAPI.js");
const getAllTypesAPI = require("./src/services/getAllTypesAPI.js");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const Routes = require("./src/routes/routes.js");

//cualquier peticion la converitmos en json
app.use(bodyParser.json());

//cargamos body parser que es un middleware para analizar cuerpos atravez de la url
app.use(bodyParser.urlencoded({ extended: false }));

//activamos el CORS para permitir las peticions AJAX y HTTP desde el front
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/", Routes);

Database.connect();

app.listen(CONFIG.PORT || 3001, async (err) => {
  if (err) return console.log(err);
  console.log(`Servidor corriendo en el puerto: ${CONFIG.PORT}`);

  await getAllPokemonesAPI();
  await getAllTypesAPI();
});
