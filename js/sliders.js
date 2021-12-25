//Hero slider
const heroSlider = new Swiper('.hero-slider', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
})

//Schedule slider
const scheduleSlider = new Swiper('.schedule-slider', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
})