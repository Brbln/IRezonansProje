const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the username"],
    },
    email: {
        type: String,
        required: [true, "The email is required"],
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email format"],
        unique: true,
        validate: {
            validator: async function (value) {
                const existingUser = await mongoose.model("User").findOne({ email: value });
                return !existingUser;
            },
            message: "This email is already registered",
        }
    },
    password: {
        type: String,
        required: [true, "Please add a user password"]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);
