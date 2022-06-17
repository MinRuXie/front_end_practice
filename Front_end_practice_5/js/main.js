$('.banner.owl-carousel').owlCarousel({
    autoplay:true,
    loop:true,
    nav:true,
    items:1
});

$('.events.owl-carousel').owlCarousel({
    dots: false,
    center: true,
    loop:true,
    margin:50,
    nav:true,
    responsive: {
        0: {
            items:1
        },
        600: {
            items:4
        },
        1200: {
            items:4
        }
    }
});

$('.links-box.owl-carousel').owlCarousel({
    dots: false,
    loop:true,
    margin:38,
    nav:true,
    responsive: {
        0: {
            items:2
        },
        600: {
            items:4
        },
        1200: {
            items:6
        }
    }
});

$('.menu-icon').on('click', function(event){
    var element = $('.menu-status');

    if(element.hasClass('menu-closed')){
        element.removeClass('menu-closed');
        element.addClass('.menu-actived');
        $('.fa-bars').removeClass('active');
        $('.fa-times').addClass('active');
    }else{
        element.addClass('menu-closed');
        element.removeClass('.menu-actived');
        $('.fa-bars').addClass('active');
        $('.fa-times').removeClass('active');
    }
});