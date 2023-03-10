const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/pokemones', controller.getAll)
router.post('/create', controller.create)


module.exports = router;