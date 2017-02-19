// jQuery准备好时，再执行基于jQuery的调用,以下的这个函数等同于 $.ready(function(){}); 调用
$(function(){
    $(".register_nav a").click(function(){
        var detaActive = $(this).attr('date-active'),
        _this = $(this);
        tabActive = $('.tab_active'),
        dateBox = $('div[date-box="datebox"]');
        _this.addClass('active').siblings().removeClass('active');
        tabActive.animate({left:detaActive*140});
        dateBox.eq(detaActive).show().siblings().hide();
    });
    $(".phone_box input[type=submit]").click(function(event){
        // type=submit 这个按钮是提交按钮，默认有个提交表单的事情的，所以在这里
        // 如果不把它关闭掉，那么点击之后，在执行本函数之后，就会提交默认表单提
        // 交，这里使用以下一行代码去把默认事件屏蔽
        event.preventDefault();

        var phoneNumber = $('.phone_box  .phone_number').attr('placeholder');
        var verificationCode = $('.phone_box  .passwod_lit').attr('placeholder');
        var phonePssword = $('.phone_box  input[type=password]').attr('placeholder');
        $.post("/users/create",{
            loginName:phoneNumber,
            password:verificationCode,
            repassword:phonePssword
        },function(data,status){
        	var point =$('.point');
        	point.text(data.message);
            console.log(data.message);
            //alert("数据:"+data +"\状态:"+status);
        });
    });
});
