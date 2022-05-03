const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
  friend_1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  friend_2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Friend', friendSchema);
