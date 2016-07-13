module.exports=function(router){
    router.get('/careerPage', function (req, res) {
        //req.session.save(function (err) { });
        //console.log(req.session);
    res.render('careerView') 
    });
};