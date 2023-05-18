const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


//Defining the port for connection
const PORT = process.env.PORT || 8070;

//Used the declared dependencies
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGOBD_URL;

//Declaring the URL and related options
mongoose.connect(URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});


//Open the connection
const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB Connection Success!");
})


const supplier= require("./routes/supplier.js");
app.use("/supplier", supplier)


//Listen to the created port
app.listen(PORT, () => {
	console.log(`Server is up and running on Port: ${PORT}`)
})