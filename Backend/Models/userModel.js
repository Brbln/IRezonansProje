const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, " please add the user name"],
    },
    email: {
        type: String,
        required: [true, "This {PATH} is required"],
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email format"],
        unique: true,
        validate: {
            validator: async function (value) {
                const existingUsers = await model("User").findOne({ email: value });
                return !existingUsers;
            },
            message: "This {PATH} is already registered",
        }
    },
    password: {
        type: String,
        required: [true, "Please add a user password"]
    }},
    {
        timestamps: true
    });
module.exports = mongoose.model("User", userSchema);