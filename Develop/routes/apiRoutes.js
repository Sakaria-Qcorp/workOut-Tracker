const router = require("express").Router();
const workOut = require("../models/workout");

router.get("api/workouts", (req,res) =>{
    console.log(workOut);
    workOut.find({});


})