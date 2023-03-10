const Pokemon = require("../models/Pokemones.js");
const Type = require("../models/Pokemones.js");

/* const {
    allPokemones = 'https://pokeapi.co/api/v2/pokemon',
    pokemonByID = 'https://pokeapi.co/api/v2/pokemon/:id',
    pokemonByNAME = 'https://pokeapi.co/api/v2/pokemon/:name',
    typesPokemon = 'https://pokeapi.co/api/v2/type',
    typesByName = 'https://pokeapi.co/api/v2/type/name'
} = endpoints */

function getAll(req, res) {
  Pokemon.find({})
    .then((pokemones) => {
      if (pokemones.length) return res.status(200).send({ pokemones });
      return res.status(204).send({ message: "NO CONTENT" });
    })
    .catch((err) => res.status(500).send({ err }));
}

function create(req, res) {
  let pokemon = new Pokemon(req.body);
/*   pokemon
    .save()
    .then((pokemon) => res.status(201).send({ pokemon }))
    .catch((err) => res.status(500).send({ err }).then(console.log(err)));
 */

    pokemon
    .save()
    .then(() => {
      res.status(200).send({ status: "success", pokemon });
      console.log("$$$$$$$$$$$$$$$$$$ ARTICLE SAVE :)");
      console.log(pokemon);
    })
    .catch((err) => {
      res.status(404).send({ status: "ERROR" });
      console.log(err);
    });



}

/* function show(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.products) return res.status(404).send({message: 'Not Found'});
    let products = req.body.products;
    return res.status(200).send({products});
}

function update(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.products) return res.status(404).send({message: 'Not Found'});
    let product = req.body.products[0];
    product = Object.assign(product, req.body);
    product.save()
        .then(product => res.status(200).send({message: 'Product Updated', product})
    ).catch(err => res.status(500).send({err}))
}

function deleted(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.products) return res.status(404).send({message: 'Not Found'});
    req.body.products[0].remove()
        .then(product => {
            res.status(200).send({message:'Product removed', product})
        }
        ).catch(err => res.status(500).send({err}));
}

function find(req, res, next){
    let query = {};
    query[req.params.key] = req.params.value
    Product.find(query).then(products => {
        if(!products.length) return next();
        req.body.products = products;
        return next();
    }).catch(err =>{
        req.body.error = err;
        next();
    })
} */

module.exports = {
  getAll,
  create,
};
