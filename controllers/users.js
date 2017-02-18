var models  = require('../models');
var json  = require('../helpers/json');
var express = require('express');
var router  = express.Router();
var bcrypt = require('bcrypt');



router.post('/create', function(req, res) {
    var loginName = req.body.loginName,password = req.body.password;

    var fields = [
        {
            'field':'loginName',
            'name':'用户名',
        },
        {
            'field':'password',
            'name':'密码',
        },
        {
            'field':'repassword',
            'name':'确认密码',
        },
    ];

    fields.forEach(function(e){
        if(!req.body[e.field]){
            return res.json(json.error(e.name + "不能为空"));
        }
    });

    models.User.find({
        where:{
            loginName:loginName
        }
    }).then(function(user){

        if(user){
            return res.json({"status":1,"message":"用户已存在","data":""});
        }

        models.User.create({
            loginName: loginName,
            password: bcrypt.hashSync(password, 10),
        }).then(function() {
            res.json(json.success("用户注册成功!"));
        }); 
    });

});


module.exports = router;
