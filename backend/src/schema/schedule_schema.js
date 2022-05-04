const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  courses: {
    type: [String],
    validate: {
      validator(arr) {
        if (arr.length == 0) return true;
        arr.forEach((string) => {
          if (/^\d{2}-\d{3}$/.test(string) == false) {
            throw new Error('array conatains an invalid course!');
          }
        });
        return true;
      },
    },
  },
});

module.exports = mongoose.model('Schedule', scheduleSchema);
