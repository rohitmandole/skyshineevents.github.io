jQuery('#contactForm').validate({
	rules:{
		
		name:"required",
		email:"required",
		

	},
	messages:{
		
		name:"please enter your name",
		email:"please enter valid email",
		
	},
submitHandler:function(form){
	form.submit();}

});