const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 6000;
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const app = express();
app.listen(PORT, (err)=>{
    if(!err) return console.log(`ok on post ${PORT}`);
    console.log(err);
})
app.use(express.json());

// mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/appBlog', (err)=>{
if(!err) return console.log("DB connected succussfully");
console.log(err);
});

app.use(['/users', '/user'], userRouter);
app.use(['/posts', '/post'], postRouter);   