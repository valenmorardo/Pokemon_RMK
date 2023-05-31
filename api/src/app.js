/* const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const Routes = require("./routes/routes.js");

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


module.exports = app; */


