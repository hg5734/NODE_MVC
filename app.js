/*@Author Himanshu Goyal 
created basic mvc pattern 
*/

//Created Express Application
var express = require('express');
global.app = express();
global.domain = {};
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
global.jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./util/config').config(); // get our config file
global.validate = require('express-validation')
domain.User = require('./mvc/model/User'); // get our mongoose model
// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())

app.set('superSecret',"jwtToken"); // secret variable

var Layers = require('layers').Express,
    wiring = require('./urlMapping');
new Layers(app, __dirname + '/mvc', wiring);

//Error response handler during validation on DTO
app.use(function(err, req, res, next){
  res.status(400).json(err);
});

//Check error and success in mongodb
mongoose.connect(config.mongodb); // connect to database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("mongo db connection open");
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Example app listening on port ${process.env.PORT || 3000}")
})