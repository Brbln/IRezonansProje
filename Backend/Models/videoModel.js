const { Schema, model } = require("mongoose");

const videoSchema = new Schema({
  vidName: {
    type: String,
    required: [true, "This {PATH} is required"]
  },
  vidLink: {
    type: String,
    required: [true, "This {PATH} is required"]
  }
});

module.exports = model("Video", videoSchema);