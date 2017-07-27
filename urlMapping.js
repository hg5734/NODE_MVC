/* @Author Himanshu Goyal 
 */
module.exports = function (app) {
    var controllers = app.controllers,
        views = app.views;
    return {

        "/": [{
                action: controllers.testController.firstApi,
                method: "GET",
                views: {
                    html: views.jsonView
                }
            }
        ],
    }
}
