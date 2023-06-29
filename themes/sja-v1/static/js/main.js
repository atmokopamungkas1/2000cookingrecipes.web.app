/* -----------------------------------------------
					Js Main
--------------------------------------------------
    Template Name: NoonPost. - Personal Blog HTML Template
--------------------------------------------------

Table of Content

	. Preloader
    . Navigation
    . Search
    . Back-top
    . Carousel-hero
    
----------------------------------- */


(function ($) {
    "use strict";

    /* -----------------------------------
            Preloader
    ----------------------------------- */
    $('.loading').delay(500).fadeOut(500);


    /* -----------------------------------
            Navigation
    ----------------------------------- */
    $(window).on('scroll', function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar").addClass("navbar-scroll");
        } else {
            $(".navbar ").removeClass("navbar-scroll");
        }
    });

    $('.navbar-toggler').on('click', function () {
        $('.navbar-collapse').collapse('show');
    });



    /* -----------------------------------
           Search
    ----------------------------------- */
    $('.search-icon').on('click', function () {
        $('.search').addClass('search-open');
    });
    $('.close').on('click', function () {
        $('.search').removeClass('search-open');
    });


    /* -----------------------------------
           Back-top
    ----------------------------------- */
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 250) {
            $('.back-top').fadeIn(300);
        } else {
            $('.back-top').fadeOut(300);
        }
    });

    $('.back-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);
        return false;
    });

    

})(jQuery);


