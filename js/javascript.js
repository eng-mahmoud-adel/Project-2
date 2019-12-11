/* global $, window */
var $;
$(function () {
    "use strict";
    // adjusting header height
    var myHeight = $(".header");
    myHeight.height($(window).height());
    $(window).resize(function () {
        myHeight.height($(window).height());
    });
    // adding and removing class to lists
    $(".list li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    // trigger the bxslider
    $('.bxslider').bxSlider({
        pager : false
    });
    // smooth scrolling
    $(".list li a").click(function () {
        $("html, body").animate({
            scrollTop : $("#" + $(this).data("value")).offset().top
        }, 1000);
    });
    // making my own slider for testimonials
    (function myTestiSlider() {
        $(".testi-info div").each(function () {
            if ($(this).hasClass("opinion")) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass("opinion").next().addClass("opinion").fadeIn();
                    myTestiSlider();
                });
            }
        });
    }
    ());
    // Trigger nice scroll plugin
    $("body").niceScroll({
        cursorcolor: "black",
        cursorwidth: "10px"
    });
                                   
    
    
    
});