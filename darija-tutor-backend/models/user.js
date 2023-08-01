const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, // Ensure this is hashed before storing!
  progress: Object,
  achievements: Array,
});

module.exports = mongoose.model("User", userSchema);
