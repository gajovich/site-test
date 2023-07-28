const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    speed: 1000,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    effect: 'fade',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },


});