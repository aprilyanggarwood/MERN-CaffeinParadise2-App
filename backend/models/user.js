const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: { type: String, require: true },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
