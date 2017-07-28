/*@Author Himanshu Goyal */

var Joi = require('joi');
 
module.exports = {
  body: {
    name: Joi.string("name must required").required(),
    password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required()
  }
};