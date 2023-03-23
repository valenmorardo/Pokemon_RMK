
require("dotenv").config();


module.exports = {
    PORT: process.env.PORT,
    DB: `mongodb://127.0.0.1:27017/${process.env.DB_NAME}`  // --> "pokemonRMK", es el nombre de la base de datos
}