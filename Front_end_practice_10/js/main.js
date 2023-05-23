$(function() {
    let $mobile_menu_btn = $('#js-mobile-menu-btn');
    let $mobile_menu = $('#js-mobile-menu');

    let $mobile_sub_menu_btn = $('#js-sub-menu-btn');
    let $mobile_sub_menu = $('#js-sub-menu');

    /* mobile nav bar - menu control */
    $mobile_menu_btn.on('click', function() {
        $(this).toggleClass('active');
        $mobile_menu.toggleClass('show');
    })

    /* mobile nav menu - sub menu control */
    $mobile_sub_menu_btn.on('click', function() {
        $mobile_sub_menu.toggleClass('show');
    })
})