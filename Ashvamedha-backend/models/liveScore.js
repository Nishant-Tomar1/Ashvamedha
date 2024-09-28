const mongoose = require("mongoose");
const liveScoreSchema = mongoose.Schema({
  college1Name: {
    type: String,
    require: true,
  },
  college1Score: {
    type: Number,
    require: true,
  },
  college1Logo: {
    type: String,
    require: true,
  },
  college2Name: {
    type: String,
    require: true,
  },
  college2Score: {
    type: Number,
    require: true,
  },
  college2Logo: {
    type: String,
    require: true,
  },
  matchName: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  editedBy: {
    type: String,
    require: true,
  },
  sportName: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  set: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("livescore", liveScoreSchema);
