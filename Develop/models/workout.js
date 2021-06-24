const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day : {

    },
    exercises : [{
        type: {
            type : "string",
            trim : true,
            required: "enter the type of exercise"

        },
        
        name: {

            type : "string",
            trim : true,
            required: "enter the name of the exercise"

        },

        duration : {
            type : "number",

        },

        weight : {
            type : "number",

        },

        reps : {
            type : "number",

        },

        sets : {
            type : "number",

        }

    


    }]});



    /* type: 'resistance',
        name: 'Lateral Pull',
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,*/