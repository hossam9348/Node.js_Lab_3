const mongoose = require('mongoose');

postSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
})

const postModel = mongoose.model('post', postSchema);

module.exports = postModel; 