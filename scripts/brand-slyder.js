document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".brandsSwiper", {
        slidesPerView: 4, // Отображать 4 логотипа одновременно
        spaceBetween: 20, // Расстояние между логотипами
        loop: true,
        navigation: {
            nextEl: ".brands-next",
            prevEl: ".brands-prev",
        },
        autoplay: {
            delay: 3000, // Авто-смена каждые 3 сек
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 6, // На планшетах показывать 6 логотипов
            },
            1024: {
                slidesPerView: 8, // На больших экранах 8 логотипов
            }
        }
    });
});
