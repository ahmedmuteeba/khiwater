const express = require('express');
const router = express.Router();
const BottleController = require('../controllers/BottleController');
const { validateBottle } = require('../middleware/validationMiddleware');

router.post('/add',validateBottle, BottleController.bottle);

module.exports = router;
