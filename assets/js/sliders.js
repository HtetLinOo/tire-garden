function initSliders() {
    // Magazine slider initialization
    const magazineSlider = $('.magazine-slider');
    if (magazineSlider.length) {
        magazineSlider.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '.prev-arrow',
            nextArrow: '.next-arrow',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });
    }

    // Campaign slider initialization
    const campaignSlider = $('.campaign-slider');
    if (campaignSlider.length) {
        campaignSlider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '.prev-cus',
            nextArrow: '.next-cus',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
}
