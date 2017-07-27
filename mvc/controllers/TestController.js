/* @Author Himanshu Goyal
Test Controller 
*/

module.exports = function () {

    var firstApi = function (req, res, callback) {
        console.log("First API called by mvc pattern");
        this.services.testService.firstApiService(callback)
    }

    return {
        firstApi: firstApi
    }
}