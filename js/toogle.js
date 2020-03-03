
$(document).ready(function(){
	
	$("#bundleidstock").hide();
	$("#stockid").click(function(){
		$("#bundleidstock").slideToggle('fast');
	});
	
	$("#bundleidjb").hide();
	$("#jbid").click(function(){
		$("#bundleidjb").slideToggle('fast');
	});
	
	$("#bundleiduser").hide();
	$("#userid").click(function(){
		$("#bundleiduser").slideToggle('fast');
	});
	
});