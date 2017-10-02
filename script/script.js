$(document).ready(function(){
	$(".button-collapse").sideNav();
		$(window).scroll(function(){
		var points = $(this).scrollTop();
		console.log(points);
		if(points >320){
			$("#stick").addClass('navbar-fixed');
			$(".button-collapse").sideNav();
		}
		if(points <320){
			$("#stick").removeClass('navbar-fixed');
		  	$(".button-collapse").sideNav();
		}
	})
})