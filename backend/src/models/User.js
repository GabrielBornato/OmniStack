    var moongose = require('mongoose');

    var UserSchema = moongose.Schema({
        email:String
    });

    module.exports = moongose.model('User',UserSchema);