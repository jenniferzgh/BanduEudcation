$(function(){

var win=$(window);
var doc=$(document);
var navbar=$('.navbar');
var to_top=$('.to_top');


// 滚动条向下时导航栏的状态发生变化

win.scroll(function(){
	if(doc.scrollTop()>=60){
	navbar.addClass('whenScoll');
	
      
} 

	else{
		navbar.removeClass('whenScoll');
		
	}
	if(doc.scrollTop()>=2000){
        to_top.addClass('show');
	}
	else{
		to_top.removeClass('show');
	}
})




//回到顶部的出现和消失

$('.to_top').on('click',function(){
	$('body,html').animate({scrollTop:0}, 2000);
	return false;
})

$('.navbar-toggle').on('click',function(){
	$('#do-navbar-collapse').addClass('navBackground');
}
	)









})