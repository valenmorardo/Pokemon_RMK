const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
  Name: {
    type: String,
    unique: true,
    required: true,
  },
  Height: {
    type: Number,
    required: true,
  },
  Weight: {
    type: Number,
    required: true,
  },
  Life: {
    type: Number,
    required: true,
  },
  Attack: {
    type: Number,
    required: true,
  },
  Defense: {
    type: Number,
    required: true,
  },
  Speed: {
    type: Number,
    required: true,
  },
  Types: {
    type: Array,
    default: undefined,
    required: true,
  },
  Images: {
    type: Array,
  },
});


const Pokemon = mongoose.model("Pokemon", PokemonSchema);

module.exports = (Pokemon);
