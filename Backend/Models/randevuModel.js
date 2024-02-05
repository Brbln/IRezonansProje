const { Schema, model } = require("mongoose");

const rndSchema = new Schema({
    name: {
        type: String,
        required: [true, "This {PATH} is required"]
    },
    surname: {
        type: String,
        required: [true, "This {PATH} is required"]
    },
    email: {
        type: String,
        required: [true, "This {PATH} is required"],
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email format"],
    },
    phone: {
      type: String,
      required: [true, "This {PATH} is required"],
      minlength: [10, "Phone number must be at least 10 characters"],
      maxlength:[10, "Phone number must not exceed 10 characters"]
    },
    text: {
        type: String,
        required: [true, "This {PATH} is required"]
    }
});
module.exports = mongoose.model("Randevu", rndSchema);