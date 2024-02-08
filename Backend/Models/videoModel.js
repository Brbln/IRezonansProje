const { Schema, model } = require("mongoose");

const vidSchema = new Schema({
    vidName: {
        type: String,
        required: true
    },
    vidLink: {
        type: String,
        required: [true, "This {PATH} is required"]
    }
});
module.exports = model("Video", vidSchema);