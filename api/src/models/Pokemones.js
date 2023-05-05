const mongoose = require("mongoose");

const axios = require("axios");

const validacionName = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/i;
const validacionNumeros = /^\d+$/;
const validacionImg =
  /^https?:\/\/(?:[a-z\-]+\.)+[a-z]{2,}(?:\/[^\/\s]+)*\/(?:[^\/\s]+\.([^\s\.\/]{3,}|jpg|jpeg|png))$/i;


const PokemonSchema = new mongoose.Schema({
  Name: {
    type: String,
    unique: true,
    required: [true, "El nombre es obligatorio."],
    validate: [
      {
        validator: async function (nombre) {
          const pokemon = await this.constructor.findOne({
            Name: nombre.toLowerCase(),
          });
          return !pokemon;
        },
        message: "Ya existe un Pokemon con este nombre.",
      },
      {
        validator: async (nombre) => {
          /* validacion personalizada: el nombre solo debe contener letras */
          const test = validacionName.test(nombre);
          if (test) {
            return true;
          }
          if (!test) {
            return false;
          }
        },
        message: (props) => {
          return `${props.value} No es un nombre valido. Debe contener unicamente letras.`;
        },
      },
      {
        validator: (nombre) => {
          /* validacion de caracteres minimos */
          return nombre.length >= 3;
        },
        message: "El nombre debe tener al menos 3 caracteres",
      },
      {
        validator: (nombre) => {
          /* validacion de caracteres minimos */
          return nombre.length <= 35;
        },
        message: "El nombre debe tener maximo 35 caracteres",
      },
    ],
  },

  Height: {
    type: Number,
    required: [true, "La altura es obligatoria"],

    validate: [
      {
        validator: (altura) => {
          /* validacion personalizada: la altura solo debe contener numeros */
          return validacionNumeros.test(altura);
        },
        message: (props) => {
          return `${props.value} no es una altura valida. Debe contener unicamente valores numericos.`;
        },
      },

      {
        validator: (altura) => {
          /* validacion de q la altura sea 1 minimo" */
          return !(altura < 1);
        },
        message: "La altura minima es 1",
      },
      {
        validator: (altura) => {
          /* validacion de q la altura sea 99999 minimo" */
          return !(altura > 99999);
        },
        message: "La altura maxima es 9999",
      },
    ],
  },

  Weight: {
    type: Number,
    required: [true, "El peso es obligatoria"],

    validate: [
      {
        validator: (peso) => {
          /* validacion personalizada: la peso solo debe contener numeros */
          return validacionNumeros.test(peso);
        },
        message: (props) => {
          return `${props.value} no es un peso valido. Debe contener unicamente valores numericos.`;
        },
      },

      {
        validator: (peso) => {
          /* validacion de q la peso sea 10 minimo" */
          return !(peso < 10);
        },
        message: "El peso minima es 10",
      },
      {
        validator: (peso) => {
          /* validacion de q la peso sea 9999 minimo" */
          return !(peso > 9999);
        },
        message: "El peso maxima es 9999",
      },
    ],
  },

  Life: {
    type: Number,
    required: [true, "La vida es obligatoria"],
    validate: [
      {
        validator: (vida) => {
          /* validacion personalizada: la vida solo debe contener numeros */
          return validacionNumeros.test(vida);
        },
        message: (props) => {
          return `${props.value} no es una vida valida. Debe contener unicamente valores numericos.`;
        },
      },

      {
        validator: (vida) => {
          /* validacion de q la vida sea 10 minimo" */
          return !(vida < 1);
        },
        message: "La vida minima es 1",
      },
      {
        validator: (vida) => {
          /* validacion de q la vida sea 9999 minimo" */
          return !(vida > 9999);
        },
        message: "La vida maxima es 9999",
      },
    ],
  },
  Attack: {
    type: Number,
    required: [true, "La ataque es obligatoria"],

    validate: [
      {
        validator: (ataque) => {
          /* validacion personalizada: la ataque solo debe contener numeros */
          return validacionNumeros.test(ataque);
        },
        message: (props) => {
          return `${props.value} no es una ataque valida. Debe contener unicamente valores numericos.`;
        },
      },

      {
        validator: (ataque) => {
          /* validacion de q la ataque sea 10 minimo" */
          return !(ataque < 1);
        },
        message: "La ataque minima es 1",
      },
      {
        validator: (ataque) => {
          /* validacion de q la ataque sea 9999 minimo" */
          return !(ataque > 9999);
        },
        message: "La ataque maxima es 9999",
      },
    ],
  },
  Defense: {
    type: Number,
    required: [true, "La defensa es obligatoria"],

    validate: [
      {
        validator: (defensa) => {
          /* validacion personalizada: la defensa solo debe contener numeros */
          return validacionNumeros.test(defensa);
        },
        message: (props) => {
          return `${props.value} no es una defensa valida. Debe contener unicamente valores numericos.`;
        },
      },

      {
        validator: (defensa) => {
          /* validacion de q la defensa sea 10 minimo" */
          return !(defensa < 1);
        },
        message: "La defensa minima es 1",
      },
      {
        validator: (defensa) => {
          /* validacion de q la defensa sea 9999 minimo" */
          return !(defensa > 9999);
        },
        message: "La defensa maxima es 9999",
      },
    ],
  },
  Speed: {
    type: Number,
    required: [true, "La velocidad es obligatoria"],

    validate: [
      {
        validator: (velocidad) => {
          /* validacion personalizada: la velocidad solo debe contener numeros */
          return validacionNumeros.test(velocidad);
        },
        message: (props) => {
          return `${props.value} no es una velocidad valida. Debe contener unicamente valores numericos.`;
        },
      },

      {
        validator: (velocidad) => {
          /* validacion de q la velocidad sea 10 minimo" */
          return !(velocidad < 1);
        },
        message: "La velocidad minima es 1",
      },
      {
        validator: (velocidad) => {
          /* validacion de q la velocidad sea 9999 minimo" */
          return !(velocidad > 9999);
        },
        message: "La velocidad maxima es 9999",
      },
    ],
  },
  Types: {
    type: Array,
    default: undefined,
    required: [true, "El o los tipos son obligatorios"],
    validate: [
      {
        validator: (tipos) => {
          if (tipos.length === 1 || tipos.length === 2) {
            return true;
          } else {
            return false;
          }
        },
        message: (props) => {
          return "Debe escojer como minimo 1 tipo y como maximo 2";
        },
      },
    ],
  },

  Images: {
    type: String,
    required: [true, "La imagen es obligatoria"],

    validate: [
      {
        validator: async (url) => {
          try {
            const response = await axios.get(url);

            if (response.headers["content-type"].startsWith("image/")) {
              return true; // Si la URL es de una imagen existente, retornamos true
            }
            return false;
          } catch {
            return false;
          }
        },
        message: (props) => {
          return "La url ingresada no se admite. Revisar ortografia o revisar de que la extension sea .jpg | .jpeg | .png";
        },
      },
      {
        validator: (img) => {
          return validacionImg.test(img);
        },
        message: (props) => {
          return "La url ingresada no se admite. Revisar ortografia o revisar de que la extension sea .jpg | .jpeg | .png";
        },
      },
    ],
  },
});

const Pokemon = mongoose.model("Pokemon", PokemonSchema);

module.exports = Pokemon;
