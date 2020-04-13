var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  studentList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
