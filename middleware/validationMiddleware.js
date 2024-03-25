// middleware/validationMiddleware.js

const { registerSchema } = require('../validations/userValidation');
const { bottleSchema } = require('../validations/bottleValidation');

const validateRegister = (req, res, next) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

const validateBottle = (req, res, next) => {
  const { error } = bottleSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};


module.exports = { validateRegister, validateBottle };
