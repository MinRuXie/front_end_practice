$('.banner.owl-carousel').owlCarousel({
    autoplay:true,
    loop:true,
    nav:false,
    items:1
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

$(function(){
    var win = $(window);
    var menu = $(".menu");
    var logo = $(".menu .logo-box");

    win.on('scroll', function() {
        var scrollTop = win.scrollTop();

        if(scrollTop > menu.height()){
            menu.css('height', '50px');
            logo.css('height', '45px');
        }else if(scrollTop==0){
            menu.css('height', '70px');
            logo.css('height', '55px');
        }
    });
});

