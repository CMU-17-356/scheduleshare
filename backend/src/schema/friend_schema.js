const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
    friend_1: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    friend_2: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

module.exports = mongoose.model('Friend', friendSchema);
