/*@Author 
Himanshu Goyal*/

var config = function () {

    var conf = {
        mongodb: "mongodb://127.0.0.1:27017/test"
    }
    return conf;
    //If we set envoirement variable
    /* switch (process.env.NODE_ENV) {
         case "development":
             return conf;
             break;
         case "staging":
             break;
         case "test":
             break;
     }*/

}

module.exports.config = config;