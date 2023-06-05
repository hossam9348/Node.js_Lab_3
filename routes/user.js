const express = require('express');
const router = express.Router();
const userModel = require('../models/user');



router.get("/", async (req, res) => {
    // userModel.find({}, (err, users) => {
    //     if (!err) return res.json(users);
    //     res.status(500).send("db error");
    // })


    try{
        const users= await userModel .find({});
        return res.json(users);
    }catch(error){
        res.status(500).send("db error");
    }
})

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    // userModel.find({ _id: id }, (err, user) => {
    //     if (!err) return res.json(user);
    //     res.status(500).send("db error");
    // })
    
    try{
        const user= await userModel .find({_id: id});
        return res.json(user);
    }catch(error){
        res.status(500).send("db error");
    }
})

router.post("/", async (req, res) => {
    const userData = { ...req.body };
    const user = new userModel(userData);
    // user.save((err, savedUser) => {
    //     if (!err) return res.json(savedUser);
    //     res.status(500).send("db error");
    // })

    try{
        const data= await user.save();
        res.json(data);
    }catch(error){
        res.status(500).send("db error");
    }
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    // userModel.findByIdAndUpdate(id, req.body, function (err, data) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         res.send(data);
    //     }
    // });

    try{
        const data= await userModel.findByIdAndUpdate(id, req.body);
        res.send(data);
    }catch(error){
        res.status(500).send("db error");
    }
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    // userModel.remove({ _id: id }, function (err, data) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         res.send(data);
    //     }
    // });

    try{
        const data= await userModel.remove({ _id: id });
        res.send(data);
    }catch(error){
        res.status(500).send("db error");
    }
})

module.exports = router;