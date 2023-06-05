const express = require('express');
const router = express.Router();
const postMOdel = require('../models/post');



router.get("/", async (req, res) => {
    // postMOdel.find({}, (err, posts) => {
    //     if (!err) return res.json(posts);
    //     res.status(500).send("db error");
    // }).populate('author');

    try{
        const posts= await postMOdel.find({});
        return res.json(posts);
    }catch(error){
        res.status(500).send("db error");
    }
})

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    // postMOdel.find({ _id: id }, (err, post) => {
    //     if (!err) return res.json(post);
    //     res.status(500).send("db error");
    // }).populate('author');

    try{
        const post= await postMOdel.find({_id: id});
        return res.json(post);
    }catch(error){
        res.status(500).send("db error");
    }
})

router.post("/", async (req, res) => {
    const postData = { ...req.body };
    const post = new postMOdel(postData);
    // post.save((err, savedPost) => {
    //     if (!err) return res.json(savedPost);
    //     res.status(500).send("db error");
    // })

    try{
        const data= await post.save();
        res.json(data);
    }catch(error){
        res.status(500).send("db error");
    }
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    // postMOdel.findByIdAndUpdate(id, req.body, function (err, data) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         res.send(data);
    //     }
    // });

    try{
        const data= await postMOdel.findByIdAndUpdate(id, req.body);
        res.send(data);
    }catch(error){
        res.status(500).send("db error");
    }
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    // postMOdel.remove({ _id: id }, function (err, data) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         res.send(data);
    //     }
    // });

    try{
        const data= await postMOdel.remove({ _id: id });
        res.send(data);
    }catch(error){
        res.status(500).send("db error");
    }
})

module.exports = router;




