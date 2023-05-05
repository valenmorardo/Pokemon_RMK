const mongoose = require("mongoose");

const TypeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
  });
  

  const Type = mongoose.model("Type", TypeSchema);

  module.exports = (Type);
