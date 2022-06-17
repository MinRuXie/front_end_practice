$(function(){
    // 載入動畫
    window.onload = function(){
        $('.loading').fadeOut();
    };

    // AOS 元素動畫
    AOS.init({
        duration: 1200
    });

    // parallax.js 圖片滾動視差
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    // 變數宣告
    let win = $(window);
    let html_body = $('html, body');

    let menu = $('.menu');
    let navbar_item = $('.menu .navbar .navbar-item');
    let hamburger_black = $('.hamburger-box .hamburger-black');
    let hamburger_white = $('.hamburger-box .hamburger-white');
    let logo = $('.menu .logo-box');
    let shop = $('.menu .shop-box');

    let main_part = $('.main-part');
    let drink = $('.main-part .drink');
    let scrolldown_btn = $('.main-part .scrolldown-box');

    let material_part = $('.material-part');

    // 隨機顯示飲料
    let random = Math.ceil(Math.random()*2); //產生1~2
    if(random==2){
        drink.find('img').attr('src', 'images/index-banner-drink2.png');
        material_part.css('background-image', 'url("./images/home-banner2.png")');
    }else{
        drink.find('img').attr('src', 'images/index-banner-drink.png');
        material_part.css('background-image', 'url("./images/home-banner.png")');
    }

    // SCROLL DOWN 按鈕
    scrolldown_btn.on('click', function(){
        html_body.animate({'scrollTop': (main_part.height()-86) + 'px'}, 1000);
    });

    // MENU 選單文字中英切換
    navbar_item.on('mouseenter', function(){
        $(this).find('.en').css('opacity', '0');
        $(this).find('.zh').css('opacity', '1');
    }).on('mouseleave', function(){
        $(this).find('.en').css('opacity', '1');
        $(this).find('.zh').css('opacity', '0');
    });

    // 垂直卷軸滾動
    win.on('scroll', function() {
        var scrollTop = win.scrollTop();

        // MENU 黑色版本
        if(scrollTop > main_part.height()/5*3){ //卷軸滾動到 main-part 五分之三高度時
            // MENU 本體
            menu.css({
                'position': 'fixed',
                'z-index': '99',
                'background-color': '#000',
            });

            // MENU 選單文字
            navbar_item.css('color', '#FFF');

            // 漢堡
            hamburger_black.hide();
            hamburger_white.show();

            // LOGO
            logo.find('img').attr('src', 'images/logo-2-white.svg');

            // SHOP
            shop.find('img').attr('src', 'images/islandtea-white.svg');

        // MENU 白色版本
        }else if(scrollTop==0){
            // MENU 本體
            menu.css({
                'position': 'absolute',
                'background-color': 'transparent',
                'color': '#000'
            });

            // MENU 選單文字
            navbar_item.css('color', '#000');

            // 漢堡
            hamburger_black.show();
            hamburger_white.hide();

            // LOGO
            logo.find('img').attr('src', 'images/logo-2-black.svg');

            // SHOP
            shop.find('img').attr('src', 'images/islandtea.svg');
        }

        // main-part 滾動視差效果
        if(scrollTop < main_part.height()-86){
            main_part.css('transform', 'translateY(' + scrollTop + 'px)');
        }else{
            main_part.css('transform', 'translateY(0)');
        }

    });

});