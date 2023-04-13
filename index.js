/* Funcion de configuracion de Swiper.js */
var swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
});