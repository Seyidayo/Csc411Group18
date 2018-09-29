var mongoose = require('mongoose');

var CartSchema = new mongoose.Schema({
  username: {
    type: String,
    default: ''
  },
  device: {
    type: String,
    default: ''
  },
  problem: {
    type: String,
    default: ''
  },
  price: {
      type: Number,
      default: 0
  }
});

module.exports = mongoose.model('Cart', CartSchema);
