const Bottle = require('../models/BottleModel');

exports.bottle = async (req, res) => {
    try {
      // Create a new bottle
      const bottle = new Bottle({
        bottle_name: req.body.bottle_name,
        bottle_size: req.body.bottle_size,
      });
  
      const savedBottle = await bottle.save();
      res.send({ bottle: savedBottle });
    } catch (err) {
      res.status(400).send(err);
    }
  };