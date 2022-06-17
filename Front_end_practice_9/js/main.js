
let dog = $('.main-part .dog-box');

function animation() {
    // 狗狗打鼓
    let curindex = dog.find('img').attr('src').substr(14, 1);
    let nextindex = (parseInt(curindex)+1)%4;
    dog.find('img').attr('src', 'images/kv_dog_' + nextindex + '.png');
}

let second_timer = setInterval("animation()", 300); //1000ms=1s


$('.phone-page.owl-carousel').owlCarousel({
    autoplay:true,
    loop:true,
    nav:false,
    dots: true,
    items:1
});