require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3001,
    DB: process.env.DB || `mongodb://127.0.0.1:27017/pokemonRMK`  // --> "pokemonRMK", es el nombre de la base de datos, cambiarlo
}