ErrorView = function(){
    
}
ErrorView.prototype.render = function (req, res, result) {
    res.status(500)
    res.send({
        error: true,
        result: result.object,
        message: result.message,
        extendedMessage: result.extendedMessage,
        timeStamp: new Date().getTime()
    });

};

module.exports = new ErrorView;