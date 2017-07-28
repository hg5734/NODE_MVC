/* @Author Himanshu Goyal
Test Controller 
*/

module.exports = function () {

    var firstApi = function (req, res, callback) {
        console.log("First API called by mvc pattern");
        this.services.testService.firstApiService(callback)
    }

    var createUser = function (req, res, callback) {
        console.log("control in the create user", req.body);
        this.services.testService.createUser(req.body, callback);
    }

    var jwtAuthenticate = function (req, res, callback) {
        console.log("Control in jwt authenticate");
        var loginObject = req.body;
        this.services.testService.jwtLogin(req.body, callback);
    }

    return {
        firstApi: firstApi,
        createUser: createUser,
        jwtAuthenticate :jwtAuthenticate
    }
}
