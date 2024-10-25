const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');


router.get('/getPokemones', controller.getPokemones)

router.get('/getTypes', controller.getTypes)
router.get('/getPokemonByID/:id', controller.getPokemonByID)
router.post('/postPokemon', controller.postPokemon)
router.post('/postPayment', controller.postPayment)



module.exports = router;