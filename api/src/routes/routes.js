const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/getPokemones', controller.getPokemones)

router.get('/getTypes', controller.getTypes)
router.get('/getPokemonByID/:id', controller.getPokemonByID)
router.post('/postPokemon', controller.postPokemon)
router.post('/postPayment', controller.postPayment)

router.get('/getPokemonByName', controller.getPokemonByName)


module.exports = router;