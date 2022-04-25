const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
    friend_1: {type: Schema.Types.ObjectId, ref: 'User'},
    friend_2: {type: Schema.Types.ObjectId, ref: 'User'},
});

module.exports = mongoose.model('Friend', friendSchema);
