
function campaignSlider() {

    $(".campaign-slider").slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        infinite: true,
        // autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        // arrows: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        centerMode: true,
        variableWidth: true,
         prevArrow: $('.prev-cus'),
        nextArrow: $('.next-cus'),
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    infinite: true,
                    // autoplay: true,
                    autoplaySpeed: 0,
                    dots: true,
                    cssEase: "linear",
                    speed: 3000,
                    arrows: false,
                    vertical: false,
                    variableWidth: true,
                    pauseOnHover: false,
                    pauseOnFocus: false,
                },
            },
        ],
    });
}

function magazineSlider() {
    $(".magazine-slider").slick({
        slidesToScroll: 1,
        slidesToShow: 3,
        infinite: true,
        // autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        arrows: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        // centerMode: true,
        // variableWidth: true,
        //  prevArrow: $('.prev-cus'),
        // nextArrow: $('.next-cus'),
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2,
                    infinite: true,
                    // autoplay: true,
                    autoplaySpeed: 0,
                    dots: true,
                    cssEase: "linear",
                    speed: 3000,
                    arrows: false,
                    vertical: false,
                    variableWidth: true,
                    pauseOnHover: false,
                    pauseOnFocus: false,
                },
            },
        ],
    });
}
$(document).ready(function () {
    campaignSlider();
    magazineSlider();
});

