var mongoose = require('mongoose');

var RepairSchema = new mongoose.Schema({
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
  stage: {
      type: String,
      default: ''
  }
});

module.exports = mongoose.model('Repair', RepairSchema);
