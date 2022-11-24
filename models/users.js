const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: String,
  username: String,
  password: String,
  token: String,
  canDelete: Boolean,
});

const User = mongoose.model('users', userSchema);

module.exports = User;