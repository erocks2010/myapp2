var username = "erocks2010";
var password = "chi19nky";
var mongooseConString = "mongodb://" + username + ":" + password + "@ds023500.mlab.com:23500/mongonodeapp";
var mongoose = require('mongoose');
mongoose.connect(mongooseConString);
module.exports = mongoose;

