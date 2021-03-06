var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  attendance: [
    {
      date: {
        type: Date,
        default: Date.now(),
      },
      present: {
        type: Boolean,
        default: false,
      },
    },
  ],
  moods: [
    {
      date: {
        type: Date,
        default: Date.now(),
      },
      feel: {
        type: String,
        default: "Happy",
      },
    },
  ],
});

var Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
