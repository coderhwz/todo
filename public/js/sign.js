// jQuery准备好时，再执行基于jQuery的调用,以下的这个函数等同于 $.ready(function(){}); 调用
$(function(){
    $(".register_nav a").click(function(){
    	var detaActive = $(this).attr('date-active')
        $(this).addClass("active").siblings().removeClass('active');
        $('.tab_active').animate({left:detaActive*140});
        $('div[date-box="datebox"]').eq(detaActive).show().siblings().hide();
    })
});
