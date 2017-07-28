/*@Author himanshu Goyal*/
var responseHandler = require("../../util/responseHandler");
TestService = function (app) {
    console.log("Test service initlized")
    this.app = app;
};

TestService.prototype.firstApiService = function (callback) {
    console.log("control in the service", responseHandler);
    callback(null, responseHandler.setSuccess(" JSON data ", "Node JS layered architecture"))
}

TestService.prototype.createUser = function (user, callback) {
    var nick = new domain.User(user);
    // save the sample user
    nick.save(function (err) {
        console.log('User saved successfully');
        callback(err, responseHandler.setSuccess(nick, "User saved successfully"))
    });
}

TestService.prototype.jwtLogin = function (loginObject, callback) {
    domain.User.findOne({
        name: loginObject.name
    }, function (err, user) {
        if (err) throw err;
        if (!user) {
            callback(err, responseHandler.setError('Authentication failed. User not found.', 401))
        } else if (user) {
            
            // check if password matches
            if (user.password != loginObject.password) {
                callback(err, responseHandler.setError('Authentication failed. Wrong password.', 401))
            } else {
                // if user is found and password is right create a token
                var token = jwt.sign({name : user.name,admin : user.admin}, app.get('superSecret'));
                callback(err, responseHandler.setSuccess({
                    token: token,
                    user : user
                }, "User saved successfully"))
                // return the information including token as JSON
            }
        }
    })
}

module.exports = function (app) {
    return new TestService(app);
};