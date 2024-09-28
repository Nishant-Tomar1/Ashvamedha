const mongoose = require("mongoose");
const sportSchema = mongoose.Schema(
  {
    sportName: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    matchName: {
      type: String,
      require: true,
    },
    college1Name: {
      // opponents name
      type: String,
      require: true,
    },
    college2Name: {
      type: String,
      require: true,
    },
    point: {
      type: Number,
      require: true,
    },
    collegeWon: {
      type: String,
      require: true,
    },
    editedBy: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("sport", sportSchema);
