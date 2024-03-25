// validations/bottleValidation.js

const Joi = require('joi');

const bottleSchema = Joi.object({
  bottle_name: Joi.string().required(),
  bottle_size: Joi.string().required(),
});

module.exports = { bottleSchema };
