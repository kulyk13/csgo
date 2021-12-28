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
    breakpoints: {
        // window >=320px
        320: {
            allowSlideNext: false,
            allowSlidePrev: false,
            allowTouchMove: false,
            slidesPerView: 1,
            spaceBetween: 0,
        },
        576: {
            spaceBetween: 30,
            slidesPerView: 2,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
        },
        768: {
            spaceBetween: 30,
            slidesPerView: 2,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
        },
        992: {
            spaceBetween: 20,
            slidesPerView: 3,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            }, 
        },
        1200: {
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },    
        },
        1400: {
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
        },
        1500: {
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
        },
    },
})