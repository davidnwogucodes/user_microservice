const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  Name: String,
  Email: String,
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
