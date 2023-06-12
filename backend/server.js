const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log('MongoDB connection established');
})


app.listen(port, function(){
    console.log('listening on port' + port);
})
