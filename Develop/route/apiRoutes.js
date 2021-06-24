const router = require("express").Router();
const workOut = require("../models/workout");

router.get("api/workouts", (req,res) =>{
    console.log(JSON.stringify(workOut));
    workOut.find({})
    .then(data =>{
        res.json(data);
    }).catch(error =>{
        res.status(400).json(error);
    })


});