document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".mySwiper", {
        loop: true,
        navigation: {
            nextEl: ".desktop-slider .swiper-button-next",
            prevEl: ".desktop-slider .swiper-button-prev",
        },
        pagination: {
            el: ".desktop-slider .swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    new Swiper(".mySwiperMobile", {
        loop: true,
        navigation: {
            nextEl: ".mobile-slider .swiper-button-next",
            prevEl: ".mobile-slider .swiper-button-prev",
        },
        pagination: {
            el: ".mobile-slider .swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});
