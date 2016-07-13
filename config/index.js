var mongooseCred=require('./mongooseCred.js');
var mySQLCred=require('./mySQL.js');
module.exports={
    mongooseConString:"mongodb://"+mongooseCred.username+":"+mongooseCred.password+"@ds023500.mlab.com:23500/mongonodeapp",
    mySQLCon:mySQLCred
}

