const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  sport : {
    type : String,
    required : true,
    enum : ["football","badminton","chess","tabletennis","gym","bgmi","volleyball","lawntennis","basketball","athletics"]
  },
  password: {
    type: String,
    require: true,
    select: false,
  }
});
module.exports = mongoose.model("admin", adminSchema);
