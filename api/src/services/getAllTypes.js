const { deleteAllSchema } = require("../utils/mongoUtils.js");
const Type = require("../models/Pokemones.js");

const axios = require("axios");

module.exports = async function getAllTypes() {
  await deleteAllSchema(Type);

  let types = await axios("https://pokeapi.co/api/v2/type");
  types = types.data.results;

  try {
    types.map((el) => {
      let newType = new Type({
        name: el.name,
      });
      newType.save().catch((err) => {
        console.log(err);
      });
    });
  } catch (error) {
    console.log(error);
  }
};
