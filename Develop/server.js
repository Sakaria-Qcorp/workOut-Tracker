const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3004;

//const db = require("./models");

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

app.use(require("./route/apiRoutes"));

app.listen(PORT,() =>{
    console.log(`The server is listening on ${PORT}`);

});