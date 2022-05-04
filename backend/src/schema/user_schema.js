const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  full_name: {type: String, required: true},
  majors: {type: String},
  minors: {type: String},
  school: {type: String},
  class: {type: String},
  bio: {type: String},
});

module.exports = mongoose.model('User', userSchema);
