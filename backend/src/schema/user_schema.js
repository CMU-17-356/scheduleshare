const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    full_name: {type: String, required: true},
    majors : [String],
    minors: [String],
    class : {type: Number},
});

module.exports = mongoose.model('User', userSchema);
