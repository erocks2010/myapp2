var modernizr=require('modernizr');
module.exports=function(router)
{
    //router.param()
    router.get('/mainPage',function(req,res)
        {
            //modernizr.build(require('../modernizr.json'), function (result) {console.log("Passed");});
            res.render('mainView',{firstname:req.query.firstname,lastname:req.query.lastname}); 
        });  
};