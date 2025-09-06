jQuery(function ($) {
    $(function () {
        var scroll_func = function () {
            $('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'slow', 'swing');
            return false;
        }
        $(function () {
            $('.anchor').click(scroll_func);
        });
    });

    $('.sec-campaign .campaign-item').matchHeight();
    $('.sec-service .service-title').matchHeight();
});


// //Scroll Top Page Header

// function scrollChangeHeader() {
//     const windowWidth = $(window).width();
//     if (windowWidth > 767) {
//         $(window).scroll(() => {
//             let scrollTop = $(window).scrollTop();
//             let aboutscrollTop = $(".about-sec").offset().top - 159;
//             if (scrollTop > aboutscrollTop) {
//                 $("header .block .right .menu-btns .menu-btn-reserve").fadeIn();
//                 $("header .block .right .menu-btns .menu-btn-register").fadeIn();
//                 $("header .header-wrapper").addClass("scrolled");
//             } else {
//                 $("header .block .right .menu-btns .menu-btn-reserve").fadeOut();
//                 $("header .block .right .menu-btns .menu-btn-register").fadeOut();
//                 $("header .header-wrapper").removeClass("scrolled");
//             }
//         });
//     }
// }

// // //Check Classes
// function areClassesPresent(classNames) {
//     const elements = document.querySelectorAll("*");

//     for (const element of elements) {
//         for (const className of classNames) {
//             if (element.classList.contains(className)) {
//                 return true;
//             }
//         }
//     }

//     return false;
// }

// let classesToCheck = ["top-page"];

// if (areClassesPresent(classesToCheck)) {
//     // $(window).resize(function () {
//     //   scrollChangeHeader();
//     // });
//     scrollChangeHeader();
// } else {
//     $("header .block .right .menu-btns .menu-btn-reserve").removeClass("d-none");
//     $("header .block .right .menu-btns .menu-btn-register").removeClass("d-none");
//     const windowWidth = $(window).width();
//     if (windowWidth < 767) {
//         $("header.others-page .header-wrapper").removeClass("scrolled");
//     }
// }