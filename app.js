var fs = require('fs');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));
var router = express.Router();
//-----------------------------------------------Getting Required Mongoose Connection and Models------------------------------------------
var mongoose = require('./config/mongooseConnect.js');
var executeModels = require('./Models/executeModels.js');
executeModels.createMenu();
//-----------------------------------------------Getting Required Mongoose Connection and Models------------------------------------------
//---------------------------------------------------Express-Session management--------------------------------------
var session = require('express-session');
var mongoCookieSession = require('connect-mongo')(session);
var uidSafe = require('uid-safe');
var sessionOptions = {
    store: new mongoCookieSession({ mongooseConnection: mongoose.connection, ttl: 14 * 24 * 60 * 60 }),
    secret: "ethanHunt",
    resave: "false",
    saveUninitialized: "true",
    cookie: { path: '/' }
}
if (app.get('env') === 'production') {
    app.set('trust client', 1);
    sessionOptions.cookie.secure = true;
}
else {
    sessionOptions.cookie.secure = false;
}
app.use(session(sessionOptions));
//---------------------------------------------------Express-Session management--------------------------------------

//--------------------------------------------------------FB Authentication-----------------------------------------------------
//FACEBOOK AUTHENTICATION SECTION
//SERIALIZE AND DESERIALIZE functionalities to be written.Use express-session to store the authenticated FB user to server cookie
//Later use mongodb-session store to save the server cookie like in PRODUCTION ENV would
var User = require('./Models/user.js');

var passport = require('passport');
var facebook = require('passport-facebook');
var strategy = new facebook.Strategy({
    clientID: '1009512672418579',
    clientSecret: '97887e7a5fd9c2945b2f281af4bc7ded',
    callbackURL: 'http://localhost:3000/loginPage/return'
},
    function (accessToken, refreshToken, profile, cb) {
        return cb(null, profile);
    });

passport.serializeUser(function (user, done) {
    console.log("=========in serealizerUser==========");
    console.log(user);
    executeModels.saveUser(user);
    done(null, user.id);
    //req.session.save(function (err) { });
    console.log("==========end serealizerUser========");
});

passport.deserializeUser(function (id, done) {
    var userSet = require('./Models/user.js');
    userSet.findOne({ 'id': id }, function (err, user) {
        if (err) throw err;
        console.log("User Found with displayName as " + user.username);
    });
    console.log("=========in desirealizeUser=======");
    done(null, id);
    console.log("========end desirealizeUser======");
});

passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());
app.get('/', function(req,res){
    res.render('loginview');
});
//---------------------------------------------------------FB Authentication------------------------------------------------

//var mysql = require('mysql');
//var con = mysql.createConnection(config.mySQLCon);
var myJogger = function (req, res, next) {
    //console.log(req.session);
    //console.log(req.user);
    //req.session.save(function (err) { });
    next();
};
//-----------------------------------------------Getting Required Controllers for Navigation------------------------------

app.use(router);
router.use(myJogger);
var loginController = require('./Controller/loginController.js');
var mainController = require('./Controller/mainController.js');
var aboutController = require('./Controller/aboutController.js');
var managementController = require('./Controller/managementController.js');
var productController = require('./Controller/productController.js');
var careerController = require('./Controller/careerController.js');
var careerController = require('./Controller/sample1Controller.js');
loginController(router, passport, strategy);
mainController(app);
aboutController(app);
managementController(app);
productController(app);
careerController(router);
//-----------------------------------------------Getting Required Controllers for Navigation------------------------------
//testing
//

app.listen(process.env.PORT);

