/* @Author Himanshu Goyal */

var SetResponse = function () {}

SetResponse.prototype.setSuccess = function (message, object) {
    var response = {}
    response.message = message;
    response.object = object
    return response;
}

SetResponse.prototype.setError = function (message, statusCode) {
    var error = new Error(message);
    error.status = statusCode;
    return error;
}

module.exports =  new SetResponse();
