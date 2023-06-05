const mongoose = require('mongoose');

userSchema = new mongoose.Schema({
    name: String,
    password: String
})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;