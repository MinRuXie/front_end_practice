AOS.init({
    duration: 600,
    easing: 'ease-in-out'
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