const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    courses: [String],
});

module.exports = mongoose.model('Schedule', scheduleSchema);
