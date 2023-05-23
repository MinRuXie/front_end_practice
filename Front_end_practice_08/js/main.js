$(function(){

    let win = $(window);

    let global_menu_btn = $('.global-nav .menu-mobile-btn');
    let page_menu_btn = $('.page-nav .nav-box .menu-mobile-btn');
    let page_menu_btn_down = $('.page-nav .nav-box .menu-mobile-btn .down');
    let page_menu_btn_up = $('.page-nav .nav-box .menu-mobile-btn .up');
    let page_menu_mobile = $('.page-nav-mobile');


    global_menu_btn.on('click', function(){
        global_menu_btn.toggleClass('icon-animation-open');
    });

    page_menu_btn.on('click', function(){
        // 互換 active
        page_menu_btn_down.toggleClass('active');
        page_menu_btn_up.toggleClass('active');

        // 選單開合
        if(page_menu_btn_up.hasClass('active')){
            page_menu_mobile.css('display', 'block'); // 展開選單
        }else{
            page_menu_mobile.css('display', 'none'); // 收合選單
        }
    });

    // 垂直卷軸滾動
    win.on('scroll', function() {
        var scrollTop = win.scrollTop();

        if(scrollTop>40){
            page_menu_mobile.css('top', '60px');
        }else{
            page_menu_mobile.css('top', '100px');
        }
    });


    $('.news.owl-carousel').owlCarousel({
        autoplay:true,
        loop:true,
        nav:false,
        items:1
    });

    $('.product.owl-carousel').owlCarousel({
        autoplay:true,
        loop:true,
        nav:true,
        dots:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    window.onload = function(){
        AOS.init({
            duration: 700,
            easing: 'ease-'
        });
    };

});