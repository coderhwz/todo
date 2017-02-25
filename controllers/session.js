var models  = require('../models');
var json  = require('../helpers/json');
var express = require('express');
var router  = express.Router();
var bcrypt = require('bcrypt');
router.post('/create', function(req, res) {

    var fields = [
        {
            'field':'loginName',
            'name':'用户名',
        },
        {
            'field':'password',
            'name':'密码',
        }
    ];

    fields.forEach(function(item){
        var f = req.body[item.field]
        if(!f || f.length < 1){
            return res.json(json.error(item.name + "不能为空"));
        }
    });

    var loginName = req.body.loginName,
        password = req.body.password;

    models.User.find({
        where:{
            loginName:loginName
        }
    }).then(function(user){

        if(!user){
            return res.json(json.error('用户不存在'));
        }

        var currentUser = req.session.user;
        if(currentUser 
            && currentUser.loginName == user.loginName 
            && currentUser.logined){
            return res.json(json.success('您已登录'))
        }

        var pass = bcrypt.compareSync(password, user.password);

        if (!pass) {
            return res.json(json.error('密码不正确!'))
        }

        req.session.user = {
            loginName:user.loginName,
            logined:true,
            id: user.id
        };

        req.session.save();

        res.json(json.success('登录成功!'));
    });



});

router.get('/destroy',function(req, res){
    if(req.session.user && req.session.user.logined){
        req.session.user.logined = false;
    }

    res.json(json.success("注销成功!"));
});

module.exports = router;

