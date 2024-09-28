const mongoose = require("mongoose");
const playerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    collegeName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phoneNo: {
      type: Number,
      require: true,
    },
    idCard: {
      publicId: String,
      url: String,
    },
    gender: {
      type: String,
      require: true,
    },
    sportName: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("player", playerSchema);
