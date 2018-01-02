const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require('cors')

//import mongoose models
const Vehicle = require('./models/vehicle');

//import express routes
const vehicleRoute = require("./routes/vehicle");


const app = express();

//enable cors
app(cors());

//configure app for body-bodyParser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

//connect to DB
mongoose.Promise = global.Promise;
var promise = mongoose.connect('mongodb://herono1:2180450a@publisher-shard-00-00-x12rv.mongodb.net:27017,publisher-shard-00-01-x12rv.mongodb.net:27017,publisher-shard-00-02-x12rv.mongodb.net:27017/vehicles?ssl=true&replicaSet=publisher-shard-0&authSource=admin');
// var promise = mongoose.connect('mongodb+srv://herono1:2180450a@publisher-x12rv.mongodb.net/vehicles');

promise.then(() => {
  console.log('connected');
  app.listen(port,function(){
	  console.log(`App Running on PORT ${port}`);
  })

})

app.use("/api/vehicle",require("./routes/vehicle"))

app.get("/", (req,res) => {
  res.json({"message":"welcome to root"})
})

