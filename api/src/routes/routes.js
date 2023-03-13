const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/getPokemones', controller.getPokemones)
router.post('/postPokemon', controller.postPokemon)
router.get('/getTypes', controller.getTypes)
router.get('/getPokemonByID/:id', controller.getPokemonByID)
router.post('/postType', controller.postType)


module.exports = router;