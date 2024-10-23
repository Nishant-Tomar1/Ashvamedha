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
    enum : ["football","badminton","chess","table-tennis","gym","bgmi","volleyball","lawn-tennis","basketball","athletics"]
  },
  password: {
    type: String,
    require: true,
    select: false,
  }
});
module.exports = mongoose.model("admin", adminSchema);
