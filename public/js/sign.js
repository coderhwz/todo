// jQuery准备好时，再执行基于jQuery的调用,以下的这个函数等同于 $.ready(function(){}); 调用
$(function(){
	//手机号码和邮箱的切换效果
    $(".register_nav a").click(function(){
        var detaActive = $(this).attr('date-active'),
        _this = $(this);
        tabActive = $('.tab_active'),
        dateBox = $('div[date-box="datebox"]');
        _this.addClass('active').siblings().removeClass('active');
        tabActive.animate({left:detaActive*140});
        dateBox.eq(detaActive).show().siblings().hide();
    });
    //提交手机注册
    $(".phone_box input[type=submit]").click(function(event){
        // type=submit 这个按钮是提交按钮，默认有个提交表单的事情的，所以在这里
        // 如果不把它关闭掉，那么点击之后，在执行本函数之后，就会提交默认表单提
        // 交，这里使用以下一行代码去把默认事件屏蔽
        event.preventDefault();

        var phoneNumber = $('.phone_box  .phone_number').val();
        var firstPassword = $('.phone_box  .password_lit').val();
        var phonePssword = $('.phone_box  input[type=password]').val();
        $.post("/users/create",{
            loginName:phoneNumber,
            password:firstPassword,
            repassword:phonePssword
        },function(data,status){
        	var point =$('.point');
        	point.text(data.message);
        });
    });
    //判断input的内容是否符合格式
    var phoneNumber = $('.phone_box  .phone_number');
    var phonePasswordTwo = $('.phone_box  .password_two');
    var phonePssword = $('.phone_box  input[type=password]');

    //判断手机号码是否符合格式
    phoneNumber.blur(function() {
	    var phoneNumberVal = $('.phone_box  .phone_number').val();
    	if (!(/^1(3|4|5|7|8)\d{9}$/.test(phoneNumberVal))) {
		    if (phoneNumberVal !== '') {
	    		$(this).addClass('input_active');
		    };
    	} else {
    		$(this).removeClass('input_active');
    	}
    });
    //input鼠标离开时移除红色提示样式
    $(".content_box input").focus(function(){
    	$(this).removeClass('input_active');
    });
    //判断密码是否符合格式
    phonePssword.blur(function() {
    var	phonePasswordLitVal = $('.phone_box  .password_lit').val()
    var phonePasswordTwoVal = $('.phone_box  .password_two').val();
    	if (!(/^[0-9a-zA-Z_]{6,15}$/.test(phonePasswordTwoVal))) {
    		if (phonePasswordTwoVal !== '') {
	    		$(this).addClass('input_active');
    		};
    	} else {
    		$(this).removeClass('input_active');
    	}
    });
    //第二次密码和第一次密码不同时候第二个密码框显示为红色
	phonePasswordTwo.blur(function(){
		var	phonePasswordLitVal = $('.phone_box  .password_lit').val()
	    var phonePasswordTwoVal = $('.phone_box  .password_two').val();
    	if (phonePasswordLitVal !== phonePasswordTwoVal) {
    		$(this).addClass('input_active');
    	};
	});
    //添加删除
    $('.slide_list input[name="input_lit"]').on('keypress',function(){
        if (event.which == 13) {
            event.preventDefault();
            var valLi = $(this).val();
            var listTiem ='<li><input type="checkbox">' + valLi +'</li>';
            $('.slide_list ul').append(listTiem);
            $(this).val('');
        };
    });
    $('.slide_list input[type="checkbox"]').on('click',function(){
        $(this).parent().fadeOut(function(){
            $(this).remove();
        });
    });
});
