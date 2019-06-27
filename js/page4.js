$(function(){

$('input').focus(function(){
$(this).addClass('inputFocus');
})
$('input').blur(function(){
$(this).removeClass('inputFocus');
})

// 表单信息验证

var selfName=$('#selfName');
var sex=$('#sex');
var sensusRegister=$('#sensusRegister');
var IdNumber=$('#IdNumber');
var cellPhoneNumber=$('#cellPhoneNumber');
var subject=$('#subject');
var submit=$('#submit');
var allMessage=[];
var options = {
	//警告出现时间
		duration: 1000,		
		type: 'danger'
	};
	var message = ''
submit.click(function(){
    // 匹配所有中文字以外的字符
	var re=/[^\u4e00-\u9fa5]/g;
    
	if(selfName.val()==''){
	message='姓名不能为空';
	createToast(message, options)
	}
	else if(re.test(selfName.val())){
		
	 	message='请填写中文全名';
	 createToast(message, options)
	}

	//性别填写验证
	else if(sex.val()==''){
    message='性别不能为空';
    createToast(message, options)
	}
	else if(re.test(sex.val())){
		
	 	message='请正确填写性别';
	 createToast(message, options)
	}
	//户籍验证
	else if(sensusRegister.val()==''){
    message='户籍不能为空';
    createToast(message, options)
	}
    // 身份证验证
    else if(IdNumber.val()==''){
    message='身份证不能为空';
    createToast(message, options)
	}
	//手机号码验证
	else if(cellPhoneNumber.val()==''){
    message='手机号码不能为空';
    createToast(message, options);    
	}
	else if(cellPhoneNumber.val().length!=11&&cellPhoneNumber.val().length!=6){
		alert(cellPhoneNumber.val().length);
		message='手机号码为空号';
    createToast(message, options);
	}
    else if(subject.val()==''){
    message='请填写报名课程';
    createToast(message, options);    
	}
	else {
		allMessage.push(selfName.val());
		allMessage.push(sex.val());
		allMessage.push(sensusRegister.val());
		allMessage.push(IdNumber.val());
		allMessage.push(cellPhoneNumber.val());
		allMessage.push(subject.val());

		$.ajax({
             url: '',
				type: 'POST',
				dataType: 'json',
				data: {
					allMessage:	allMessage,		
				},
				success: function(data) {
					if (true) {
							message = '提交成功';
					createToast(message, options);
					}
				},


		})		
	}


})


function createToast(message, options){
	$.toast.config.align = 'right';
	$.toast.config.width = window.innerWidth - 10;
	$.toast(message, options);
}


})