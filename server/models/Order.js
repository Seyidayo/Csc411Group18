var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model('Order', OrderSchema);
