const mongoose = require("mongoose");
const photoSchema = mongoose.Schema({
  folderName: {
    type: String,
    require: true,
  },
  image: {
    publicId: String,
    url: String,
  },
  name: {
    type: String,
  },
});
module.exports = mongoose.model("photo", photoSchema);
