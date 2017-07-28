/* @Author Himanshu Goyal 
 */
var createUserValidation = require('./validator/createUser.js');

module.exports = function (app) {
    var controllers = app.controllers,
        views = app.views,
        services = app.services
    return {

        "/api": [{
                action: controllers.testController.firstApi,
                method: "GET",
                middleware: [services.authenticateService.jwtAuthenticate],
                views: {
                    html: views.jsonView
                }
            },
            {
                action: controllers.testController.createUser,
                method: "POST",
                middleware: [validate(createUserValidation)],
                views: {
                    html: views.jsonView
                }
            },

        ],
        "/api/jwt/login": [{
                action: controllers.testController.jwtAuthenticate,
                method: "POST",
                middleware: [validate(createUserValidation)],
                views: {
                    html: views.jsonView
                }
            }
        ]
    }
}
