const Database = require("./src/config/database.js");
const CONFIG = require("./src/config/config.js");

const axios = require("axios");
const _ = require("underscore");
const Pokemon = require("./src/models/Pokemones.js");
const Type = require("./src/models/Pokemones.js");

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
    "Access-Control-Allow-Headers, Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Request-Method, Access-Control-Allow-Request-Method, Access-Control-Request-Headers,  Access-Control-Allow-Origin"
  );
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Request-Headers", "*");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, HEAD, POST, OPTIONS, PUT, DELETE"
  );
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/", Routes);

/* app.listen(CONFIG.PORT || 3001, async (err) => {
  if (err) return console.log(err);
  console.log(`Servidor corriendo en el puerto: ${CONFIG.PORT}`);

  await getAllPokemonesAPI();
  await getAllTypesAPI();
}); */

const getAllPokemonesAPI = require("./src/services/getAllPokemonsAPI.js");
const getAllTypesAPI = require("./src/services/GetAllTypesAPI.js");

const startServer = () => {
  return new Promise((resolve, reject) => {
    app.listen(CONFIG.PORT || 3001, (err) => {
      if (err) {
        reject(err);
      } else {
        Database.connect();
        console.log(`Servidor corriendo en el puerto: ${CONFIG.PORT}`);
        resolve();
      }
    });
    return true;
  });
};

const runApp = async () => {
  try {
    await startServer();
    await getAllPokemonesAPI();
    await getAllTypesAPI();
  } catch (err) {
    console.log(err);
  }
  return true;
};

runApp();
