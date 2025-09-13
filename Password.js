const mongoose = require("mongoose");

const PasswordSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("Password", PasswordSchema);
