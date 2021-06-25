const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const workOut = require("./models/workout");
const path = require("path");

const PORT = process.env.PORT || 3004;



const app = express();

app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false

});

//require("./route/apiRoutes")(app);
app.get("/api/workouts", (req, res) => {
    console.log(JSON.stringify(workOut));
    workOut.find({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// put route to work with addExercise function
app.put("/api/workouts/:id", (req, res) => {

    workOut.findOneAndUpdate(
        {
            _id: (req.params.id)
        },
        {
            $push: {
            exercises: req.body
            }  
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                console.log("We got data", JSON.stringify(data, null,2))
                res.send(data);
            }
        }
    );
});

//post route to work with createWorkout
app.post("/api/workouts", ({body}, res) => {
    workOut.create(body)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


//get route for getWorkoutsRange 
app.get("/api/workouts/range", (req, res)=> {
    workOut.find({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//html Routes
 // Render stats.html
 app.get('/stats', function (req, res) {
    res.sendFile(path.join(__dirname, './public/stats.html'));
});

// Render exercise.html
app.get('/exercise', function (req, res) {
    res.sendFile(path.join(__dirname, './public/exercise.html'));
});

// Render index.html
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT,() =>{
    console.log(`The server is listening on ${PORT}`);

});