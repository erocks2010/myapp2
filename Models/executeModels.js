module.exports = {
    createMenu: function () {
        var menuSet = require('./menuSet.js');
        //menuSet.save(function (err) { });
        menuSet.find({ scode: "headerNavBar" }, function (err, result) {
            if (err) throw err;
            if (result.count === undefined || 0) {
                new menuSet({ level1: 'Home', scode: 'headerNavBar' }).save();
                new menuSet({ level1: 'Product', scode: 'headerNavBar' }).save();
                new menuSet({ level1: 'Career', scode: 'headerNavBar' }).save();
                new menuSet({ level1: 'About', scode: 'headerNavBar' }).save();
                new menuSet({ level1: 'Login', scode: 'headerNavBar' }).save();
                console.log("Menu Set data inserted successfuly.")
            }
            else
                console.log("Menu Set data already present.")
        });
    },
    saveUser: function (myUser) {
        var userSet = require('./user.js');
        console.log("=============" + myUser.id);
        new userSet({ id: myUser.id, username: myUser.displayName }).save();
    }
}