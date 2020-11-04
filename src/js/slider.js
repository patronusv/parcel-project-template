$(document).ready(function () {
    $('.slider-big').slick({
        arrows: false,
        slidesToShow: 1,        
        // fade: true
        asNavFor: ".slider",
        mobileFirst: true,
        responsive:[
            {
                breakpoint: 768,
                settings: {                    
                    arrows: true,
                   

                }
            }
        ]
        
    });
    $('.slider').slick({
        arrows: true,
        slidesToShow: 3,
        asNavFor: ".slider-big",        
        mobileFirst: true,
        focusOnSelect: true,
        variableWidth: true,  
        
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 6,                    
                    arrows: false,

                }
            }
        ]
    });
    $('.slider').slick('reInit');
    $('.slider').slick('setPosition');    
    // $('.slider-big').slick('reInit');
    // $('.slider-big').slick('setPosition');
    


    
});