$(document).ready(function() {
	$("a[href='"+window.location.pathname+"']").addClass("active");

	$('.noScroll').hover(function (){
	    $('body').css('overflow','hidden');
	}, function (){
	    $('body').css('overflow','auto');
	})
});