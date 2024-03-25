const mongoose = require('mongoose');

const bottleSchema = new mongoose.Schema({
  bottle_name: { type: String },
  bottle_size: { type: String },
});

module.exports = mongoose.model('Bottle', bottleSchema);
