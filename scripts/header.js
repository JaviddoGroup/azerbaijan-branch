$(document).ready(function () {
    // Открытие / закрытие поиска
    $("#search-icon").click(function (e) {
        e.stopPropagation(); // Остановка всплытия клика

        let input = $(".search-input");

        if ($(window).width() > 720) {
            // Десктопная версия
            if (input.hasClass("search-active")) {
                input.removeClass("search-active").css({ "width": "0", "opacity": "0" });
            } else {
                input.addClass("search-active").css({ "width": "150px", "opacity": "1" });
            }
        } else {
            // Мобильная версия: растягиваем input на всю ширину
            if (input.hasClass("search-active")) {
                input.removeClass("search-active").css({ "width": "0", "opacity": "0" });
            } else {
                input.addClass("search-active").css({ "width": "100%", "opacity": "1" });
            }
        }
    });

    // Закрытие поиска при клике вне его области
    $(document).click(function (e) {
        if (!$(e.target).closest("#search-icon, .search-input").length) {
            $(".search-input").removeClass("search-active").css({ "width": "0", "opacity": "0" });
        }
    });

    // Открытие / закрытие мобильного меню
    $("#mobile-menu").click(function (e) {
        e.stopPropagation();
        $(".navbar ul").toggleClass("mobile-nav");
        $(this).toggleClass("is-active"); // Анимация кнопки меню
        // $(".navbar ul").toggleClass("mobile-nav");
        $("body").toggleClass("no-scroll-body");
    });

    // Закрытие мобильного меню при клике вне его области
    $(document).click(function (e) {
        if (!$(e.target).closest(".navbar ul, #mobile-menu").length) {
            $(".navbar ul").removeClass("mobile-nav");
            $("#mobile-menu").removeClass("is-active");
            // $(".navbar ul").removeClass("mobile-nav");
            $("body").removeClass("no-scroll-body"); // Возвращаем кнопку меню в исходное положение
        }
    });
});


