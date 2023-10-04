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
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
});

/* Funcion para activar el menu responsive */
function toggleMenu() {
    var menuToggle = document.querySelector('.menuToggle');
    var nav = document.querySelector('.nav');
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
}