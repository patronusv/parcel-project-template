$(document).ready(function () {
    $('.slider-big').slick({
        arrows: true,
        slidesToShow: 1,
        // fade: true
        asNavFor: ".slider"
        
    });
    $('.slider').slick({
        arrows: false,
        slidesToShow: 3,
        asNavFor: ".slider-big",        
        mobileFirst: true,
        focusOnSelect: true,
        variableWidth: true,        
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 7,
                    // slidesToScroll: 0,
                }
            }
        ]
    });
    $('.slider').slick('reInit');
    $('.slider').slick('setPosition');
    $('.slider-big').slick('reInit');
    $('.slider-big').slick('setPosition');


    
});