var models  = require('../models');
var json  = require('../helpers/json');
var express = require('express');
var router  = express.Router();


router.get('/',function(req,res){
    models.Task.findAll({
        where:{
            user_id:req.session.user.id,
        }
    }).then(function(items){
        res.json(json.success("OK",items));
    });
});



router.post('/create', function(req, res) {
    var content = req.body.content;
    models.Task.create({
        content:content,
        user_id:req.session.user.id
    }).then(function(r){
        res.json(json.success("创建任务成功！"));
    });
});

router.get('/:id/compeleted/',function(req, res){
    var id = req.params.id;
    models.Task.findOne({
        where:{
            user_id:req.session.user.id,
            id:id
        }
    }).then(function(task){
        if(!task){
            return res.json(json.error("任务不存在！"));
        }

        models.Task.update({
            compeletedAt:new Date,
        },{
            where:{
                user_id:req.session.user.id,
                id:id
            }
        }).then(function(r){
            console.log(r);

            res.json(json.success("任务设置为已完成！"));
        });

        
    });



})

router.get('/:id/destroy/',function(req, res){
    var id = req.params.id
    models.Task.findOne({
        where:{
            user_id:req.session.user.id,
            id:id
        }
    }).then(function(task){
        if(!task){
            return res.json(json.error("任务不存在！"));
        }

        models.Task.destroy({
            where:{
                user_id:req.session.user.id,
                id:id
            },force:true
        });
        return res.json(json.success("任务删除成功！"));
    });




});

module.exports = router;

