const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseID: {type: String, required: true},
  name: {type: String, required: true},
  units: Number,
  department: String,
  desc: String,
  prereqString: String, // Needs to be parsed to be functional
  crosslisted: [String],
  coreqs: [String],
});
module.exports = mongoose.model('Course', courseSchema);
