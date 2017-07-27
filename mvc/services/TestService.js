/*@Author himanshu Goyal*/
var responseHandler = require("../../util/responseHandler");
TestService = function (app) {
    console.log("Test service initlized")
    this.app = app;
};

TestService.prototype.firstApiService = function (callback) {
    console.log("control in the service",responseHandler);
    callback(null,responseHandler.setSuccess(" JSON data ","Node JS layered architecture"))
}

module.exports = function (app) {
    return new TestService(app);
};