var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  attendance: [{}],
  moods: [{}],
});

var Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
