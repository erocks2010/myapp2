module.exports=function(router){
    router.get('/product',function(req,res){
    res.render('productView') 
    });
};