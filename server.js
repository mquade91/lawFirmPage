// server.js

const express = require("express");
const bodyParser = require("body-parser");


//set up express app
const app = express();
let  PORT = process.env.PORT || 8080;

app.listen(PORT, function (){
	console.log("App listening on PORT " + PORT);
});