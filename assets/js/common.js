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

  // only run if viewport is wider than 768px
  if ($(window).width() > 768) {
    if ($(this).scrollTop() > 150) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  } else {
    // remove scrolled state if resizing to mobile
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
setTimeout(() => {
  $("header .menu-btn").click((e) => {
    e.stopPropagation();
    $("header").toggleClass("open");
    // $("body").toggleClass("open");
    $("header .menu-btn").toggleClass("open");
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
}, 1000);

