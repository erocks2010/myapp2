module.exports=function(router)
{
    router.get('/about',function(req,res){
    res.render('aboutView') 
    });
};