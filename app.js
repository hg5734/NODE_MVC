/*@Author Himanshu Goyal 
created basic mvc pattern 
*/

//Created Express Application
var express = require('express');
global.app = express();

var Layers = require('layers').Express,
    wiring = require('./urlMapping');

new Layers(app, __dirname + '/mvc', wiring);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})