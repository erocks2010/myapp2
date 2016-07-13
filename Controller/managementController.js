module.exports=function(router){
    router.get('/management',function(req,res){
    res.render('managementView') 
    });
}