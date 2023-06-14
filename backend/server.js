//Require and Config all necessary modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

//Set up middleware
app.use(cors());
app.use(express.json());

//Establish the DB connection
const uri = process.env.MONGO_ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log('MongoDB connection established');
})

//Require all endpoints and Use them
const usersRoute = require('./routes/users');
const exercisesRoute = require('./routes/exercises');

app.use('/exercises', exercisesRoute);
app.use('/users', usersRoute);


app.listen(port, function(){
    console.log('listening on port' + port);
})
