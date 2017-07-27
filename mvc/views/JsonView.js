/* @Author Himanshu Goyal */

JsonView = function () {};
JsonView.prototype.render = function (req, res, result) {
    res.send({
        error: false,
        result: result.object,
        message: result.message,
        extendedMessage: result.extendedMessage,
        timeStamp: new Date().getTime()
    });

};

module.exports = new JsonView;
