// validations/userValidation.js

const Joi = require('joi');

const registerSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required().min(6),
});

module.exports = { registerSchema };
