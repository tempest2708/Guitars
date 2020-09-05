jQuery(document).ready(function($) {
	$(".gallery .owl-carousel").owlCarousel({
	    autoplay:true,
	    autoplayHoverPause:true,
	    slideSpeed: 2000,
	    loop:true,
	    nav: true,
	    navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
	    center:true,
	    dots: true,
	    responsiveClass:true,
	    smartSpeed:400,
	    margin:40,
	    responsive:{
	        0:{
	            items:1,
	            margin:0
	        },
	        800:{
	            items:2
	        },
	        1100:{
	            items:3
	        },
	        2000:{
	            items:4
	        }
	    }
	});

	$(".mobgall.owl-carousel").owlCarousel({
	    autoplay:true,
	    autoplayHoverPause:true,
	    slideSpeed: 2000,
	    loop:true,
	    nav: true,
	    navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
	    center:true,
	    dots: true,
	    responsiveClass:true,
	    smartSpeed:400,
	    margin:40,
	    responsive:{
	        0:{
	            items:2,
	            margin:20
	        }
	    }
	});

	$(".icons .grid").click(function(event) {
		$(".catalog").addClass('grid');
		$(".catalog").removeClass('list');
	});

	$(".icons .list").click(function(event) {
		$(".catalog").addClass('list');
		$(".catalog").removeClass('grid')
	});

	$(".icons i").click(function(event) {
		$(".icons i").removeClass('active');
		$(this).addClass('active');
	});

	$(".mobmenu").click(function(event) {
		$(".menu").toggleClass('show');
		$(this).toggleClass('open');
		$(".bg").toggleClass('show');
		$(".feedback").toggleClass('shadow'); 
	});

	$(".feedback").click(function(e) {
	    $(".bg").toggleClass('show');
	    $(".bgform").toggleClass('show');
	    $('.header').toggleClass('shadow'); 
	    $(this).toggleClass('open');
	});


});

