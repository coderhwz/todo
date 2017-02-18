// jQuery准备好时，再执行基于jQuery的调用,以下的这个函数等同于 $.ready(function(){}); 调用
$(function(){
    $(".register_nav a").click(function(){
        $(this).addClass("active");
    })
});
