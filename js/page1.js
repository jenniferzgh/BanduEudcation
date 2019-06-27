$(function(){
var win=$(window);
var doc=$(document);
var _width=$(window).width();	
var section2_Title=$('#section2_Title');
var notice_model1=$('#notice_model1');
var notice_model2=$('#notice_model2');
var advisingBank=['开课时间:','开课内容:','开课详情:','开课地点:','今年想看见你参考']
var lookBackTitle=['上节内容回顾','回顾内容','回顾内容','回顾内容','今年想看见你参考']

//请求数据
var arr=['5月3日','今年想看见你参考','把警察先生把车','今年想看见你参考','今年想看见你参考'];
var arr2=['5月3日','今年想看见你参考','上节课我们学了把警察','今年想看见你参考','今年想看见你参考'];


// 开课通知模块动态插入通知内容
htmlTemp= '';
	
	for(var i = 0; i <5; i++) {
    
    	
		htmlTemp += '<div class="candidate">' +
		'<span>'+advisingBank[i]+'</span>'
		 + arr[i] + '</div>'
	}
    notice_model1.html(htmlTemp);


htmlForLookBack= '';
	
	for(var i = 0; i <5; i++) {
    
    	
		htmlForLookBack += '<div class="candidate">' +
		'<span>'+lookBackTitle[i]+'</span>'
		 + arr2[i] + '</div>'
	}
    notice_model2.html(htmlForLookBack);


//pc端滚动条滚动时页面动态效果
win.scroll(function(){
	 // console.log(doc.scrollTop())
if (_width>767){
if(doc.scrollTop()>=200&&doc.scrollTop()<=800){
section2_Title.css({
	fontSize:'30px',
	transition:'all 0.3s ease-in'});

}
if(doc.scrollTop()<=100){
section2_Title.css({
	fontSize:'15px',	
	transition:'all 0.3s ease-in-out'});	
}
if(doc.scrollTop()>800){
section2_Title.css({
	fontSize:'15px',	
	transition:'all 0.3s ease-in-out'});	
}


}

})






})