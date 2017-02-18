var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/create', function(req, res) {
    var loginName = req.query.loginName;
    models.User.find({
        where:{
            loginName:loginName
        }
    }).then(function(user){
        if(user){
            res.json({"status":1,"message":"用户已存在","data":""});
        }
    });
    models.User.create({
        loginName: req.query.loginName,
        password: bcrypt.hashSync(req.query.password, 10),
    }).then(function() {
        res.redirect('/');
    }); 
});


module.exports = router;
