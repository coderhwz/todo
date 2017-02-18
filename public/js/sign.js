// jQuery准备好时，再执行基于jQuery的调用,以下的这个函数等同于 $.ready(function(){}); 调用
$(function(){
    $(".register_nav a").click(function(){
    	var detaActive = $(this).attr('date-active'),
	    	_this = $(this);
	    	tabActive = $('.tab_active'),
	    	dateBox = $('div[date-box="datebox"]');
        _this.addClass("active").siblings().removeClass('active');
        tabActive.animate({left:detaActive*140});
        dateBox.eq(detaActive).show().siblings().hide();
    });
});
