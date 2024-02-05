const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const AdminSchema = new Schema({
  name: {
    type: String,
    required: [true, "This {PATH} is required"],
  },
  surname: {
    type: String,
    required: [true, "This {PATH} is required"],
  },
  email: {
    type: String,
    required: [true, "This {PATH} is required"],
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email format"],
    unique: true,
    validate: {
      validator: async function (value) {
        const existingAdmin = await this.constructor.findOne({ email: value });
        return !existingAdmin;
      },
      message: "This {PATH} is already registered",
    },
  },
  password: {
    type: String,
    required: [true, "This {PATH} is required"],
  },
  phone: {
    type: String,
    required: [true, "This {PATH} is required"],
    minlength: [10, "Phone number must be at least 10 characters"],
    maxlength:[10, "Phone number must not exceed 10 characters"]
  },
},
{
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            delete ret.__v;
        }
    }
});

AdminSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();
  const salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);
  return next();
});

AdminSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports =mongoose.model("Admin", AdminSchema);