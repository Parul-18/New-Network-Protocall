//  AOS.init({
//      duration: 800,
//      easing: 'slide',
//      once: true
//  });

 jQuery(document).ready(function($) {

     "use strict";

     var slider = function() {
          


         $('.threeCollection').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            margin: 20,
            nav: false,
            autoplay: true,
            dots: true,
            navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
            responsive: {
                600: {
                    margin: 20,
                    items: 1,
                    loop: false
                },
                1000: {
                    margin: 20,
                    items: 1,
                    loop: false
                },
                1200: {
                    margin: 20,
                    items: 1,
                    loop: false
                }
            }
        });
		
		$('.oneCollection').owlCarousel({
            center: false,
            items: 2,
            loop: true,
            margin: 20,
            nav: false,
            autoplay: true,
            dots: true,
            navText: ['<span class="fa fa-angle-left">', '<span class="fa fa-angle-right">'],
            responsive: {
                600: {
                    margin: 20,
                    items: 3
                },
                1000: {
                    margin: 20,
                    items: 6
                },
                1200: {
                    margin: 20,
                    items: 6
                }
            }
        });

 
     };
     slider();
	 
	 $("#video").on('hidden.bs.modal', function (e) {
			$("#video iframe").attr("src", $("#video iframe").attr("src"));
	  });
 

 });

  