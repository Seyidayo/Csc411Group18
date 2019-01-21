var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email: { 
    type: String, 
    default: '' 
  },

  address: { 
    type: String, 
    default: '' 
  },
 
  password: { 
    type: String, 
    default: '' 
  },

  status: {
    type: String,
    default: 'client'
  },

  isDeleted: { 
    type: Boolean,
    default: false 
  }
});

module.exports = mongoose.model('User', UserSchema);
