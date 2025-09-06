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

$(window).on("scroll", function () {
    // skip if menu is open
    if ($("header").hasClass("open")) {
        return; 
    }

    if ($(this).scrollTop() > 150) {
        $("header").addClass("scrolled");
    } else {
        $("header").removeClass("scrolled");
    }
});

    $('.sec-campaign .campaign-item').matchHeight();
    $('.sec-service .service-title').matchHeight();
});

//Top Button
$(document).ready(function () {
  $(window).scroll(function () {
    const footerMain = $("#footer");
    const scrollPosition = $(window).scrollTop();
    const windowHeight = $(window).height();
    const footerMainOffset = footerMain.offset().top;

    if (scrollPosition <= 300) {
      $(".pagetop").addClass("d-none");
    } else {
      $(".pagetop").removeClass("d-none");
    }

    if ($(window).width() <= 768) {
      if (scrollPosition + windowHeight >= footerMainOffset) {
        $(".scrolltop").addClass("pos");
      } else {
        $(".scrolltop").removeClass("pos");
      }
    } else {
      if (scrollPosition + windowHeight >= footerMainOffset) {
        $(".scrolltop").addClass("pos");
      } else {
        $(".scrolltop").removeClass("pos");
      }
    }
  });

  //To Top Click
  setTimeout(() => {
    $(".pagetop").click(() => {
      window.scrollTo(0, 0);
    });
  }, 300);
});

//Top Page Tab
$(document).ready(function () {
  $(".sec-shop .area-tab .tab-nav .tab-ttl").click(function (e) {
    console.log("tab")
    e.preventDefault();

    $(".sec-shop .area-tab .tab-nav .tab-ttl").removeClass("active");
    $(this).addClass("active");

    const activeTab = $(this).attr("data-tab");

    if (typeof activeTab === "undefined" || activeTab === "") {
      console.error("Tab is undefined or empty!");
      return;
    }

    $(".sec-shop .area-tab .tab-box").hide();
    $("." + activeTab).fadeIn(200);
  });
});


// //Menu Button Click
setTimeout(()=> {
    $("header .menu-btn").click((e) => {
           e.stopPropagation();
    // $(".open-wrapper").fadeToggle();
    // $("headaer .menu-open-wrapper").fadeToggle();
    $("header").toggleClass("open");
    $("header .menu-btn").toggleClass("open");
    // $("header.others-page").toggleClass("open");
    // $(".header-wrapper").toggleClass("open");
    // if ($("header .menu-btn").hasClass("open")) {
    //     $("header .menu-btn button img:first-child").fadeOut();
    //     $("header .menu-btn button img:last-child").fadeIn();
    // } else {
    //     $("header .menu-btn button img:first-child").fadeIn();
    //     $("header .menu-btn button img:last-child").fadeOut();
    // }
});
// Click outside to close
    $(document).click(function (e) {
        if ($("header").hasClass("open") && !$(e.target).closest("header .menu-btn, .open-wrapper").length) {
            $("header").removeClass("open");
            $("header .menu-btn").removeClass("open");
        }
    });

    // Prevent clicks inside the wrapper from closing
    $("header .menu-open-wrapper").click(function (e) {
        e.stopPropagation();
    });
},1000);

// $(".open-wrapper .menu-items-block ul li a").click(() => {
//     $("header .menu-btn").removeClass("open");
//     $("header .menu-btn button img:first-child").fadeIn();
//     $("header .menu-btn button img:last-child").fadeOut();
//     $("header.others-page").removeClass("open");
//     $(".header-wrapper").removeClass("open");
//     $(".open-wrapper").hide();
// });

//Scroll Top Page Header

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