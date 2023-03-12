const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/getPokemones', controller.getAll)
router.post('/postPokemon', controller.create)



module.exports = router;