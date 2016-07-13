var bodyparser = require('body-parser');
var urlencoder = bodyparser.urlencoded({ extended: false });
var passport = require('passport');

module.exports = function (router,passport,strategy) {

    /*router.get('/loginPage', function (req, res) {
        passport.authenticate('facebook', function (err, user) {
            if (user)
                res.render('careerView');
            else
                res.render('loginView');
        });
        //res.render('loginView');
    });
*/
router.get('/loginPage', function(req, res, next) {
  passport.authenticate('facebook', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('../loginpage'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('../careerPage');
    });
  })(req, res, next);
});
    router.post('/loginPage', passport.authenticate('facebook'));
    router.get('/loginPage/return',
        passport.authenticate('facebook', { successRedirect: '../careerPage', failureRedirect: 'aboutView' }),
        function (req, res) { });
        
};