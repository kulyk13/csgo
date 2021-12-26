//Hero slider
const heroSlider = new Swiper('.hero-slider', {
    loop: true,
    centeredSlides: true,
    speed: 650,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
})

//Schedule slider
const scheduleSlider = new Swiper('.schedule-slider', {
    slidesPerView: 4,
    spaceBetween: 40,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
})